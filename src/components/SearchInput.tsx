import { ICONS_PATH } from "@/constant/icons";
import { MAX_INPUT_LENGTH } from "@/constant/pokemon";
import Image from "next/image";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full min-w-[200px]">
      <div className="relative flex items-center">
        <Image
          className=" absolute left-3 "
          src={ICONS_PATH.SEARCH}
          alt="search"
          width={14}
          height={14}
        />
        <input
          aria-label="Search input"
          value={value}
          onChange={onChange}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-8 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow h-[40px]"
          placeholder="Search"
        />
        <div className="absolute right-3 text-[#B6BAC8] text-sm">
          {
            value.length > 0 && (
              <span>{value.length}/{MAX_INPUT_LENGTH}</span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SearchInput;