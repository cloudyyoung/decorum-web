import { ReactNode } from "react"

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


const ConditionIcon = ({ image, name }: { image: string, name: string }) => {
  return <img src={image} alt={name} className="h-4 inline -mt-[0.16rem]" />
}

export interface ConditionProps {
  condition: string
}

export const Condition = ({ condition }: ConditionProps) => {
  const parts = decorateCondition(condition)

  return (
    <p className="font-serif text-[0.74rem] leading-4.5">
      {parts}
    </p>
  )
}
export default Condition


const decorateCondition = (condition: string) => {
  const parts = []

  let remainingText = condition;
  while (remainingText.length > 0) {
    let found = false;

    for (const keyword of sortKeywordDecorations(KEYWORD_DECORATIONS)) {
      if (remainingText.toLowerCase().startsWith(keyword)) {
        const matchedKeyword = remainingText.substring(0, keyword.length);
        const decoration = KEYWORD_DECORATIONS[keyword];
        parts.push(
          <span>{matchedKeyword} {decoration}</span>
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
          <span className="font-extrabold" style={{ color: colorHex }}>{color}</span>
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

  return parts
}


const sortKeywordDecorations = (keyword_decorations: KeywordDecorations) => {
  return Object.keys(keyword_decorations).sort((a, b) => b.length - a.length)
}

interface KeywordDecorations {
  [key: string]: ReactNode
}

const KEYWORD_DECORATIONS: KeywordDecorations = {
  "antique": <ConditionIcon image={Antique} name="antique" />,
  "modern": <ConditionIcon image={Modern} name="modern" />,
  "retro": <ConditionIcon image={Retro} name="retro" />,
  "unusual": <ConditionIcon image={Unusual} name="unusual" />,
  "bathroom": <ConditionIcon image={Bathroom} name="bathroom" />,
  "bedroom": <ConditionIcon image={Bedroom} name="bedroom" />,
  "kitchen": <ConditionIcon image={Kitchen} name="kitchen" />,
  "living room": <ConditionIcon image={LivingRoom} name="living room" />,
  "cool colors": <ConditionIcon image={CoolColors} name="cool colors" />,
  "warm colors": <ConditionIcon image={WarmColors} name="warm colors" />,
  "curio": <ConditionIcon image={Curio} name="curio" />,
  "lamp": <ConditionIcon image={Lamp} name="lamp" />,
  "wall hanging": <ConditionIcon image={WallHanging} name="wall hanging" />,
  "diagonal up": <ConditionIcon image={DiagonalUp} name="diagonal up" />,
  "diagonal down": <ConditionIcon image={DiagonalDown} name="diagonal down" />,
  "upstairs": <ConditionIcon image={Upstairs} name="upstairs" />,
  "downstairs": <ConditionIcon image={Downstairs} name="downstairs" />,
  "left side": <ConditionIcon image={LeftSide} name="left side" />,
  "right side": <ConditionIcon image={RightSide} name="right side" />,
  "empty slots": <ConditionIcon image={EmptySlot} name="empty slots" />,
  "empty slot": <ConditionIcon image={EmptySlot} name="empty slot" />,
  "paint any": <ConditionIcon image={PaintAny} name="paint any" />,
  "paint blue": <ConditionIcon image={PaintBlue} name="paint blue" />,
  "paint green": <ConditionIcon image={PaintGreen} name="paint green" />,
  "paint red": <ConditionIcon image={PaintRed} name="paint red" />,
  "paint yellow": <ConditionIcon image={PaintYellow} name="paint yellow" />,
  "each floor": (
    <>
      <span>(</span>
      <ConditionIcon image={Upstairs} name="upstairs" />
      <span> & </span>
      <ConditionIcon image={Downstairs} name="downstairs" />
      <span>)</span>
    </>
  ),
  "all 4 styles": (
    <>
      <span>(</span>
      <ConditionIcon image={Modern} name="modern" />
      <ConditionIcon image={Antique} name="antique" />
      <ConditionIcon image={Retro} name="retro" />
      <ConditionIcon image={Unusual} name="unusual" />
      <span>)</span>
    </>
  ),
  "all 4 wall colors": (
    <>
      <ConditionIcon image={PaintRed} name="red paint" />
      <ConditionIcon image={PaintYellow} name="yellow paint" />
      <ConditionIcon image={PaintGreen} name="green paint" />
      <ConditionIcon image={PaintBlue} name="blue paint" />
    </>
  ),
  "all 4 wall hangings": (
    <>
      <ConditionIcon image={WallHanging} name="wall hanging" />
    </>
  ),
  "each object type": (
    <>
      <span>(</span>
      <ConditionIcon image={WallHanging} name="wall hanging" />
      <span>, </span>
      <ConditionIcon image={Lamp} name="lamp" />
      <span>, or </span>
      <ConditionIcon image={Curio} name="curio" />
      <span>)</span>
    </>
  ),
  "painted each color": (
    <>
      <span>(</span>
      <ConditionIcon image={PaintRed} name="red paint" />
      <ConditionIcon image={PaintYellow} name="yellow paint" />
      <ConditionIcon image={PaintGreen} name="green paint" />
      <ConditionIcon image={PaintBlue} name="blue paint" />
      <span>)</span>
    </>
  )
}
