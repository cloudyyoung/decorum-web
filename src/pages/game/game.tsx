import { useState } from "react"
import HouseSetup from "./house_setup"
import Condition from "./condition"
import clsx from "clsx"
import { Heading, Subheading } from "../../components/heading"


export const Game = () => {
  const [tab, setTab] = useState<"setup" | "conditions">("setup")

  return (
    <>
      <section className="">
        <div className="flex justify-center sticky top-0">
          <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow-md w-36 mt-2 mb-4">
            <button
              className={clsx(
                tab === "setup" ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                'rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1.5 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
              )}
              onClick={() => setTab("setup")}
            >
              <span>Setup</span>
              <span
                aria-hidden="true"
                className={clsx(
                  tab === "setup" ? 'bg-player1' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5',
                )}
              />
            </button>
            <button
              className={clsx(
                tab === "conditions" ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                'rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1.5 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
              )}
              onClick={() => setTab("conditions")}
            >
              <span>Conditions</span>
              <span
                aria-hidden="true"
                className={clsx(
                  tab === "conditions" ? 'bg-player1' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5',
                )}
              />
            </button>
          </nav>
        </div>

        {tab === "setup" && <HouseSetup />}
        {tab === "conditions" && <Conditions />}
      </section>
    </>
  )
}

const Conditions = () => {
  const conditions = [
    {
      "condition": "The Bedroom and Living Room must contain at least 1 green object.",
      "difficulty_points": 3
    },
    // {
    //   "condition": "The Living Room must contain at least 1 curio.",
    //   "difficulty_points": 1
    // },
    {
      "condition": "The Bathroom and Kitchen must contain at least 1 yellow object.",
      "difficulty_points": 3
    },
    // {
    //   "condition": "The house must contain at most 3 objects of each color.",
    //   "difficulty_points": 3
    // },
    {
      "condition": "The right side must contain at least 1 antique object.",
      "difficulty_points": 3
    },
    {
      "condition": "The right side must contain at least 1 yellow object.",
      "difficulty_points": 3
    },
    {
      "condition": "The left side must contain at least 1 unusual object.",
      "difficulty_points": 3
    },
    // {
    //   "condition": "The Kitchen must contain at most 1 yellow object.",
    //   "difficulty_points": 1
    // },
    // {
    //   "condition": "Objects in the Bedroom must all have the same style.",
    //   "difficulty_points": 3
    // },
    // {
    //   "condition": "The upstairs must contain at least 1 antique object.",
    //   "difficulty_points": 3
    // },
    // {
    //   "condition": "The Kitchen must contain at most 1 lamp.",
    //   "difficulty_points": 1
    // },
    // {
    //   "condition": "The upstairs must contain at least 1 yellow object.",
    //   "difficulty_points": 3
    // },
    // {
    //   "condition": "The house must contain all 4 styles and all 4 wall colors, and 4 empty slots.",
    //   "difficulty_points": 3
    // },
  ]

  return (
    <>
      <section className="section px-4">
        <Heading>Conditions</Heading>
        <Subheading>You are Player 2</Subheading>

        <article className="prose pt-4 space-y-4">
          {conditions.map((condition, index) => (<Condition key={index} condition={condition.condition} />))}
        </article>
      </section>
    </>
  )
}

export default Game