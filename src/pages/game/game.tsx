import { useState } from "react"
import HouseSetup from "./house_setup"
import Tab, { TabOption } from "./tab"
import Conditions from "./conditions"


export const Game = () => {
  const [tab, setTab] = useState<TabOption>("setup")

  return (
    <>
      <section className="">
        <div className="flex justify-center sticky top-0">
          <Tab tab={tab} setTab={setTab} />
        </div>

        {tab === "setup" && <HouseSetup />}
        {tab === "conditions" && <Conditions />}
      </section>
    </>
  )
}

export default Game