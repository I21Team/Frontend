"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");
const goToProfile = () => {

}

  const getTitle = () => {
    if (pathname.startsWith("/Admin/dashboard")) {
      return "Dashboard";
    } else if (pathname.startsWith("/Admin/history")) {
      return "Hitory of sales";
    } else if (pathname.startsWith("/Admin/products")) {
      return "Products";
    } else if (pathname.startsWith("/Admin/profile")) {
      return "Profile";
    } else if (pathname.startsWith("/Admin/settings")) {
      return "Settings";
    }
    return "Tableau de bord";
  };

  return (
    <>
      {!isAuthRoute && (
        <div className="z-50 bg-white   p-2  border-b-[#E6EFF5] border-b-[1px]  sticky font-montserrat mx-auto top-0 text-2xl w-[95%] text-[#003049] ml-auto items-center text-main font-semibold rounded-[15px] flex justify-between">
          <div>{getTitle()}</div>




          <div className=" flex w-[130px] items-center justify-between rounded-full">
          <Image 
src="/notification.svg"
 width={30}
  height={30} 
  alt="" 
  className="mx-auto" onClick={()=>
  {
    // notificaton logique
  }
  } />
  <Image 
src="/user.svg"
 width={50}
  height={50} 
  alt="" 
  className="mx-auto" onClick={goToProfile} />
          </div>
        

          {/* <Image
            src="/assets/layout/avatar.svg"
            width={50}
            height={50}
            alt=""
            className="xl:scale-100 scale-75 mx-auto"
          />{" "} */}
        </div>
      )}{" "}
    </>
  );
};

export default Header;