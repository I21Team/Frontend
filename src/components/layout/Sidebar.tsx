"use client";
import { adminSidebarLinks, SidebarLink } from "../../data/sidebarLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 


const Sidebar = ({ userRole }: { userRole: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");
const handleLogOut=()=>
{
  router.push('/auth')
}
  const sidebarLinks: SidebarLink[] = userRole === "admin" 
    ? adminSidebarLinks 
    : userRole === "commercial" 
      ? adminSidebarLinks 
      : [];

  return (
    <>
      {!isAuthRoute && (
        <aside className=" overflow-hidden w-[230px]  hidden lg:flex flex-col items-center justify-center">
          <div className="lg:text-md h-[95vh] bg-white w-full rounded-[15px] flex flex-col items-center ">
            <Image src={"/logo.svg"} width={170} height={170} alt="Logo" className="ml-auto my-10" />

            <div className="w-[230px]  flex flex-col justify-between items-center">
            {sidebarLinks.map((link, index) => (
  <div key={index} className="flex justify-center items-center w-full">
    
    {pathname.startsWith(link.href) && (
      <Image
        alt="active indicator"
        src="/active.svg"
        width={4}
        height={24}
        className="mr-2"
      />
    )}

    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative mb-2 flex items-center gap-2 w-full font-medium p-4 rounded-lg  
        ${pathname.startsWith(link.href)
          ? 'bg-[#3792F9] text-white rounded-[4px]'
          : 'text-[#003049] rounded-[4px]'}
      `}
    >
      {/* Icon */}
      <Image src={ pathname.startsWith(link.href)? link.icon2 : link.icon1} width={20} height={20} alt="" />

      {/* Link */}
      <Link
        href={link.href}
        className={` ${pathname.startsWith(link.href)
          ? 'text-white'
          : 'text-[#003049]'}
        `}
      >
        {link.name}
      </Link>
    </motion.div>
  </div>
))}


            </div>
            <motion.div
              className="h-[40%] flex flex-col items-center justify-end w-full">
              <div className="flex flex-col items-center border-t-border border-t-[1px] py-6 mx-auto w-full">
                <div className="flex gap-2 mx-auto ">
                  <Image
                    src="/logout.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <p onClick={handleLogOut} className="text-[#C1121F] font-medium cursor-pointer">Log out</p>
                </div>
              </div>
            </motion.div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;