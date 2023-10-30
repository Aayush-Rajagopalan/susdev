"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command } from "lucide-react";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <header className="container z-40 bg-sky-950">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="bg-transparent flex gap-6 md:gap-10">
          <Link href="/" className="items-center space-x-2 flex">
            <Image height={50} width={50} src={"https://cdn.discordapp.com/attachments/818175522840379453/1168575361211170916/UNLogo.png?ex=6552439d&is=653fce9d&hm=0dd1d32703df1698a55ae43849d7800a6abe9b740f28d74bc4824100dff7ee77&"} alt="un logo"/>
            <span className="font-bold text-white inline-block">United Nations Sustainable Development</span>
          </Link>
        </div>
        {/* <div className="flex items-center gap-x-2">
          <Button variant="outline" className="rounded-full"></Button>
        </div> */}
      </div>
    </header>
  );
};
