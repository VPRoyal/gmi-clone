"use client"
import React from 'react'
import styles from "./table.module.css"
import { ApeChainLogo } from '../ui/logo'
import { useCollectionContext } from '@/context/collectionContext'
import formatCollection from '@/utils/formatCollections'
import { useRouter } from 'next/navigation'
const tHeadData = ["#", "Collection", "Floor Price", "Top Bid", "1D Change", "7D Change", "1D Volume", "7D Volume", "Total Volume", "Owners", "Supply"]

const Table = () => {
    const router = useRouter();
    const {paginatedCollections, isLoading} = useCollectionContext();  
    return (
        <div className={`overflow-x-scroll laptop:overflow-hidden rounded-lg w-full ${styles.scrollbarCustom}`}>
            {!isLoading && <table className={`${styles.table}`}>
                <thead>
                    <tr >
                        {tHeadData.map((item, index) => (
                            <th key={index} className={`${item == 'Collection' ? 'sticky left-0 bg-[#141619]' : ''}`}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='text-[14px] text-center'>
                    {paginatedCollections.map((item, index) => {
                        item = formatCollection(item);
                        return (
                            <tr key={item.id} onClick={()=> router.push(`https://marketplace.reservoir.tools/apechain/collection/${item.id}`)}>
                                <td>{index + 1}</td>
                                <td className='flex items-center whitespace-nowrap overflow-hidden truncate' name="name">
                                    <span className='w-8 h-8 rounded-sm mr-2 flex-shrink-0'><img src={item.image} alt={item.name} className='' /></span>
                                    <span>{item.name}</span>
                                </td>
                                <td><div className='flex items-start justify-center gap-x-2'><span className='w-[24px] h-[24px]'><ApeChainLogo className="text-[#0054FA]"/></span><span className='flex items-center'>{item.floorPrice || "-"}</span></div></td>
                                <td><div className='flex items-center justify-center gap-x-2'><span className='w-[24px] h-[24px]'><ApeChainLogo className="text-[#0054FA]"/></span><span>{item.topBid || "-"}</span></div></td>
                                <td>{item["1DChange"] || "-"}</td>
                                <td>{item["7DChange"] || "-"}</td>
                                <td><div className='flex items-center justify-center gap-x-2'><span className='w-[24px] h-[24px]'><ApeChainLogo className="text-[#0054FA]"/></span><span>{item["1DVolume"] || "-"}</span></div></td>
                                <td><div className='flex items-center justify-center gap-x-2'><span className='w-[24px] h-[24px]'><ApeChainLogo className="text-[#0054FA]"/></span><span>{item["7DVolume"] || "-"}</span></div></td>
                                <td><div className='flex items-center justify-center gap-x-2'><span className='w-[24px] h-[24px]'><ApeChainLogo className="text-[#0054FA]"/></span><span>{item.totalVolume || "-"}</span></div></td>
                                <td>{item.owners || "-"}</td>
                                <td>{item.supply || "-"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
        </div>
    )
}

export default Table;