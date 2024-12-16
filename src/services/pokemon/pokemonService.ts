import { IPokemon } from "@/types/pokemon";
import { PokemonInstance } from "../instance";

const getPokemonByName = async (name: string): Promise<IPokemon> => {
    const response = await PokemonInstance.get(`/pokemon/${name.toLowerCase()}`);
    const data = response.data;
    return {
        name: data.name,
        weight: data.weight,
        height: data.height,
        image: data.sprites.front_default,
        versions: data.game_indices.map((entry: any) => entry.version.name),
    };
};

export const PokemonService = {
    getPokemonByName,
  };