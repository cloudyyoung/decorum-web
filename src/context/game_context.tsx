import { createContext, useState, ReactNode } from "react"
import { Game } from "../types/game"
import { Player } from "../types/player"

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