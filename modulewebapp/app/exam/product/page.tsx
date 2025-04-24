"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type TProduct = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
 };
 
 
 export type Cart = {
    id: number;
    products: TProduct[];
 };
 
export default function Product() {
    const [records, setRecords] = useState<TProduct[]>([]);
    const [post, setPost] = useState<Cart[]>([]);
useEffect(() => {
  const productAPI = async () => {
    const data = await fetch(`https://dummyjson.com/carts?limit=3 `);
    const records = await data.json();
    setRecords(records);
    };
    productAPI()
}, [])
    

  if (records.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white text-black">
      <h2 className="font-bold">Top 10 Product Cart</h2>

      <div>
        <div  className="bg-blue-100 font-bold gap-4 border border-gray-300 p-4 rounded-lg">
          <div className="font-bold">{records.title}</div>
          <div>Price: {records.price}</div>
          <div>Quantity: {records.quantity}</div>
          <div>Discount: {records.discountPercentage}</div>
          <div className="text-green-400">Discounted Total: {records.discountedTotal}</div>
        </div>

        <div>
          {records?.thumbnail && (
            <Image
              className="rounded-full"
              src={records.thumbnail}
              alt="thumbnail"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </div>
  );
}
