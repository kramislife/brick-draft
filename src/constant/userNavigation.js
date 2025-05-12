import {
  Home,
  Info,
  Phone,
  Clock,
  User,
  LogIn,
  UserPlus,
  FileText,
  ShieldCheck,
  MapPin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

export const publicNavLinks = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
  },
  {
    name: "Contact Us",
    path: "/contact",
    icon: Phone,
  },
  {
    name: "Ticket History",
    path: "/history",
    icon: Clock,
  },
];

export const accountLinks = [
  {
    name: "My Account",
    path: "/profile",
    icon: User,
  },
  {
    name: "Login",
    path: "/login",
    icon: LogIn,
  },
  {
    name: "Register",
    path: "/register",
    icon: UserPlus,
  },
];

export const supportInfo = [
  {
    text: "Terms Of Use",
    path: "/terms",
    type: "routerLink",
    icon: FileText,
  },
  {
    text: "Privacy Policy",
    path: "/privacy",
    type: "routerLink",
    icon: ShieldCheck,
  },
  {
    text: "Lehi, Utah 84043",
    type: "text",
    icon: MapPin,
  },
  {
    text: "brickextremeofficial@gmail.com",
    type: "externalLink",
    href: "mailto:brickextremeofficial@gmail.com",
    icon: Mail,
  },
];

export const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/theworldofminifigs/",
    ariaLabel: "Visit our Facebook page",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/theworldofminifigs/",
    ariaLabel: "Follow us on Instagram",
  },
];
