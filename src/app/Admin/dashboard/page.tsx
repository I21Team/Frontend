import { Component } from "../../../components/ui/pieChart";
import TotalSales from "../../../components/ui/totalSales";
import { Prediction } from "../../../components/ui/Prediction";
import MyMap from "../../../components/ui/map";
export default function dashboad() {
    return (
      <div className="w-[97%]">
         <div className="bg-[#F6F7F9] w-[96%] mx-auto p-2 flex justify-between">
        <TotalSales/>
<Component/>
</div>
<div className="bg-[#F6F7F9] w-[96%] mx-auto p-2 flex justify-between">
<div className=" w-[35%]">
<Prediction/>
</div>
<Prediction/>

</div>

      </div>
    
    );
}