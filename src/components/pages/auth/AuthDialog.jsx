import React from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn, UserPlus } from "lucide-react";
import Login from "@/components/pages/auth/Login";
import Register from "@/components/pages/auth/Register";

const authTabs = [
  {
    value: "login",
    label: "Login",
    icon: <LogIn />,
    component: <Login />,
  },
  {
    value: "register",
    label: "Register",
    icon: <UserPlus />,
    component: <Register />,
  },
];

const AuthDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-start font-['Bangers'] text-3xl tracking-widest">
          Welcome to Brick Draft
        </DialogTitle>
        <DialogDescription className="sr-only">Brick Draft</DialogDescription>
      </DialogHeader>

      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-3">
          {authTabs.map(({ value, label, icon }) => (
            <TabsTrigger key={value} value={value} className="flex items-center gap-2">
              {icon}
              <span>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {authTabs.map(({ value, component }) => (
          <TabsContent key={value} value={value}>
            {component}
          </TabsContent>
        ))}
      </Tabs>
    </DialogContent>
  );
};

export default AuthDialog;
