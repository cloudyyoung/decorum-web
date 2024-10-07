import { ReactNode } from "react"

import { COLORS } from "../../constants"
import { ASSETS } from "../../assets"


const ConditionIcon = ({ image, name }: { image: string, name: string }) => {
  return <img src={image} alt={name} className="h-4 inline -mt-[0.16rem]" />
}

export interface ConditionProps {
  condition: string
}

export const Condition = ({ condition }: ConditionProps) => {
  const parts = decorateCondition(condition)

  return (
    <p className="font-serif text-[0.74rem] leading-[1.2rem]">
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
          <>
            <span className="font-bold">{matchedKeyword} </span>
            <span>{decoration}</span>
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
          <span className="font-bold" style={{ color: colorHex }}>{color}</span>
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
  "antique": <ConditionIcon image={ASSETS.Antique} name="antique" />,
  "modern": <ConditionIcon image={ASSETS.Modern} name="modern" />,
  "retro": <ConditionIcon image={ASSETS.Retro} name="retro" />,
  "unusual": <ConditionIcon image={ASSETS.Unusual} name="unusual" />,
  "bathroom": <ConditionIcon image={ASSETS.Bathroom} name="bathroom" />,
  "bedroom": <ConditionIcon image={ASSETS.Bedroom} name="bedroom" />,
  "kitchen": <ConditionIcon image={ASSETS.Kitchen} name="kitchen" />,
  "living room": <ConditionIcon image={ASSETS.LivingRoom} name="living room" />,
  "cool colors": <ConditionIcon image={ASSETS.CoolColors} name="cool colors" />,
  "warm colors": <ConditionIcon image={ASSETS.WarmColors} name="warm colors" />,
  "curio": <ConditionIcon image={ASSETS.Curio} name="curio" />,
  "lamp": <ConditionIcon image={ASSETS.Lamp} name="lamp" />,
  "wall hanging": <ConditionIcon image={ASSETS.WallHanging} name="wall hanging" />,
  "curios": <ConditionIcon image={ASSETS.Curio} name="curio" />,
  "lamps": <ConditionIcon image={ASSETS.Lamp} name="lamp" />,
  "wall hangings": <ConditionIcon image={ASSETS.WallHanging} name="wall hanging" />,
  "diagonal up": <ConditionIcon image={ASSETS.DiagonalUp} name="diagonal up" />,
  "diagonal down": <ConditionIcon image={ASSETS.DiagonalDown} name="diagonal down" />,
  "upstairs": <ConditionIcon image={ASSETS.Upstairs} name="upstairs" />,
  "downstairs": <ConditionIcon image={ASSETS.Downstairs} name="downstairs" />,
  "left side": <ConditionIcon image={ASSETS.LeftSide} name="left side" />,
  "right side": <ConditionIcon image={ASSETS.RightSide} name="right side" />,
  "empty slot": <ConditionIcon image={ASSETS.EmptySlot} name="empty slot" />,
  "empty slots": <ConditionIcon image={ASSETS.EmptySlot} name="empty slots" />,
  "wall color": <ConditionIcon image={ASSETS.PaintAny} name="paint any" />,
  "wall colors": <ConditionIcon image={ASSETS.PaintAny} name="paint any" />,
  "painted blue": <ConditionIcon image={ASSETS.PaintBlue} name="painted blue" />,
  "painted green": <ConditionIcon image={ASSETS.PaintGreen} name="painted green" />,
  "painted red": <ConditionIcon image={ASSETS.PaintRed} name="painted red" />,
  "painted yellow": <ConditionIcon image={ASSETS.PaintYellow} name="painted yellow" />,
  "blue room": <ConditionIcon image={ASSETS.PaintBlue} name="painted blue" />,
  "green room": <ConditionIcon image={ASSETS.PaintGreen} name="painted green" />,
  "red room": <ConditionIcon image={ASSETS.PaintRed} name="painted red" />,
  "yellow room": <ConditionIcon image={ASSETS.PaintYellow} name="painted yellow" />,
  "each floor": (
    <>
      <span>(</span>
      <ConditionIcon image={ASSETS.Upstairs} name="upstairs" />
      <span> & </span>
      <ConditionIcon image={ASSETS.Downstairs} name="downstairs" />
      <span>)</span>
    </>
  ),
  "all 4 styles": (
    <>
      <span>(</span>
      <ConditionIcon image={ASSETS.Modern} name="modern" />
      <ConditionIcon image={ASSETS.Antique} name="antique" />
      <ConditionIcon image={ASSETS.Retro} name="retro" />
      <ConditionIcon image={ASSETS.Unusual} name="unusual" />
      <span>)</span>
    </>
  ),
  "all 4 wall colors": (
    <>
      <ConditionIcon image={ASSETS.PaintRed} name="red paint" />
      <ConditionIcon image={ASSETS.PaintYellow} name="yellow paint" />
      <ConditionIcon image={ASSETS.PaintGreen} name="green paint" />
      <ConditionIcon image={ASSETS.PaintBlue} name="blue paint" />
    </>
  ),
  "all 3 red objects": (
    <>
      <ConditionIcon image={ASSETS.RedModernWallHanging} name="red modern wall hanging" />
      <ConditionIcon image={ASSETS.RedUnusualCurio} name="red unusual curio" />
      <ConditionIcon image={ASSETS.RedRetroLamp} name="red retro lamp" />
    </>
  ),
  "all 3 yellow objects": (
    <>
      <ConditionIcon image={ASSETS.YellowRetroCurio} name="yellow retro curio" />
      <ConditionIcon image={ASSETS.YellowUnusualWallHanging} name="yellow unusual wall hanging" />
      <ConditionIcon image={ASSETS.YellowAntiqueLamp} name="yellow antique lamp" />
    </>
  ),
  "all 4 wall hangings": (
    <>
      <ConditionIcon image={ASSETS.RedModernWallHanging} name="red modern wall hanging" />
      <ConditionIcon image={ASSETS.GreenAntiqueWallHanging} name="green antique wall hanging" />
      <ConditionIcon image={ASSETS.BlueRetroWallHanging} name="blue retro wall hanging" />
      <ConditionIcon image={ASSETS.YellowUnusualWallHanging} name="yellow unusual wall hanging" />
    </>
  ),
  "each object type": (
    <>
      <span>(</span>
      <ConditionIcon image={ASSETS.WallHanging} name="wall hanging" />
      <span>, </span>
      <ConditionIcon image={ASSETS.Lamp} name="lamp" />
      <span>, or </span>
      <ConditionIcon image={ASSETS.Curio} name="curio" />
      <span>)</span>
    </>
  ),
  "painted each color": (
    <>
      <span>(</span>
      <ConditionIcon image={ASSETS.PaintRed} name="red paint" />
      <ConditionIcon image={ASSETS.PaintYellow} name="yellow paint" />
      <ConditionIcon image={ASSETS.PaintGreen} name="green paint" />
      <ConditionIcon image={ASSETS.PaintBlue} name="blue paint" />
      <span>)</span>
    </>
  )
}
