import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Join = () => {
  const navigate = useNavigate()
  const [gameId, setGameId] = useState<string>("")

  const onReturn = () => navigate("/")


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
          <button className="button is-medium is-fullwidth is-text" onClick={onReturn}>Return</button>
          <button className="button is-info is-large is-fullwidth" disabled={gameId === ""}>Enter Game</button>
        </div>
      </section>
    </>
  )
}

export default Join