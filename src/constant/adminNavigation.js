import {
  LayoutDashboard,
  BellIcon,
  ImageIcon,
  PackageIcon,
  Puzzle,
  TicketIcon,
  ShoppingCartIcon,
  UsersIcon,
  SettingsIcon,
} from "lucide-react";

export const adminNavigation = [
  {
    section: "Overview",
    items: [
      {
        label: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    section: "Content",
    items: [
      {
        label: "Announcements",
        path: "/admin/announcements",
        icon: BellIcon,
      },
      {
        label: "Banners",
        path: "/admin/banners",
        icon: ImageIcon,
      },
    ],
  },
  {
    section: "Lottery Management",
    items: [
      {
        label: "Lotteries",
        path: "/admin/lotteries",
        icon: PackageIcon,
      },
      {
        label: "Parts",
        path: "/admin/parts",
        icon: Puzzle,
      },
      {
        label: "Tickets",
        path: "/admin/tickets",
        icon: TicketIcon,
      },
      {
        label: "Orders",
        path: "/admin/orders",
        icon: ShoppingCartIcon,
      },
    ],
  },
  {
    section: "User Management",
    items: [
      {
        label: "Users",
        path: "/admin/users",
        icon: UsersIcon,
      },
    ],
  },
//   {
//     section: "System",
//     items: [
//       {
//         label: "Settings",
//         path: "/admin/settings",
//         icon: SettingsIcon,
//       },
//     ],
//   },
];
