import { createContext, useState } from "react"


export interface Game {
  id: string
  num_of_players: number
  total_difficulty_points: number
  seed: string
}

export interface Room {
  name: string
  setup: {
    wall_color: string
    lamp: string | null
    curio: string | null
    wall_hanging: string | null
  }
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
}

const GameContext = createContext<GameContextType | undefined>(undefined)

import { ReactNode } from "react";

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [game, setGame] = useState<Game | undefined>(undefined);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
export default GameContext;