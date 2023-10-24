"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {

  return (
    <div className="text-white font-bold md:py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-8 font-heading">
        <h1>Helping Nature With</h1>
        <div className="text-transparent bg-clip-text pb-4 bg-gradient-to-r from-green-400 to-emerald-600">
          <TypewriterComponent
            options={{
              strings: [
                "Sustainable Developemnent.",
                "Unsustainable Development.",
              ],
              autoStart: true,
              loop: true,
              delay: "natural"
            }}
          />
        </div>
      </div>
      <div>

          <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Under Development
          </Button>

      </div>
    </div>
  );
};