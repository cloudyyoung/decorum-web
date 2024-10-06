import { useState } from "react"
import P1 from "/src/assets/objects/DEC-Player-1.png"
import P2 from "/src/assets/objects/DEC-Player-2.png"
import P3 from "/src/assets/objects/DEC-Player-3.png"
import P4 from "/src/assets/objects/DEC-Player-4.png"

const PLAYER_IMAGES = [P1, P2, P3, P4]
const PLAYER_COLORS = ["#FFC82F", "#08B14B", "#007EC5", "#EF4B55"]

interface PlayerButtonProps {
  player: number
  isSelected: boolean
  setSelectedPlayer?: (player: number | null) => void
}

const PlayerButton = ({ player, isSelected, setSelectedPlayer }: PlayerButtonProps) => {
  const playerName = `Player ${player}`
  const playerImage = PLAYER_IMAGES[player - 1]
  const playerColor = PLAYER_COLORS[player - 1]

  const onClick = () => {
    if (isSelected) {
      setSelectedPlayer?.(null)
    } else {
      setSelectedPlayer?.(player)
    }
  }

  return (
    <button className="button has-text-left has-text-white py-5 px-6" style={{ borderColor: playerColor, backgroundColor: isSelected ? playerColor : "transparent" }} onClick={onClick}>
      <span className="icon is-small">
        <img src={playerImage} alt={playerName} />
      </span>
    </button>
  )
}

export const Lobby = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)

  return (
    <>
      <section className="section">
        <p className="title">Game Information</p>
        <p className="subtitle">Share Game ID to invite your friends</p>

        <div className="">
          <p className="">Game ID: 6701e7511c5b88a00938657d</p>
          <p className="">Number of players: 4</p>
          <p className="">Game difficulty: 4</p>
          <p className="">Game seed: AHFN4NS</p>
        </div>

        <div className="mt-6">
          <p className="is-size-4-touch has-text-weight-semibold">Select your player</p>
          <div className="buttons are-medium mt-4">
            <PlayerButton player={1} isSelected={selectedPlayer === 1} setSelectedPlayer={setSelectedPlayer} />
            <PlayerButton player={2} isSelected={selectedPlayer === 2} setSelectedPlayer={setSelectedPlayer} />
            <PlayerButton player={3} isSelected={selectedPlayer === 3} setSelectedPlayer={setSelectedPlayer} />
            <PlayerButton player={4} isSelected={selectedPlayer === 4} setSelectedPlayer={setSelectedPlayer} />
          </div>
        </div>

        <div className="mt-6 buttons">
          <button className="button is-medium is-fullwidth is-text">Exit</button>
          <button className="button is-info is-large is-fullwidth" disabled={selectedPlayer === null}>Enter Game</button>
        </div>
      </section>
    </>
  )
}

export default Lobby