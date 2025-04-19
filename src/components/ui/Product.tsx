"use client";
import React from 'react';
import Image from 'next/image';

export default function Product() {
  return (
    <div className="rounded-lg shadow-md w-[18%] mx-auto overflow-hidden bg-white">
      <div className="bg-[#00263b] p-2">
        <Image 
          src="/food.png" 
          alt="Pizza Fries" 
          width={200}
          height={100}
          className="w-full rounded-md object-cover"
        />
      </div>
      <div className="p-2 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-medium text-[#00263b]">Pizza Fries</h3>
          <p className="text-lg font-normal">Rs. 1928/-</p>
        </div>
        
      </div>
    </div>
  );
}