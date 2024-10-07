import { useState } from "react"
import Tab, { TabOption } from "./tab"
import { Outlet } from "react-router-dom"


export const GameLayout = () => {
  const [tab, setTab] = useState<TabOption>("setup")

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