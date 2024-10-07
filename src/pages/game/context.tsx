import { createContext, useState } from "react"


export interface Game {
  id: string
  num_of_players: number
  total_difficulty_points: number
  seed: string
}

export interface Room {
  wall_color: string
  lamp: string | null
  curio: string | null
  wall_hanging: string | null
}

export interface Condition {
  condition: string
  difficulty_points: number
}

export interface Player {
  player_id: string
  conditions: Condition[]
  house: {
    bathroom: Room
    bedroom: Room
    living_room: Room
    kitchen: Room
  }
}

export interface GameContextType {
  game: Game | undefined
  setGame: (game: Game) => void
  player: Player | undefined
  setPlayer: (player: Player) => void
}

const GameContext = createContext<GameContextType>({
  game: undefined,
  setGame: () => { },
  player: undefined,
  setPlayer: () => { },
})

import { ReactNode } from "react";

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [player, setPlayer] = useState<Player | undefined>(undefined);

  return (
    <GameContext.Provider value={{ game, setGame, player, setPlayer }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameContext;