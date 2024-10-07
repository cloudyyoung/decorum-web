import { useNavigate } from "react-router-dom"
import { Heading, Subheading } from "../components/heading"
import { Button } from "../components/button"

export const Home = () => {
  const navigate = useNavigate()
  const onJoinGame = () => navigate("/join")

  return (
    <section className="flex items-center jusityf-center h-screen p-4">
      <div>
        <Heading>Décorum-Gen</Heading>
        <Subheading>An unofficial level generator for the board game</Subheading>

        <div className="flex gap-2 mt-6">
          <Button>Create game</Button>
          <Button color="white" onClick={onJoinGame}>Join game</Button>
        </div>
      </div>
    </section>
  )
}

export default Home