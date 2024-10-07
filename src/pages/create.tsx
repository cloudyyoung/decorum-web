import { useContext, useState } from "react"
import axios from "axios"
import { HomeModernIcon } from "@heroicons/react/24/outline"
import { Button } from "../components/button"
import { Field, Label } from "../components/fieldset"
import { Heading } from "../components/heading"
import { Select } from "../components/select"
import GameContext from "../context/game_context"
import { useNavigate } from "react-router-dom"

export const Create = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState<2 | 3 | 4>(2)
  const [scenarioDifficulty, setScenarioDifficulty] = useState<number>(20)
  const { setGame } = useContext(GameContext)
  const navigate = useNavigate()

  const onCreateGame = async () => {
    const response = await axios.post("/games", {
      num_of_players: numberOfPlayers,
      total_difficulty_points: scenarioDifficulty,
    })
    setGame(response.data)
    navigate(`/games/${response.data.id}/lobby`)
  }

  return (
    <>
      <section className="p-4 h-screen">
        <Heading>Create a new game</Heading>

        <div className="mt-8 space-y-6">
          <Field>
            <Label>Number of players</Label>
            <div className="flex w-full mt-3">
              <Button color={numberOfPlayers === 2 ? "dark" : "white"} onClick={() => setNumberOfPlayers(2)} className="w-full rounded-none rounded-l-lg before:rounded-none before:rounded-l-lg after:rounded-none after:rounded-l-lg">2</Button>
              <Button color={numberOfPlayers === 3 ? "dark" : "white"} onClick={() => setNumberOfPlayers(3)} className="w-full rounded-none before:rounded-none after:rounded-none">3</Button>
              <Button color={numberOfPlayers === 4 ? "dark" : "white"} onClick={() => setNumberOfPlayers(4)} className="w-full rounded-none rounded-r-lg before:rounded-none before:rounded-r-lg after:rounded-none after:rounded-r-lg">4</Button>
            </div>
          </Field>

          <Field>
            <Label>Scenario Difficulty</Label>
            <Select name="scenario-difficulty" value={scenarioDifficulty} onChange={(e) => setScenarioDifficulty(Number(e.target.value))}>
              {
                Array.from({ length: 67 }, (_, i) => i + 4).map((difficulty) => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))
              }
            </Select>
          </Field>
        </div>
      </section>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white">
        <div className="flex gap-2 justify-between max-w-screen-sm mx-auto">
          <Button plain href="/">Back</Button>
          <Button onClick={onCreateGame}>
            Create Game
            <HomeModernIcon />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Create