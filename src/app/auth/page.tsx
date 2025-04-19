'use client';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../../components/ui/form";
import { useRouter } from 'next/navigation'; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../../components/ui/input"; 
import Image from "next/image";
import { Button } from "../../components/ui/button";
export default function Home() {
  type FormData = {
    email: string;
    password: string;
  };
  const form = useForm({
    resolver: zodResolver(
      z.object({
        email : z.string().email({ message: "Email is required." }),
        password : z.string().min(8, { message: "Password is required." }),
     
      })
    ),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleForgetPassword = () => {
  }
  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    console.log(data);
    router.push('/Admin/dashboard')
  };
  return (
    <div className="flex w-full flex-row justify-between">
      
      <div className="w-[50%] flex flex-col space-y-20 font-bold text-5xl items-center justify-center h-screen">
        <h1 className="font-bold  text-[40px] text-[#003049]">
          Welcome !
        </h1>
      <Form {...form} >
         <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-[100%]  flex-col  items-center  justify-center">
         <FormField 
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-[60%] mb-5" >
            <FormLabel className="text-[#003049]">Email</FormLabel>
            <FormControl>
            <Input 
  placeholder="example@email.com" 
  {...field} 
  className="py-8  placeholder:text-[#1A365DCC]/60 placeholder:font-medium font-inter bg-[#3792F90D] rounded-[8px] w-full border " 
  icon={<img src="/sms.svg" alt="email icon" className="w-5 h-5" />}

/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem  className="w-[60%]  items-center">
            <FormLabel className="text-[#003049]">Password</FormLabel>
            <FormControl>
            <Input type="password"
  placeholder="At least 8 characters" 
  {...field} 
  className="py-8  placeholder:text-[#1A365DCC]/60 placeholder:font-medium font-inter bg-[#3792F90D] rounded-[8px] w-full border " 
  icon={<img src="/lock.svg" alt="email icon" className="w-5 h-5" />}

/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="w-[60%] mt-0 flex items-end">
  
      <p onClick={handleForgetPassword} className="text-[#003049] underline mt-2 text-[14px] ml-auto font-normal cursor-pointer">
        Forgot password ?
      </p>
        </div>
     


<Button 
              type="submit" 
              className="w-[60%] mt-10 mx-auto font-montserrat ml-auto py-8 flex justify-center items-center text-[15px] bg-[#3792F9] text-white tracking-wide">
                Sign in
            </Button>
         </form>
      </Form>
      <h2 className="text-[15px] font-normal">
      DevCamp © 2025. All rights reserved. Proudly crafted by i21.
      </h2>
      </div>
        
      <div className="w-1/2 h-screen relative">
  <Image
    src="/Image.svg"
    alt="Picture of a person working on a computer"
    fill
    className="object-cover"
  />
</div> 
    </div>
  );
}
