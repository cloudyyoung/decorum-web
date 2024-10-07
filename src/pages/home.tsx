import { Heading, Subheading } from "../components/heading"
import { Button } from "../components/button"

export const Home = () => {
  return (
    <section className="flex items-center jusityf-center h-screen p-4">
      <div className="w-full">
        <Heading>Décorum-Gen</Heading>
        <Subheading>An unofficial level generator for the board game</Subheading>

        <div className="flex gap-2 mt-6">
          <Button>Create game</Button>
          <Button color="white" href="/join">Join game</Button>
        </div>
      </div>
    </section>
  )
}

export default Home