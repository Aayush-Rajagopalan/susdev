import { LandingHero } from "@/components/hero";
import { LandingNavbar } from "@/components/landing-navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-screen bg-emerald-950">
      <LandingNavbar />
      <section className="space-y-6 my-48 lg:my-0 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <LandingHero/>
      </section>
      {/* <footer className="flex justify-center items-center text-center text-white">
        Made with ❤️ by <Link href="https://aayus.me" className="mx-1">Aayush Rajagopalan </Link> and Abrar Labib
      </footer> */}
      </div>
    </>
  );
}
