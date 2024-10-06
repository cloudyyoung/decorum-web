import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate()
  const onJoinGame = () => navigate("/join")

  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="">
          <p className="title is-size-2-touch barlow-condensed-bold">Décorum-Gen</p>
          <p className="subtitle biorhyme-400">An unofficial generator for the board game</p>

          <div className="buttons are-medium">
            <button className="button is-white">Create game</button>
            <button className="button is-white" onClick={onJoinGame}>Join game</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home