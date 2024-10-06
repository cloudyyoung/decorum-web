import BlueAntiqueCurio from "/src/assets/blue-antique-curio.png"
import BlueModernLamp from "/src/assets/blue-modern-lamp.png"
import BlueRetroWallHanging from "/src/assets/blue-retro-wh.png"
import RedRetroLamp from "/src/assets/red-retro-lamp.png"
import RedUnusualCurio from "/src/assets/red-unusual-curio.png"
import RedModernWallHanging from "/src/assets/red-modern-wh.png"
import YellowAntiqueLamp from "/src/assets/yellow-antique-lamp.png"
import YellowRetroCurio from "/src/assets/yellow-retro-curio.png"
import YellowUnusualWallHanging from "/src/assets/yellow-unusual-wh.png"
import GreenAntiqueWallHanging from "/src/assets/green-antique-wh.png"
import GreenModernCuiro from "/src/assets/green-modern-curio.png"
import GreenUnusualLamp from "/src/assets/green-unusual-lamp.png"
import EmptyLamp from "/src/assets/empty-lamp.png"
import EmptyCurio from "/src/assets/empty-curio.png"
import EmptyWallHanging from "/src/assets/empty-wh.png"

export interface RoomSetupProps {
  name: string
  setup: {
    wall_color: string
    lamp: string | null
    curio: string | null
    wall_hanging: string | null
  }
}

const WALL_COLORS: { [key: string]: string } = {
  "blue": "#0077CF",
  "green": "#05A82E",
  "red": "#ED2E38",
  "yellow": "#FFC72C",
}

const OBJECT_IMAGES: { [key: string]: string } = {
  "blue antique curio": BlueAntiqueCurio,
  "blue modern lamp": BlueModernLamp,
  "blue retro wall hanging": BlueRetroWallHanging,
  "red retro lamp": RedRetroLamp,
  "red unusual curio": RedUnusualCurio,
  "red modern wall hanging": RedModernWallHanging,
  "yellow antique lamp": YellowAntiqueLamp,
  "yellow retro curio": YellowRetroCurio,
  "yellow unusual wall hanging": YellowUnusualWallHanging,
  "green antique wall hanging": GreenAntiqueWallHanging,
  "green modern curio": GreenModernCuiro,
  "green unusual lamp": GreenUnusualLamp,
}

export const RoomSetup = ({ name, setup }: RoomSetupProps) => {
  const { wall_color, lamp, curio, wall_hanging } = setup
  const wallColor = WALL_COLORS[wall_color]
  const lampImage = lamp ? OBJECT_IMAGES[lamp] : EmptyLamp
  const curioImage = curio ? OBJECT_IMAGES[curio] : EmptyCurio
  const wallHangingImage = wall_hanging ? OBJECT_IMAGES[wall_hanging] : EmptyWallHanging

  return (
    <>
      <div className="cell has-text-centered">
        <div className="card" style={{ background: wallColor }}>
          <p className="is-uppercase has-text-white-ter py-3">{name}</p>
          <div className="fixed-grid has-3-cols p-4 pb-6" >
            <div className="grid">
              <RoomObject name={curio || "Empty curio"} image={curioImage} />
              <RoomObject name={wall_hanging || "Empty wall hanging"} image={wallHangingImage} />
              <RoomObject name={lamp || "Empty lamp"} image={lampImage} />
            </div>
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
    <div className="cell" style={{ display: "flex", justifyContent: "center" }}>
      <img src={image} alt={name} className="image" style={{ height: "2.6rem" }} />
    </div>
  )
}

export default RoomSetup