"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutIcon, Settings, UserIcon } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-col gap-2 w-[230px]">
        <Link
          href={"/dashboard"}
          className={`flex items-center hover:bg-slate-200 px-5 py-2 rounded-md ${
            pathname === "/dashboard" && "bg-slate-200"
          }`}
        >
          <LayoutIcon className="h-4 w-4 mr-2" />
          Dahsboard
        </Link>

        <Link
          href={"/profile"}
          className={`flex items-center hover:bg-slate-200 px-5 py-2 rounded-md ${
            pathname === "/profile" && "bg-slate-200"
          }`}
        >
          <UserIcon className="h-4 w-4 mr-2" />
          Profile
        </Link>

        <Link
          href={"/settings"}
          className={`flex items-center hover:bg-slate-200 px-5 py-2 rounded-md ${
            pathname === "/settings" && "bg-slate-200"
          }`}
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
