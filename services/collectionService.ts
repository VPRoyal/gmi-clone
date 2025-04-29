import { Collection } from '@/types/collection';
import axios from 'axios';

// const ENERGY_API="https://api.energiswap.exchange/v1/assets"
// const Trending_Collections_API="https://api.reservoir.tools/collections/trending/v1"
// const Collections_API="https://api.reservoir.tools/collections/v7"
const collection_api="https://explorer-proxy-main.reservoir.tools/api/reservoir/apechain/collections/v7"

export const collectionIds = [
  "0xa6babe18f2318d2880dd7da3126c19536048f8b0",
  "0xb3443b6bd585ba4118cae2bedb61c7ec4a8281df",
  "0xbebaa24108d6a03c7331464270b95278bbbe6ff7",
  "0xd33edec311f8769c71f132a77f0c0796c22af1c5",
  "0x0178a9d0b0cba1b2ede3afdb6dd021db24ff4240",
];
const formatPrice =(raw:string, decimals:number)=>{
 const wei= BigInt(raw)
 const ether= wei / BigInt(10**decimals) // 1 ether = 10^18 wei
  return Number(Number(ether).toFixed(2))
}
export async function getCollections(): Promise<Collection[]> {
  try {
    // Ensuring TypeSafety by introducing type of fetched data.
    const apeCollections: any= await Promise.all(collectionIds.map(async (id) => {
      const response = await axios.get<any>(collection_api, {
        params:{id}
      });
      return response.data?.collections[0];
    }))
    
    // return response.data;
    return Object.values(apeCollections).map((collection: any) => ({
        name: collection.name,
        id: collection.id,
        image: collection.image,
        floorPrice: collection.floorAsk?.price?formatPrice(collection.floorAsk.price.amount.raw, collection.floorAsk.price.currency.decimals): null,
        topBid: collection.topBid?.price?.amount.decimal ?? null,
        "1DChange": collection.volumeChange["1day"] ?? null,
        "7DChange": collection.volumeChange["7day"] ?? null,
        "1DVolume": collection.volume["1day"] ?? null,
        "7DVolume": collection.volume["7day"] ?? null,
        totalVolume: collection.volume["allTime"] ?? null,
        owners: collection.ownerCount ?? null,
        supply: collection.tokenCount ?? null, 
    }));
  } catch (error) {
    console.error('Error fetching collections:', error);
    throw new Error('Unable to fetch collection data.');
  }
}
