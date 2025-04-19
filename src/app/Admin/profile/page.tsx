import Image from "next/image";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Switch } from "@/components/ui/switch";
export default function profilePage() {
  return (
    <div className="w-[100%] rounded-[8px] mx-auto p-3">
      <div className="bg-white p-5 rounded-[8px] mx-auto w-[95%]">
        <div className="mx-auto mb-6 flex justify-between">
          <div className="flex flex-col gap-y-0.5">
            <h1 className="text-[#2D3748] font-bold text-xl">
              Bendahmane Nesrine
            </h1>
            <h2 className="text-[#1B281B] font-semibold text-base">
              Administrator
            </h2>
            <h3 className="text-[#142E159E] font-normal text-sm">
              example@gmail.com
            </h3>
          </div>
          <div>
            <Image
              src="/user.svg" alt="user profile picture" width={65} height={65} />
          </div>
        </div>
       
        <hr className="mb-4"></hr>
        
        <div className="mx-auto flex justify-between items-center">
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-[#1B281B] font-semibold text-base">
              Privacy settings
            </h2>
          </div>
         
        </div>

        <div className="mx-auto mt-3 flex justify-between items-center">
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-[#1B281B] font-semibold text-base">
              Two factor authentication
            </h2>
            <h3 className="text-[#142E159E] font-normal text-sm">
              Enhance account security
            </h3>
          </div>
          <div>
            <Switch className="data-[state=checked]:bg-[#00A36C] data-[state=unchecked]:bg-gray-300" />
          </div>
        </div>

        <div className="mx-auto mt-3 flex justify-between items-center">
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-[#1B281B] font-semibold text-base">
              Email notifications
            </h2>
            <h3 className="text-[#142E159E] font-normal text-sm">
              Recieve updates via email
            </h3>
          </div>
          <div>
            <Switch defaultChecked className="data-[state=checked]:bg-[#00A36C] data-[state=unchecked]:bg-gray-300" />
          </div>
        </div>

        <div className="mx-auto my-3 flex justify-between items-center">
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-[#1B281B] font-semibold text-base">
              Sales alerts
            </h2>
            <h3 className="text-[#142E159E] font-normal text-sm">
              Get notified of sales
            </h3>
          </div>
          <div>
            <Switch defaultChecked className="data-[state=checked]:bg-[#00A36C] data-[state=unchecked]:bg-gray-300" />
          </div>
        </div>
        
        <hr className="mb-4 mt-3"></hr>
        
        <div className="mx-auto mb-3 flex justify-between">
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-[#1B281B] font-semibold text-base">
              Personnal information
            </h2>
            <h3 className="text-[#1B281B] font-semibold text-sm">
              Change Password
            </h3>
          </div>
          <div></div>
        </div>
        
        <div className="flex flex-col w-full space-y-2">
          <Input 
            placeholder="Your password" 
            type="password" 
            className="border-[#E2E8F0] placeholder:text-[#A0AEC0] placeholder:font-semibold w-[400px] py-5"
          />
          <div className="flex justify-between w-full gap-3">
            <Input 
              placeholder="Your password" 
              type="password" 
              className="border-[#E2E8F0] placeholder:text-[#A0AEC0] placeholder:font-semibold w-[400px] py-5"
            />
            <Input 
              placeholder="Confirm password" 
              type="password" 
              className="border-[#E2E8F0] placeholder:text-[#A0AEC0] placeholder:font-semibold w-[400px] py-5"
            />
          </div>
          <Button className="w-[220px] bg-[#3792F9] hover:bg-[#3792F9] ml-auto mt-2">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}