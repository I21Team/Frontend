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
export default function history() {
    return (
      <div className="bg-[#F6F7F9] w-[95%] mx-auto p-4">
        <div className='flex justify-between'>
        <Input placeholder="Search for something" icon={<img src="/search.svg" alt="email icon" className="w-4 h-4" />} className="w-[40%] bg-[#3792F91A] border-0 py-6" />
    <div className='flex gap-4 justify-between'>
    <Select onValueChange={(value) => console.log(value)}>
      <SelectTrigger className="w-[200px]  bg-white">
        <SelectValue placeholder="Select the period" />
      </SelectTrigger>
      <SelectContent className='bg-white text-black'>
        <SelectItem value="last month">last month</SelectItem>
        <SelectItem value="last month">last month</SelectItem>
        <SelectItem value="last month">last month</SelectItem>
      </SelectContent>
    </Select>
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
        <DataTable/>
      </div>
    );
}