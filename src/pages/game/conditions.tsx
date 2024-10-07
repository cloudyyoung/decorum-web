import Condition from "./condition"
import { Heading } from "../../components/heading"
import { useContext } from "react"
import GameContext from "../../context/game_context"

export const Conditions = () => {
  const { player } = useContext(GameContext)
  const conditions = player!.conditions

  return (
    <>
      <section className="section px-4">
        <Heading>Conditions</Heading>

        <article className="prose pt-4 pb-20 space-y-3">
          {conditions.map((condition, index) => (<Condition key={index} condition={condition.condition} />))}
        </article>
      </section>
    </>
  )
}

export default Conditions