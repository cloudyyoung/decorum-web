import { COLORS } from "../../constants"
import { Room } from "../../types/room"
import { ASSETS } from "../../assets"

export interface RoomSetupProps {
  name: string
  room: Room
}

const OBJECT_IMAGES: { [key: string]: string } = {
  "blue antique curio": ASSETS.BlueAntiqueCurio,
  "blue modern lamp": ASSETS.BlueModernLamp,
  "blue retro wall hanging": ASSETS.BlueRetroWallHanging,
  "red retro lamp": ASSETS.RedRetroLamp,
  "red unusual curio": ASSETS.RedUnusualCurio,
  "red modern wall hanging": ASSETS.RedModernWallHanging,
  "yellow antique lamp": ASSETS.YellowAntiqueLamp,
  "yellow retro curio": ASSETS.YellowRetroCurio,
  "yellow unusual wall hanging": ASSETS.YellowUnusualWallHanging,
  "green antique wall hanging": ASSETS.GreenAntiqueWallHanging,
  "green modern curio": ASSETS.GreenModernCuiro,
  "green unusual lamp": ASSETS.GreenUnusualLamp,
}

export const RoomSetup = ({ name, room }: RoomSetupProps) => {
  const { wall_color, lamp, curio, wall_hanging } = room
  const wallColor = COLORS[wall_color]
  const lampImage = lamp ? OBJECT_IMAGES[lamp] : ASSETS.EmptyLamp
  const curioImage = curio ? OBJECT_IMAGES[curio] : ASSETS.EmptyCurio
  const wallHangingImage = wall_hanging ? OBJECT_IMAGES[wall_hanging] : ASSETS.EmptyWallHanging

  return (
    <>
      <div className="aspect-square relative" style={{ background: wallColor }}>
        <p className="uppercase text-center p-1 absolute top-0 w-full">{name}</p>
        <div className="h-full flex items-center justify-center -mb-1">
          <div className="flex justify-center gap-3.5" >
            <RoomObject name={curio || "Empty curio"} image={curioImage} />
            <RoomObject name={wall_hanging || "Empty wall hanging"} image={wallHangingImage} />
            <RoomObject name={lamp || "Empty lamp"} image={lampImage} />
          </div>
        </div>
      </div>
    </>
  )
}

interface RoomObjectProps {
  name: string
  image: string
}

const RoomObject = ({ name, image }: RoomObjectProps) => {
  return (
    <img src={image} alt={name} className="h-8" />
  )
}

export default RoomSetup