import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { CollectionProvider } from "@/context/collectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GonnaMakeIt NFT Marketplace",
  description: "GonnaMakeIt NFT Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="https://pbs.twimg.com/profile_images/1872074444350656512/rPUGMIFN_400x400.jpg" />
      </head>
      <body>
        <CollectionProvider>
        <Navbar />
        {children}
        </CollectionProvider>
      </body>
    </html>
  );
}