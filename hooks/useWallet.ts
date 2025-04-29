
"use client";
import { useState, useEffect } from "react";
import { BrowserProvider, formatEther } from "ethers";
import { createCoinbaseWalletSDK } from "@coinbase/wallet-sdk";
// import { useTokenContext } from "@/context/tokenContext";

declare global {
    interface Window {
        ethereum?: any;
    }
}

interface state {
    wallet: string | null;
    balance: string;
    usdValue: number;
    error: string | null;
    loading: boolean;
    connected: boolean;
    connectMetaMask: () => Promise<void>;
    connectCoinbase: () => Promise<void>;
    disconnectWallet: () => void;
}

const useWallet = (): state => {
    const [wallet, setWallet] = useState<string | null>(null);
    const [balance, setBalance] = useState<string>("0");
    const [usdValue, setUsdValue] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [connected, setConnected] = useState<boolean>(false);
    // const { getToken } = useTokenContext();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedWallet = localStorage.getItem("walletAddress");
            if (storedWallet) {
                setWallet(storedWallet);
                reconnectWallet();
            }
        }

        if (window.ethereum) {
            const handleAccountsChanged = (accounts: string[]) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setConnected(true);
                    fetchBalance(new BrowserProvider(window.ethereum), accounts[0]);
                } else {
                    disconnectWallet();
                }
            };
    
            window.ethereum.on("accountsChanged", handleAccountsChanged);
    
            return () => {
                window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
            };
        }
    

    }, []);

    const reconnectWallet = async (): Promise<void> => {
        try {
            const provider = new BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_accounts", []);
            if (accounts.length > 0) {
                setWallet(accounts[0]);
                setConnected(true);
                await fetchBalance(provider, accounts[0]);
            }
        } catch (err: any) {
            setError("Failed to reconnect wallet");
        }
    };
    const fetchBalance = async (provider: BrowserProvider, account: string) => {
        try {
            const rawBalance = await provider.getBalance(account);
            const ethBalance = formatEther(rawBalance);
            setBalance(ethBalance);

            // const ethPrice = (await getToken("eth")).price;
            // setUsdValue(Number(ethBalance) * ethPrice);
        } catch (err: any) {
            setError("Failed to fetch balance");
        }
    };

    const connectMetaMask = async (): Promise<void> => {
        try {
            setLoading(true);
            if (!window.ethereum) throw new Error("MetaMask is not available");

            const provider = new BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            const account = accounts[0];

            setWallet(account);
            setConnected(true);
            localStorage.setItem("walletAddress", account);
            await fetchBalance(provider, account);
        } catch (err: any) {
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    const connectCoinbase = async (): Promise<void> => {
        try {
            setLoading(true);
            const coinbaseWallet = createCoinbaseWalletSDK({
                appName: "MyApp",
                appLogoUrl: "https://myapp.com/logo.png",
            });

            const provider = coinbaseWallet.getProvider();
            await provider.request({ method: "eth_requestAccounts" });

            const ethersProvider = new BrowserProvider(provider);
            const accounts = await ethersProvider.send("eth_accounts", []);
            const account = accounts[0];

            setWallet(account);
            setConnected(true);
            localStorage.setItem("walletAddress", account);

            await fetchBalance(ethersProvider, account);
        } catch (err: any) {
            setError(err.message || "Unknown error");
        } finally {
            setLoading(false);
        }
    };

    const disconnectWallet = (): void => {
        setWallet(null);
        setConnected(false);
        localStorage.removeItem("walletAddress");
    };

    return { wallet, balance, connected, usdValue, error, loading, connectMetaMask, connectCoinbase, disconnectWallet };
};

export default useWallet;