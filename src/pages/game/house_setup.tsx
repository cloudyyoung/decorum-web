import { useContext } from "react"
import { Heading, Subheading } from "../../components/heading"
import GameContext from "./context"
import RoomSetup from './room_setup';

export const HouseSetup = () => {
  const { player } = useContext(GameContext)
  const house = player!.house

  return (
    <>
      <section className="">
        <div className="px-4">
          <Heading>Setup</Heading>
          <Subheading>Place your starting house setup on the board</Subheading>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 pt-3">
          <RoomSetup name="Bathroom" room={house.bathroom} />
          <RoomSetup name="Bedroom" room={house.bedroom} />
          <RoomSetup name="Living Room" room={house.living_room} />
          <RoomSetup name="Kitchen" room={house.kitchen} />
        </div>
      </section>
    </>
  )
}

export default HouseSetup