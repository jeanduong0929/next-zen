"use client";

import React from "react";
import Link from "next/link";
import Loadingpage from "./loading";
import { Button } from "./ui/button";
import { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import {
  CommandIcon,
  LayoutIcon,
  LogOutIcon,
  Settings,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(status === "loading");
  }, [status]);

  if (loading) {
    return <Loadingpage />;
  }

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
          {session ? (
            <UserAvatar session={session} />
          ) : (
            <Link href={"/login"}>
              <Button>Login</Button>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

interface UserAvatarProps {
  session: Session;
}

const UserAvatar = ({ session }: UserAvatarProps) => {
  const getInitials = () => {
    if (session && session.user && session.user.email) {
      const email = session.user?.email;
      return (email[0] + email[1]).toUpperCase();
    }
  };

  return (
    <>
      <DropdownMenu>
        {/* Dropdown trigger */}
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.user?.image as string} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        {/* Dropdown content */}
        <DropdownMenuContent>
          {/* Dropdown user email */}
          <DropdownMenuLabel>{session.user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href={"/dashboard"}>
            <DropdownMenuItem className=" cursor-pointer">
              <LayoutIcon className="h-4 w-4 mr-2" />
              Dashboard
            </DropdownMenuItem>
          </Link>

          <Link href={"/profile"}>
            <DropdownMenuItem className=" cursor-pointer">
              <UserIcon className="h-4 w-4 mr-2" />
              Profile
            </DropdownMenuItem>
          </Link>

          <Link href={"/settings"}>
            <DropdownMenuItem className=" cursor-pointer">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className=" cursor-pointer"
            onClick={() => signOut()}
          >
            <LogOutIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Navbar;
