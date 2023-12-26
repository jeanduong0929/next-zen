"use client";

import React from "react";
import Link from "next/link";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import instance from "@/lib/axios-config";
import { Button } from "@/components/ui/button";
import { CommandIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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
  // Form states
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Error states
  const [emailError, setEmailError] = React.useState<string>("");
  const [passwordError, setPasswordError] = React.useState<string>("");

  // Loading state
  const [loading, setLoading] = React.useState<boolean>(false);

  // Custom hook
  const router = useRouter();
  const { toast } = useToast();

  const isValidEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const isValidPassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (!e.target.value.trim()) {
      setEmailError("Email is required");
    } else if (!isValidEmail(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (!e.target.value.trim()) {
      setPasswordError("Password is required");
    } else if (!isValidPassword(e.target.value)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await instance.post("/auth/register", {
        email,
        password,
      });

      toast({
        title: "Account created",
        className: "bg-slate-900 text-white",
      });

      router.push("/login");
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        setEmailError("Email is already taken");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-3 w-[350px]" onSubmit={handleSubmit}>
        {/* Email */}
        <FormInput
          type="email"
          placeholder="name@example.com"
          onChange={handleEmail}
          onBlur={handleEmail}
          error={emailError}
        />

        {/* Password */}
        <FormInput
          type="password"
          placeholder="Password"
          onChange={handlePassword}
          onBlur={handlePassword}
          error={passwordError}
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
