"use client";
import data from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

export default function GoalPage({ params }: { params: { goalId: string } }) {
  const goals = data.find((goal) => goal.id === params.goalId); 

  if (!goals) {
    return (
      <div>
        <p>{params.goalId} is not a goal</p>
      </div>
    );
  }
  
  const nextgoal = data.find((goal) => goal.num === goals.num+1);
  const prevgoal = data.find((goal) => goal.num === goals.num-1);
  return (
    <>
      <div
        className={cn(
          `h-full space-y-6 my-0 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-2`,
          {
            "bg-noPoverty": goals.color === "noPoverty",
            "bg-zeroHunger": goals.color === "zeroHunger",
            "bg-goodHealth": goals.color === "goodHealth",
            "bg-qualityEducation": goals.color === "qualityEducation",
            "bg-genderEquality": goals.color === "genderEquality",
            "bg-cleanWater": goals.color === "cleanWater",
            "bg-affordableEnergy": goals.color === "affordableEnergy",
            "bg-decentWork": goals.color === "decentWork",
            "bg-innovationInfrastructure":
              goals.color === "innovationInfrastructure",
            "bg-reducedInequalities": goals.color === "reducedInequalities",
            "bg-sustainableCities": goals.color === "sustainableCities",
            "bg-responsibleConsumption":
              goals.color === "responsibleConsumption",
            "bg-climateAction": goals.color === "climateAction",
            "bg-lifeBelowWater": goals.color === "lifeBelowWater",
            "bg-lifeOnLand": goals.color === "lifeOnLand",
            "bg-peaceJustice": goals.color === "peaceJustice",
            "bg-partnershipsgoals": goals.color === "partnershipsgoals",
          }
        )}
      >
        {" "}
        <div className="text-white font-bold md:pt-36 text-center space-y-5">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-8 font-heading">
            <h1 className="text-2xl">Sustainable Goal</h1>
            <div className="text-transparent bg-clip-text pb-4 bg-gradient-to-r text-white">
              <TypewriterComponent
                options={{
                  strings: [`${goals.title}`],
                  autoStart: true,
                  loop: false,
                  delay: "natural",
                }}
              />
            </div>
            <div className="max-w-screen-md mx-auto">
              <div className="text-xl font-normal md:text-lg lg:text-xl xl:text-2xl">
                {goals.desc}
              </div>
            </div>
            
            <div className="space-x-5">
            {goals.num >1 ? <Link
                className="inline-flex mt-8 items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "
                href={`/goal/${prevgoal?.id}`}
              >
                Previous
              </Link>: <></>}
              {goals.num < data.length ? <Link
                className="inline-flex mt-8 items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "
                href={`/goal/${nextgoal?.id}`}
              >
                Next
              </Link>: <></>}
            </div>
            <Link
              className="inline-flex mt-8 items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "
              href="/#goals"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
