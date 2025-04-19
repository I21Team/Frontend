
export interface SidebarLink {
  name: string;
  href: string;
  icon1 : string;
  icon2 : string;
}

export const adminSidebarLinks: SidebarLink[] = [
  {
    name: "Dashboard",
    href: "/Admin/dashboard",
    icon1: "/dashboard.svg",
    icon2: "/dashboard_white.svg",
    
  },
  {
    name: "Products",
    href: "/Admin/products",
    icon1: "/products.svg",
    icon2: "/products_white.svg",
  },
  {
    name: "Sales history",
    href: "/Admin/history",
    icon1: "/history.svg",
    icon2: "/history_white.svg",
  },
  {
    name: "Profile",
    href: "/Admin/profile",
    icon1: "/profile.svg",
    icon2: "/profile_white.svg",

  },
  {
    name: "Settings",
    href: "/Admin/settings",
    icon1: "/settings.svg",
    icon2: "/setting_white.svg",

  },

];

// export const commercialSidebarLinks: SidebarLink[] = [
//   {
//     name: "Tableau de Bord",
//     href: "/commercial/dashboard",
//   },
//   {
//     name: "Clients",
//     href: "/commercial/clients",
//   },
//   {
//     name: "Ventes",
//     href: "/commercial/sales",
//   },
//   {
//     name: "Offres",
//     href: "/commercial/offers",
//   },
//   {
//     name: "Paramètres",
//     href: "/commercial/settings",
//   },
// ];