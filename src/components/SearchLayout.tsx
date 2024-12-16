

interface SearchLayoutProps {
    children: React.ReactNode;
}

const SearchLayout: React.FC<SearchLayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-center">
            <div className="w-full h-full md:w-[662px] bg-white rounded-[8px] border-2 border-[#FFCB05] p-[2px]">
                <div className="w-full h-full border-2 border-[#00729F] rounded-[6px] px-[20px] pt-[20px]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SearchLayout;