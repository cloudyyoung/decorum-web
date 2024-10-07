import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"
import { Heading, Subheading } from "../components/heading"
import { Input } from "../components/input"
import { Button } from "../components/button"

const Join = () => {
  const navigate = useNavigate()
  const [gameId, setGameId] = useState<string>("")
  const [isGettingGame, setIsGettingGame] = useState<boolean>(false)
  const [, setGameIdLocal] = useLocalStorage("gameId", "")

  const onEnterGame = async () => {
    try {
      setIsGettingGame(true)
      const response = await axios.get(`/games/${gameId}`)
      setGameIdLocal(gameId)
      navigate(`/games/${gameId}/lobby`, { state: response.data })
      setIsGettingGame(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="flex items-center jusityf-center h-screen p-4">
        <div className="w-full">
          <Heading>Join a game</Heading>
          <Subheading>Enter the Game ID to join</Subheading>

          <div className="mt-4">
            <Input
              className="text-center w-full"
              type="text"
              placeholder="Game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
            />
          </div>

          <div className="flex gap-2 mt-4  justify-between">
            <Button color="white" disabled={isGettingGame} href="/">Return</Button>
            <Button disabled={gameId === "" || isGettingGame} onClick={onEnterGame}>Enter Game</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Join