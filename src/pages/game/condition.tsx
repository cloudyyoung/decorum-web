import { COLORS } from "../../constants"

import Antique from "/src/assets/antique.png"
import Modern from "/src/assets/modern.png"
import Retro from "/src/assets/retro.png"
import Unusual from "/src/assets/unusual.png"
import Bathroom from "/src/assets/bathroom.png"
import Bedroom from "/src/assets/bedroom.png"
import Kitchen from "/src/assets/kitchen.png"
import LivingRoom from "/src/assets/living-room.png"
import CoolColors from "/src/assets/cool-colors.png"
import WarmColors from "/src/assets/warm-colors.png"
import Curio from "/src/assets/curio.png"
import Lamp from "/src/assets/lamp.png"
import WallHanging from "/src/assets/wh.png"
import DiagonalUp from "/src/assets/diagonal-up.png"
import DiagonalDown from "/src/assets/diagonal-down.png"
import Upstairs from "/src/assets/upstairs.png"
import Downstairs from "/src/assets/downstairs.png"
import LeftSide from "/src/assets/left-side.png"
import RightSide from "/src/assets/right-side.png"
import EmptySlot from "/src/assets/empty-slot.png"
import PaintAny from "/src/assets/paint-any.png"
import PaintBlue from "/src/assets/paint-blue.png"
import PaintGreen from "/src/assets/paint-green.png"
import PaintRed from "/src/assets/paint-red.png"
import PaintYellow from "/src/assets/paint-yellow.png"

const KEYWORD_IMAGES: { [key: string]: string } = {
  "antique": Antique,
  "modern": Modern,
  "retro": Retro,
  "unusual": Unusual,
  "bathroom": Bathroom,
  "bedroom": Bedroom,
  "kitchen": Kitchen,
  "living room": LivingRoom,
  "cool colors": CoolColors,
  "warm colors": WarmColors,
  "curio": Curio,
  "lamp": Lamp,
  "wall hanging": WallHanging,
  "diagonal up": DiagonalUp,
  "diagonal down": DiagonalDown,
  "upstairs": Upstairs,
  "downstairs": Downstairs,
  "left side": LeftSide,
  "right side": RightSide,
  "empty slot": EmptySlot,
  "empty slots": EmptySlot,
  "paint any": PaintAny,
  "paint blue": PaintBlue,
  "paint green": PaintGreen,
  "paint red": PaintRed,
  "paint yellow": PaintYellow,
}

export interface ConditionProps {
  condition: string
}

export const Condition = ({ condition }: ConditionProps) => {
  const parts = []

  let remainingText = condition;
  while (remainingText.length > 0) {
    let found = false;

    for (const keyword in KEYWORD_IMAGES) {
      if (remainingText.toLowerCase().startsWith(keyword)) {
        const matchedKeyword = remainingText.substring(0, keyword.length);
        parts.push(
          <>
            {matchedKeyword} <ConditionIcon key={keyword + Math.random()} image={KEYWORD_IMAGES[keyword]} name={keyword} />
          </>
        );
        remainingText = remainingText.substring(keyword.length);
        found = true;
        break;
      }
    }

    for (const color of Object.keys(COLORS)) {
      if (remainingText.toLowerCase().startsWith(color)) {
        const colorHex = COLORS[color]
        parts.push(
          <>
            <span className="has-text-weight-bold" style={{ color: colorHex }}>{color}</span>
          </>
        );
        remainingText = remainingText.substring(color.length);
        found = true;
        break;
      }
    }

    if (!found) {
      parts.push(remainingText.charAt(0));
      remainingText = remainingText.substring(1);
    }
  }

  return (
    <>
      <p className="biorhyme-400 is-size-6-touch" style={{ lineHeight: "25px", marginBottom: "1rem" }}>
        {parts}
      </p>
    </>
  )
}

const ConditionIcon = ({ image, name }: { image: string, name: string }) => {
  return <img src={image} alt={name} style={{ height: "1.5rem", marginBottom: "-0.46rem" }} />
}

export default Condition