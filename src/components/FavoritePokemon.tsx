import React from 'react';
import CloseBtn from './Button/CloseBtn';

type FavoritePokemonProps = {
  favorites: string[];
  onClickFavorite: (name: string) => void;
  onRemove: (name: string) => void;
};

const FavoritePokemon: React.FC<FavoritePokemonProps> = ({ favorites = [], onClickFavorite, onRemove }) => {

  const handleClick = (name: string) => () => onClickFavorite(name);

  return (
    <div className="w-full flex justify-center mt-[48px] mb-[50px]">
      <div className="w-full max-w-[800px]">
        <div className="w-full px-5">
          <div className="text-gray-500 font-bold text-lg mb-2">Favorite</div>
          <div className="grid grid-cols-2 gap-4 w-full mx-auto">
            {favorites.map((pokemon, index) => (
              <div
                key={`${pokemon}-${index}`}
                className="bg-[#DBF5FF] text-[#121419] py-2 px-4 rounded-[4px] flex items-center justify-between space-x-2 cursor-pointer"
                onClick={handleClick(pokemon)}
              >
                <span className="text-sm capitalize">{pokemon}</span>
                <CloseBtn
                  onClick={() => onRemove(pokemon)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritePokemon;
