import { useState } from "react"
import HouseSetup from "./house_setup"


export const Game = () => {
  const [tab, setTab] = useState<"setup" | "conditions">("setup")

  return (
    <>
      <section className="">
        <div className="tabs is-centered is-large">
          <ul>
            <li className={`${tab === "setup" && "is-active"}`} onClick={() => setTab("setup")}><a>Setup</a></li>
            <li className={`${tab === "conditions" && "is-active"}`} onClick={() => setTab("conditions")}><a>Conditions</a></li>
          </ul>
        </div>

        {tab === "setup" && <HouseSetup />}
        {tab === "conditions" && <Conditions />}
      </section>
    </>
  )
}
const Conditions = () => {
  return (
    <>
      <section className="section pt-0">
        <p className="title">Conditions</p>
      </section>
    </>
  )
}

export default Game