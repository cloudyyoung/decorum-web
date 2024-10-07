import { useEffect, useState } from "react"
import Tab, { TabOption } from "./tab"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffectOnce } from "react-use"


export const GameLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [tab, setTab] = useState<TabOption>("setup")

  useEffectOnce(() => {
    const currentPath = location.pathname.split("/").pop()
    setTab(currentPath as TabOption)
  })

  useEffect(() => {
    navigate(tab)
  }, [tab, navigate])

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