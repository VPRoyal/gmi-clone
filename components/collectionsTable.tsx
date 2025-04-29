// components/Table.tsx
import { FC } from "react";
import Image from "next/image";

interface Collection {
  rank: number;
  name: string;
  image: string;
  floorPrice: number;
  topBid: number;
  change24h: string;
  change7d: string;
  volume24h: number;
  volume7d: number;
  totalVolume: number;
  owners: string;
  supply: number;
}

const collections: Collection[] = [
  {
    rank: 1,
    name: "Gummy Invasions",
    image: "https://nft-mainnet-assets.s3.us-west-2.amazonaws.com/contract-thumbnail/0x3c6ab8a82ccceb58215d9daf53d8b2dcb3f7f2d6_fdb28a6.jpeg",
    floorPrice: 57.77,
    topBid: 30.41,
    change24h: "0.0%",
    change7d: "0.0%",
    volume24h: 182.43,
    volume7d: 2671.21,
    totalVolume: 6000,
    owners: "32 (15%)",
    supply: 214,
  },
  // Add more collections as needed
];

const TableComponent: FC = () => {
  return (
    <div className="w-full p-6 bg-gray-900 text-white">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg">
          <thead className="bg-gray-800">
            <tr className="text-left">
              <th className="p-3">#</th>
              <th className="p-3">Collection</th>
              <th className="p-3">Floor Price</th>
              <th className="p-3">Top Bid</th>
              <th className="p-3">1D Change</th>
              <th className="p-3">7D Change</th>
              <th className="p-3">1D Volume</th>
              <th className="p-3">7D Volume</th>
              <th className="p-3">Total Volume</th>
              <th className="p-3">Owners</th>
              <th className="p-3">Supply</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr key={collection.rank} className="border border-gray-700">
                <td className="p-3">{collection.rank}</td>
                <td className="p-3 flex items-center gap-3">
                  <Image src={collection.image} alt={collection.name} width={32} height={32} />
                  {collection.name}
                  <span className="text-yellow-500 cursor-pointer">★</span>
                </td>
                <td className="p-3">${collection.floorPrice}</td>
                <td className="p-3">${collection.topBid}</td>
                <td className="p-3">{collection.change24h}</td>
                <td className="p-3">{collection.change7d}</td>
                <td className="p-3">${collection.volume24h}</td>
                <td className="p-3">${collection.volume7d}</td>
                <td className="p-3">${collection.totalVolume}</td>
                <td className="p-3">{collection.owners}</td>
                <td className="p-3">{collection.supply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;