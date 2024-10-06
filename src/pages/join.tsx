import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "react-use"

const Join = () => {
  const navigate = useNavigate()
  const [gameId, setGameId] = useState<string>("")
  const [isGettingGame, setIsGettingGame] = useState<boolean>(false)
  const [, setGameIdLocal] = useLocalStorage("gameId", "")

  const onReturn = () => navigate("/")
  const onEnterGame = async () => {
    try {
      setIsGettingGame(true)
      const response = await axios.get(`/games/${gameId}`)
      setGameIdLocal(gameId)
      navigate("/lobby", { state: response.data })
      setIsGettingGame(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <section className="section">
        <p className="title">Join a game</p>
        <p className="subtitle">Enter the Game ID to join</p>

        <div className="my-6">
          <input
            className="input is-info is-large has-text-centered"
            type="text"
            placeholder="Info input"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
        </div>

        <div className="mt-6 buttons">
          <button className="button is-medium is-fullwidth is-text" disabled={isGettingGame} onClick={onReturn}>Return</button>
          <button className={`button is-info is-large is-fullwidth ${isGettingGame && 'is-loading'}`} disabled={gameId === ""} onClick={onEnterGame}>Enter Game</button>
        </div>
      </section>
    </>
  )
}

export default Join