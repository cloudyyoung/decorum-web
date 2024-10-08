import axios, { AxiosError } from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heading, Subheading } from "../components/heading"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import GameContext from "../context/game_context"
import { Alert, AlertActions, AlertDescription, AlertTitle } from "../components/alert"

const Join = () => {
  const navigate = useNavigate()
  const [gameId, setGameId] = useState<string>("")
  const { setGame } = useContext(GameContext)
  const [isGettingGame, setIsGettingGame] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState<boolean>(false)

  const onEnterGame = async () => {
    try {
      setIsGettingGame(true)
      const response = await axios.get(`/games/${gameId}`)
      setGame(response.data)
      navigate(`/games/${gameId}/lobby`)
      setIsGettingGame(false)
    } catch (error) {
      const axiosError = error as AxiosError
      const errorMessage = (axiosError.response?.data as { detail: string })?.detail || axiosError.message
      setErrorMessage(errorMessage)
      setIsErrorAlertOpen(true)
      setIsGettingGame(false)
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

          <div className="flex gap-2 mt-4 justify-between">
            <Button plain disabled={isGettingGame} href="/">Back</Button>
            <Button disabled={gameId === "" || isGettingGame} onClick={onEnterGame}>
              Join Game
              <ArrowUpRightIcon />
            </Button>
          </div>
        </div>

        <Alert open={isErrorAlertOpen} onClose={setIsErrorAlertOpen}>
          <AlertTitle>Failed to join the game</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
          <AlertActions>
            <Button onClick={() => setIsErrorAlertOpen(false)}>Okay</Button>
          </AlertActions>
        </Alert>
      </section>
    </>
  )
}

export default Join