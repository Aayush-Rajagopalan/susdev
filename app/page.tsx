import { LandingHero } from "@/components/hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { buttonVariants } from "@/components/ui/button";
import data from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-sky-950 overflow-hidden">
        <LandingNavbar />
        <section className="space-y-6 my-48 lg:my-0 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <LandingHero />
        </section>
        {/* <footer className="flex justify-center items-center text-center text-white">
        Made with ❤️ by <Link href="https://aayus.me" className="mx-1">Aayush Rajagopalan </Link> and Abrar Labib
      </footer> */}
      </div>
      <section id="goals" className="bg-sky-950 space-y-6 lg:my-0 pb-8 pt-6 md:pb-10 md:pt-10 lg:py-30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-100">
            Sustainable Development goal
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-sky-200">
            Our commitment to a sustainable future
          </p>
        </div>
        <section
          className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="goal"
        >
          {data.map((goal) => (
            <Link
              key={goal.id}
              href={`/goal/${goal.id}`}
            >
              <div
                className={cn(
                  `p-4 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2`,
                  {
                    "bg-noPoverty": goal.color === "noPoverty",
                    "bg-zeroHunger": goal.color === "zeroHunger",
                    "bg-goodHealth": goal.color === "goodHealth",
                    "bg-qualityEducation": goal.color === "qualityEducation",
                    "bg-genderEquality": goal.color === "genderEquality",
                    "bg-cleanWater": goal.color === "cleanWater",
                    "bg-affordableEnergy": goal.color === "affordableEnergy",
                    "bg-decentWork": goal.color === "decentWork",
                    "bg-innovationInfrastructure":
                      goal.color === "innovationInfrastructure",
                    "bg-reducedInequalities":
                      goal.color === "reducedInequalities",
                    "bg-sustainableCities": goal.color === "sustainableCities",
                    "bg-responsibleConsumption":
                      goal.color === "responsibleConsumption",
                    "bg-climateAction": goal.color === "climateAction",
                    "bg-lifeBelowWater": goal.color === "lifeBelowWater",
                    "bg-lifeOnLand": goal.color === "lifeOnLand",
                    "bg-peaceJustice": goal.color === "peaceJustice",
                    "bg-partnershipsgoals": goal.color === "partnershipsgoals",
                  }
                )}
              >
                <h3 className="font-bold text-xl py-4 md:text-2xl">
                  {goal.title}
                </h3>
              </div>
            </Link>
          ))}
        </section>
      </section>
    </>
  );
}
