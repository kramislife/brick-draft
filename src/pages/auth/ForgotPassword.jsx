import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import AuthDialog from "@/pages/AuthDialog";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28 px-5">
      <div className="w-full max-w-lg">
        {/* Main Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Reset Your Password
            </CardTitle>
            <CardDescription>
              Enter your email address and we'll send you instructions to reset
              your password.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Form */}
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <Button variant="accent" className="w-full">
                Send Reset Instructions
              </Button>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-5 border-t">
              <p className="text-sm">
                Remember your password?{" "}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="text-blue-600 dark:text-accent p-0 h-auto font-semibold"
                    >
                      Sign in here
                    </Button>
                  </DialogTrigger>
                  <AuthDialog />
                </Dialog>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
