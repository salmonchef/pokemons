import { ICONS_PATH } from "@/constant/icons";
import Image from "next/image";
import React from "react";

interface CloseBtnProps {
    onClick: () => void;
}

export const CloseBtn: React.FC<CloseBtnProps> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="text-blue-400 hover:text-blue-600">
            <Image src={ICONS_PATH.CLOSE} alt='close' height={20} width={20} />
        </button>
    );
};

export default CloseBtn;