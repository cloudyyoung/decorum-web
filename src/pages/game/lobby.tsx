import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import clsx from 'clsx'

import P1 from "/src/assets/objects/DEC-Player-1.png"
import P2 from "/src/assets/objects/DEC-Player-2.png"
import P3 from "/src/assets/objects/DEC-Player-3.png"
import P4 from "/src/assets/objects/DEC-Player-4.png"

import { Heading, Subheading } from "../../components/heading";
import { Text } from "../../components/text";
import { Button } from "../../components/button";
import { useEffectOnce } from "react-use";
import axios from "axios";

const PLAYER_IMAGES = [P1, P2, P3, P4]

interface PlayerButtonProps {
  player: number
  isSelected: boolean
  setSelectedPlayer?: (player: number | null) => void
}

const PlayerButton = ({ player, isSelected, setSelectedPlayer }: PlayerButtonProps) => {
  const playerName = `Player ${player}`
  const playerImage = PLAYER_IMAGES[player - 1]

  const onClick = () => {
    if (isSelected) {
      setSelectedPlayer?.(null)
    } else {
      setSelectedPlayer?.(player)
    }
  }

  return (
    <div className="col-span-1 w-full">
      <button
        className={clsx(
          "w-full flex justify-center items-center p-2 rounded-lg shadow outline outline-2 transition-all",
          player === 1 && isSelected && "bg-player1", player === 1 && "outline-player1",
          player === 2 && isSelected && "bg-player2", player === 2 && "outline-player2",
          player === 3 && isSelected && "bg-player3", player === 3 && "outline-player3",
          player === 4 && isSelected && "bg-player4", player === 4 && "outline-player4",
        )}
        onClick={onClick}
      >
        <img src={playerImage} alt={playerName} className="h-10" />
      </button>
    </div>
  )
}

interface Game {
  id: string
  num_of_players: number
  total_difficulty_points: number
  seed: string
}

export const Lobby = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { gameId } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)
  const [game, setGame] = useState<Game | null>(null)

  const { state } = location;

  useEffectOnce(() => {
    if (state) {
      setGame(state)
    } else {
      const fetch = async () => {
        const response = await axios.get(`/games/${gameId}`)
        setGame(response.data)
      }
      fetch()
    }
  })

  if (!game) {
    return null
  }

  const onEnterGame = () => {
    navigate(`/games/${game.id}/setup`, { state: { player: selectedPlayer } })
  }

  return (
    <>
      <section className="p-4">
        <Heading>Game Information</Heading>
        <Subheading>Share Game ID to invite your friends</Subheading>

        <div>
          <Text>Game ID: {game.id}</Text>
          <Text>Number of players: {game.num_of_players}</Text>
          <Text>Game difficulty: {game.total_difficulty_points}</Text>
          <Text>Game seed: {game.seed}</Text>
        </div>

        <div className="mt-6">
          <Subheading>Select your player</Subheading>
          <div className="flex gap-x-2 mt-2">
            <PlayerButton player={1} isSelected={selectedPlayer === 1} setSelectedPlayer={setSelectedPlayer} />
            <PlayerButton player={2} isSelected={selectedPlayer === 2} setSelectedPlayer={setSelectedPlayer} />
            <PlayerButton player={3} isSelected={selectedPlayer === 3} setSelectedPlayer={setSelectedPlayer} />
            <PlayerButton player={4} isSelected={selectedPlayer === 4} setSelectedPlayer={setSelectedPlayer} />
          </div>
        </div>

        <div className="flex gap-2 mt-4 justify-between">
          <Button color="white" href="/">Leave</Button>
          <Button disabled={selectedPlayer === null} onClick={onEnterGame}>Enter Game</Button>
        </div>
      </section>
    </>
  )
}

export default Lobby