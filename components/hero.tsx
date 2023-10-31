"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {

  return (
    <div className="text-white font-bold md:py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-8 font-heading">
        <h1>Sustainable Development Starts with</h1>
        <div className="text-transparent bg-clip-text pb-4 bg-gradient-to-r from-sky-300 to-teal-700">
          <TypewriterComponent
            options={{
              strings: [
                "Taking Care of Nature.",
                "Clean Water and Sanitation",
                "Affordable and Clean Energy",
                "Creating Sustainable Cities",
                "Taking Care of Nature.",
                "Improving Life on Land",
                "Improving Life Under Water",
              ],
              autoStart: true,
              loop: true,
              delay: "natural"
            }}
          />
        </div>
      </div>
      <div>
          <Link href={"/#goals"}>
          <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            View the Goals
          </Button>
          </Link>
      </div>
    </div>
  );
};