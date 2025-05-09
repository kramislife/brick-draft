import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const gridFields = [
  {
    id: "fullName",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    id: "username",
    label: "Username",
    placeholder: "johndoe",
    type: "text",
  },
  {
    id: "contactNumber",
    label: "Contact Number",
    placeholder: "+1 (555) 000-0000",
    type: "text",
  },
  {
    id: "emailAddress",
    label: "Email Address",
    placeholder: "john@example.com",
    type: "email",
  },
];

const passwordFields = [
  {
    id: "newPassword",
    label: "Password",
    placeholder: "Create a password",
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
  },
];

const termsLinks = [
  {
    id: "terms",
    path: "/terms",
    label: "Terms of Service",
  },
  {
    id: "privacy",
    path: "/privacy",
    label: "Privacy Policy",
  },
];

const Register = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gridFields.map(({ id, label, placeholder, type }) => (
          <div className="space-y-2" key={id}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} placeholder={placeholder} />
          </div>
        ))}
      </div>

      {passwordFields.map(({ id, label, placeholder }) => (
        <div className="space-y-2" key={id}>
          <Label htmlFor={id}>{label}</Label>
          <Input type="password" id={id} placeholder={placeholder} />
        </div>
      ))}

      <div className="flex space-x-2">
        <Checkbox id="terms" className="mt-0.5" />
        <Label htmlFor="terms" className="block leading-5">
          I agree to the{" "}
          {termsLinks.map((link, index) => (
            <React.Fragment key={link.id}>
              <NavLink
                to={link.path}
                className="text-foreground hover:text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </NavLink>
              {index === 0 && " and "}
            </React.Fragment>
          ))}
        </Label>
      </div>  

      <Button className="w-full" variant="accent">
        Register
      </Button>
    </div>
  );
};

export default Register;
