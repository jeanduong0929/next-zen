import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between max-w-screen-lg w-11/12 mx-auto py-5">
        {/* Left side */}
        <ul className="flex items-center gap-5">
          <Link href={"/"} className="flex items-center">
            <CommandIcon size={24} className="mr-2" />
            <h1 className="font-bold text-xl">ZEN</h1>
          </Link>
        </ul>

        {/* Right side */}
        <ul>
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
