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
    <header className="container z-40 bg-emerald-950">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="bg-transparent flex gap-6 md:gap-10">
          <Link href="/" className="items-center space-x-2 flex">
            <Command className="text-white" />
            <span className="font-bold text-white inline-block">Susdev</span>
          </Link>
        </div>
        {/* <div className="flex items-center gap-x-2">
          <Button variant="outline" className="rounded-full"></Button>
        </div> */}
      </div>
    </header>
  );
};
