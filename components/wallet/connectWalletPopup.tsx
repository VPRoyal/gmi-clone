import React, { useEffect, useState } from "react";
import { useWalletContext } from "@/context/walletContext";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Outline version
// import { XMarkIcon } from "@heroicons/react/24/solid"; // Solid version
// import { XMarkIcon } from "@heroicons/react/20/solid"; // Mini version


interface ConnectWalletPopupProps {
    onClose?: () => void;
}

const ConnectWalletPopup = ({ onClose }: ConnectWalletPopupProps) => {
    const { wallet, error, connectMetaMask, connectCoinbase, connected } = useWalletContext();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose?.();
    };
    useEffect(() => {
        if (connected) {
            handleClose();
        }
    },[connected])
    return (
        <div onClick={handleClose} className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-[#141619] text-white p-5 rounded-md min-w-[500px] flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[#2e333a] pb-4">
                    <p className="text-2xl">Connect Wallet</p>
                    <button onClick={handleClose} className="cursor-pointer"><XMarkIcon className="h-6 w-6 text-white "/></button>
                </div>
                <div>
                    <div><p className="text-center">Choose a wallet to connect</p></div>
                    <div className="flex flex-col gap-4 mt-4">
                        <button onClick={connectMetaMask} style={styles.button}>METAMASK</button>
                        <button onClick={connectCoinbase} style={styles.button}>COINBASE WALLET</button>
                    </div>
                </div>
            </div>
            </div>
        )
};
const styles: Record<string, React.CSSProperties> = {
    button:{
        backgroundColor: "#00ab58",
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        color: "#fff",
        cursor: "pointer",
    }
}

export default ConnectWalletPopup;