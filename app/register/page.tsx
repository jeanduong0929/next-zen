"use client";

import React from "react";
import Link from "next/link";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import NextAuthButton from "@/components/next-auth-button";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CommandIcon } from "lucide-react";

const RegisterPage = () => {
  return (
    <>
      {/* Navbar */}
      <RegisterNavbar />

      <div className="flex flex-col items-center justify-center max-w-screen-lg w-11/12 mx-auto h-screen gap-5">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-2">
          <CommandIcon size={24} />
          <h1 className="font-bold text-2xl">Create an account</h1>
          <p className="text-slate-500 text-sm">
            Enter your email below to create your account
          </p>
        </div>

        {/* Form */}
        <RegisterForm />
      </div>
    </>
  );
};

const RegisterNavbar = () => {
  return (
    <>
      <nav className="absolute flex justify-end max-w-screen-lg w-11/12 mx-auto inset-x-0 py-5">
        <Link href={"/login"}>
          <Button variant={"ghost"}>Login</Button>
        </Link>
      </nav>
    </>
  );
};

const RegisterForm = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted!");
  };

  return (
    <>
      <form className="flex flex-col gap-3 w-[350px]" onSubmit={handleSubmit}>
        {/* Email */}
        <FormInput
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <FormInput
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Submit */}
        <FormButton type={"submit"}>Sign Up with Email</FormButton>

        {/* Footer */}
        <footer className="text-center">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </footer>
      </form>
    </>
  );
};

export default RegisterPage;
