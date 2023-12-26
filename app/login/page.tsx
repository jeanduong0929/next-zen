"use client";

import React from "react";
import Link from "next/link";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import NextAuthButton from "@/components/next-auth-button";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, CommandIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <>
      {/* Navbar */}
      <LoginNavbar />

      <div className="flex flex-col items-center justify-center max-w-screen-lg w-11/12 mx-auto h-screen gap-5">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-2">
          <CommandIcon size={24} />
          <h1 className="font-bold text-2xl">ZEN</h1>
          <p className="text-slate-500 text-sm">
            Enter your email to sign in to your account
          </p>
        </div>

        {/* Form */}
        <LoginForm />
      </div>
    </>
  );
};

const LoginNavbar = () => {
  return (
    <>
      <nav className="absolute max-w-screen-lg w-11/12 mx-auto inset-x-0 py-5">
        <Link href={"/"}>
          <Button variant={"ghost"}>
            <ChevronLeftIcon className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
      </nav>
    </>
  );
};

const LoginForm = () => {
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
        <FormButton type={"submit"}>Sign In with Email</FormButton>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="w-full" />
          <p>OR</p>
          <hr className="w-full" />
        </div>

        {/* NextAuth */}
        <NextAuthButton />

        {/* Footer */}
        <footer className="underline underline-offset-4 text-center">
          <Link href={"/register"}>Don&apos;t have an account? Sign Up</Link>
        </footer>
      </form>
    </>
  );
};

export default LoginPage;
