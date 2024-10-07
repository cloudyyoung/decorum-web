import { useState } from "react"
import HouseSetup from "./house_setup"
import Condition from "./condition"


export const Game = () => {
  const [tab, setTab] = useState<"setup" | "conditions">("setup")

  return (
    <>
      <section className="">
        <div className="tabs is-centered is-large">
          <ul>
            <li className={`${tab === "setup" && "is-active"}`} onClick={() => setTab("setup")}><a>Setup</a></li>
            <li className={`${tab === "conditions" && "is-active"}`} onClick={() => setTab("conditions")}><a>Conditions</a></li>
          </ul>
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
    {
      "condition": "The house must contain all 4 styles and all 4 wall colors, and 4 empty slots.",
      "difficulty_points": 3
    },
  ]

  return (
    <>
      <section className="section pt-0">
        <p className="title">Conditions</p>
        <p className="subtitle">You are Player 2</p>

        <div className="">
          {conditions.map((condition, index) => (<Condition key={index} condition={condition.condition} />))}
        </div>
      </section>
    </>
  )
}

export default Game