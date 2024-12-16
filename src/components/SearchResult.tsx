import { ICONS_PATH } from "@/constant/icons";
import { IPokemon } from "@/types/pokemon";
import Image from "next/image";

interface SearchResultProps {
    pokemon: IPokemon;
    isFavorite: boolean;
    onClickFavorite: (name: string) => void;
};

const SearchResult: React.FC<SearchResultProps> = ({ pokemon, isFavorite = false, onClickFavorite }) => {

    const pathIconFavorite = isFavorite ? ICONS_PATH.FAVORITE_GOLD : ICONS_PATH.FAVORITE_GRAY;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-10">
            <div className="pt-0 pl-0 pb-10">
                <div className="w-full h-full flex justify-center items-center bg-[#F5F7FB]">
                    {
                        pokemon?.image && (
                            <img
                                src={pokemon?.image}
                                alt={pokemon?.name || 'Pokemon image'}
                                className="w-100 h-60 object-contain "
                            />
                        )
                    }
                </div>
            </div>
            {/* Pokémon Details */}
            <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold mb-4 text-black capitalize">{pokemon.name}</h1>
                    <Image className="cursor-pointer" onClick={()=> onClickFavorite(pokemon.name)} src={pathIconFavorite} alt="Favorite icon" width={32} height={32} />
                    
                </div>
                <dl className="grid grid-cols-2 pt-2">
                    <div>
                        <dt className="text-sm text-gray-500">Weight</dt>
                        <dd className="text-lg text-black pt-1">{pokemon.weight}</dd>
                    </div>
                    <div>
                        <dt className="text-sm text-gray-500">Height</dt>
                        <dd className="text-lg text-black pt-1">{pokemon.height}</dd>
                    </div>
                </dl>

                {/* Versions */}
                <div className="mt-4 pb-5">
                    <p className="text-sm text-gray-500 mb-2">Versions</p>
                    <div className="flex flex-wrap gap-2">
                        {pokemon.versions?.length ? (
                            pokemon.versions.map((version: string, index: number) => (
                                <span
                                    key={version}
                                    className="bg-blue-100 text-black py-1 px-3 rounded-full text-sm"
                                >
                                    {version}
                                </span>
                            ))
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;