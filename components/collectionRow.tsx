import React from "react";

export interface Collection {
  id: number;
  name: string;
  type: string;
  items: number;
  updated: string;
}

interface CollectionRowProps {
  data: Collection;
}

const CollectionRow=({ data }: CollectionRowProps)=> {
  const { name, type, items, updated } = data;
  return (
    <tr className="bg-white hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {items}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {updated}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-4">
        <button className="text-primary hover:underline">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  );
}
export default CollectionRow;