import Condition from "./condition"
import { Heading, Subheading } from "../../components/heading"
import { useContext } from "react"
import GameContext from "../../context/game_context"

export const Conditions = () => {
  const { player } = useContext(GameContext)
  const conditions = player!.conditions

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