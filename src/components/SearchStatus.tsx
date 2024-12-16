import { ICONS_PATH } from '@/constant/icons';
import { SearchStatusEnum } from '@/types/pokemon';
import Image from 'next/image';

type SearchStatusProps = {
    status: SearchStatusEnum;
};

const SearchStatus: React.FC<SearchStatusProps> = ({ status }) => {
    return (
        <div className="flex justify-center gap-3 items-center flex-col min-h-[378px] md:min-h-[202px]">
            {status === SearchStatusEnum.searching && <Searching />}
            {status === SearchStatusEnum.notFound && <NotFound />}
            {status === SearchStatusEnum.initial && <Initial />}
        </div>
    );
};

const NotFound: React.FC = () => (
    <div className="text-center">
        <p className="text-sm font-medium text-gray-400">Not found</p>
    </div>
);

const Initial: React.FC = () => (
    <div>
        <p className="text-sm font-medium text-gray-400">
            Try searching for Pokémon by their name
        </p>
    </div>
);

const Searching: React.FC = () => (
    <div className="flex justify-center items-center gap-2 flex-col">
        <Image
            className="animate-spin"
            src={ICONS_PATH.LOADING}
            alt="Loading animation"
            height={40}
            width={40}
        />
        <div className="space-y-1 text-center">
            <p className="text-md font-bold text-black">Sending Request</p>
            <p className="text-sm text-gray-500">Please wait...</p>
        </div>
    </div>
);

export default SearchStatus;