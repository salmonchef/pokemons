"use client";
import React, { useState } from "react";
import axios from "axios";
import { PokemonService } from "@/services/pokemon/pokemonService";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
import FavoritePokemon from "@/components/FavoritePokemon";
import Logo from "@/components/Logo";
import { IPokemon, SearchStatusEnum } from "@/types/pokemon";
import SearchStatus from "@/components/SearchStatus";
import SearchInput from "@/components/SearchInput";
import SearchResult from "@/components/SearchResult";
import SearchLayout from "@/components/SearchLayout";
import { MAX_INPUT_LENGTH } from "@/constant/pokemon";

const initialFavoritePokemons = ["pikachu", "eevee", "raichu"];
const initialPokemon: IPokemon = {
  name: "",
  weight: 0,
  height: 0,
  image: "",
  versions: [],
};

export default function Home() {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemon>(initialPokemon);
  const [searchStatus, setSearchStatus] = useState<SearchStatusEnum>(
    SearchStatusEnum.initial
  );
  const [favaritePokemons, setFavoritePokemons] = useState<string[]>(
    initialFavoritePokemons
  );
  const [searchText, setSearchText] = useState<string>("");

  const fetchPokemon = async (name: string) => {
    try {
      setSearchStatus(SearchStatusEnum.searching);
      const response = await PokemonService.getPokemonByName(name);
      setPokemonInfo(response);
      setSearchStatus(SearchStatusEnum.found);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setSearchStatus(SearchStatusEnum.notFound);
      } else {
        console.error(error);
      }
    }
  };

  const debouncedFetchPokemon = useDebouncedCallback((name: string) => {
    fetchPokemon(name);
  }, 500);

  const handleChangeSearch = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (value.length > MAX_INPUT_LENGTH) return;

    setSearchText(value);
    if (value.length > 0) {
      debouncedFetchPokemon(value);
    } else {
      setSearchStatus(SearchStatusEnum.initial);
    }
  };

  const handleClickFavoriteItem = (name: string) => {
    setSearchText(name);
    debouncedFetchPokemon(name);
  };

  const handleClickFavorite = (name: string) => {
    if (favaritePokemons.includes(name)) {
      setFavoritePokemons(
        favaritePokemons.filter((pokemon) => pokemon !== name)
      );
    } else {
      setFavoritePokemons([...favaritePokemons, name]);
    }
  };

  const handleRemoveFavorite = (name: string) => {
    setFavoritePokemons(favaritePokemons.filter((pokemon) => pokemon !== name));
  };

  const isFound = searchStatus === SearchStatusEnum.found;

  return (
    <div className="w-full">
      <div className="w-full min-h-[75vh] p-8 pb-20 gap-16 sm:p-20 bg-gradiunt">
        <Logo />
        <SearchLayout>
          <SearchInput
            value={searchText}
            onChange={handleChangeSearch}
          />
          {isFound ? (
            <SearchResult
              pokemon={pokemonInfo}
              isFavorite={favaritePokemons.includes(pokemonInfo.name)}
              onClickFavorite={handleClickFavorite}
            />
          ) : (
            <SearchStatus status={searchStatus} />
          )}
        </SearchLayout>
      </div>
      <FavoritePokemon
        onClickFavorite={handleClickFavoriteItem}
        favorites={favaritePokemons}
        onRemove={handleRemoveFavorite}
      />
    </div>
  );
}
