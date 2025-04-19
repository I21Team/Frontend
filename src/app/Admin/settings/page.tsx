"use client";
import { Switch } from "@/components/ui/switch";
import { Input } from "../../../components/ui/input";
import {Button} from "../../../components/ui/button";
import { DataTable } from '../../../components/ui/dataTable';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { data2 } from "../../../data/TbaleData";
import { columns2 } from "../../../data/TbaleData";
export default function settingsPage() {
    return (
      <div className="w-[100%] rounded-[8px] mx-auto p-3 ">
<div className="bg-white p-5 rounded-[8px] mx-auto w-[95%]">
<h2 className="text-[#1B281B] font-semibold text-base">
              Sales settings
            </h2>



            <div className="mx-auto mt-3 flex justify-between items-center">
            <h2 className="text-[#1B281B] font-semibold text-base">
              Activate threshold
            </h2>
            <Switch/>
            </div>
            
            <Input 
            placeholder="Your password" 
            type="password" 
            className="border-[#E2E8F0] mt-10 rounded-[8px] placeholder:text-[#A0AEC0] placeholder:font-normal py-5"
          />
          <div className="flex justify-end mt-2">
  <Button className="w-[200px] bg-[#3792F9] hover:bg-[#3792F9]">
    Save
  </Button>
</div>



            
</div>

<div className="bg-white p-5 rounded-[8px] mt-4 mx-auto w-[95%]">


<div className="flex mb-6 justify-between">
<h2 className="text-[#1B281B] font-semibold text-base">
              Users management
            </h2>
            <div className='flex gap-4 justify-between'>
  <Button className='bg-[#3792F9] text-white' onClick={() => console.log("Add new product")}>
    Add a new user
  </Button>
  <Select  onValueChange={(value) => console.log(value)}>
    <SelectTrigger className="w-[180px] bg-white">
      <SelectValue placeholder="Filter" />
    </SelectTrigger>
    <SelectContent className='bg-white'>
      <SelectItem value="Store1">Store1</SelectItem>
      <SelectItem value="Store2">Store2</SelectItem>
      <SelectItem value="Store3">Store3</SelectItem>
    </SelectContent>
  </Select>
  </div>

  </div>

  <DataTable  columns={columns2} data={data2}/>


</div>



            
</div>
    );
}