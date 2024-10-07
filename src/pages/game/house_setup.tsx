import { Heading, Subheading } from "../../components/heading"
import RoomSetup from "./room_setup"

export const HouseSetup = () => {
  const house = {
    "bedroom": {
      "wall_color": "yellow",
      "lamp": null,
      "curio": "blue antique curio",
      "wall_hanging": null
    },
    "bathroom": {
      "wall_color": "blue",
      "lamp": "yellow antique lamp",
      "curio": "blue antique curio",
      "wall_hanging": "blue retro wall hanging"
    },
    "living_room": {
      "wall_color": "yellow",
      "lamp": "red retro lamp",
      "curio": "red unusual curio",
      "wall_hanging": null
    },
    "kitchen": {
      "wall_color": "yellow",
      "lamp": "blue modern lamp",
      "curio": "yellow retro curio",
      "wall_hanging": null
    }
  }

  return (
    <>
      <section className="">
        <div className="px-4">
          <Heading>Setup</Heading>
          <Subheading>Place your starting house setup on the board</Subheading>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 pt-3">
          <RoomSetup name="Bathroom" setup={house["bathroom"]} />
          <RoomSetup name="Bedroom" setup={house["bedroom"]} />
          <RoomSetup name="Living Room" setup={house["living_room"]} />
          <RoomSetup name="Kitchen" setup={house["kitchen"]} />
        </div>
      </section>
    </>
  )
}

export default HouseSetup