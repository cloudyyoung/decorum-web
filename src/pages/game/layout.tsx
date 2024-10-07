import { useContext, useEffect, useState } from "react"
import Tab, { TabOption } from "./tab"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffectOnce } from "react-use"
import GameContext from "../../context/game_context"

export const GameLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { game, player } = useContext(GameContext)
  const { gameId } = useParams()
  const [tab, setTab] = useState<TabOption>("setup")

  useEffectOnce(() => {
    if (!game || !player) {
      navigate(`/games/${gameId}/lobby`, { replace: true })
      return
    } else if (!gameId) {
      navigate("/join", { replace: true })
      return
    }

    const currentPath = location.pathname.split("/").pop()
    if (currentPath && currentPath in ["setup", "conditions"]) {
      setTab(currentPath as TabOption)
    }
  })

  useEffect(() => {
    navigate(`/games/${gameId}/${tab}`, { replace: true })
  }, [tab, navigate, gameId])

  if (!gameId) {
    navigate("/join", { replace: true })
    return
  } else if (!player || !game) {
    navigate(`/games/${gameId}/lobby`, { replace: true })
    return
  }

  return (
    <>
      <section className="">
        <div className="flex justify-center sticky top-0">
          <Tab tab={tab} setTab={setTab} />
        </div>

        <Outlet />
      </section>
    </>
  )
}

export default GameLayout