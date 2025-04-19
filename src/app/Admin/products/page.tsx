"use client";
import React from 'react'
import { Input } from '../../../components/ui/input';
import { DataTable } from '../../../components/ui/dataTable';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Product from '../../../components/ui/Product';
import { Button } from '@/components/ui/button';

export default function productsPage() {
    return (
      <div className="bg-[#F6F7F9] w-[95%] mx-auto p-4">
      <div className='flex justify-between mb-10'>
      <Input placeholder="Search for something" icon={<img src="/search.svg" alt="email icon" className="w-4 h-4" />} className="w-[40%] bg-[#3792F91A] border-0 py-6" />
  <div className='flex gap-4 justify-between'>
  <Button className='bg-[#3792F9] text-white' onClick={() => console.log("Add new product")}>
    Add a new product
  </Button>
  <Select  onValueChange={(value) => console.log(value)}>
    <SelectTrigger className="w-[180px] bg-white">
      <SelectValue placeholder="Filter" />
    </SelectTrigger>
    <SelectContent className='bg-white'>
      <SelectItem value="Product1">Product1</SelectItem>
      <SelectItem value="Product2">Product2</SelectItem>
      <SelectItem value="Product3">Product3</SelectItem>
    </SelectContent>
  </Select>
  </div>
      </div>
      <div className='w-full flex gap-4 mb-4'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
        </div>   <div className='w-full flex gap-4 mb-4'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
        </div>   <div className='w-full flex gap-4 mb-4'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
        </div>   <div className='w-full flex gap-4 mb-4'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
        </div>

      </div>
    );
}