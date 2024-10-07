import Condition from "./condition"
import { Heading, Subheading } from "../../components/heading"

export const Conditions = () => {
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

        <article className="prose pt-4 space-y-3">
          {conditions.map((condition, index) => (<Condition key={index} condition={condition.condition} />))}
        </article>
      </section>
    </>
  )
}

export default Conditions