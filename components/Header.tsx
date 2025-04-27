"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggler } from "./ui/theme-button";

const Header = () => {
  const { openSignIn } = useClerk();
  return (
    <header className="h-[80px] bg-background w-full px-8 lg:px-16 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="ZChat-AI"
          width={140}
          height={70}
          sizes="120px"
          // fill
          // className="object-contain object-center"
        />
      </Link>

      <div className="flex gap-2 items-center">
        <ThemeToggler />
        <SignedOut>
          <Button
            className="cursor-pointer"
            onClick={() => {
              openSignIn();
            }}
          >
            Login
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
