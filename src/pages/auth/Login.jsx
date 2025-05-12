import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@/components/ui/dialog";
const fields = [
  {
    id: "email",
    label: "Email or Username",
    placeholder: "Enter your email or username",
    type: "text",
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
];

const Login = () => {
  return (
    <div className="space-y-3 pt-2">
      {fields.map(({ id, label, placeholder, type }) => (
        <div className="space-y-2" key={id}>
          <Label htmlFor={id}>{label}</Label>
          <Input id={id} type={type} placeholder={placeholder} />
        </div>
      ))}
      <div className="text-right text-sm text-foreground hover:text-accent hover:underline">
        <DialogClose asChild>
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
        </DialogClose>
      </div>

      <Button className="w-full" variant="accent">
        Log In
      </Button>
    </div>
  );
};

export default Login;
