import clsx from "clsx"
import { useContext } from "react"
import GameContext from "../../context/game_context"

export type TabOption = "setup" | "conditions"

export interface TabProps {
  tab: TabOption
  setTab: (tab: TabOption) => void
}

export const Tab = ({ tab, setTab }: TabProps) => {
  const { player } = useContext(GameContext)

  const getPlayerColor = () => {
    if (player?.player_id === "p3") {
      return ['bg-player3', 'text-player3']
    } else if (player?.player_id === "p2") {
      return ['bg-player2', 'text-player2']
    } else if (player?.player_id === "p1") {
      return ['bg-player1', 'text-player1']
    } else if (player?.player_id === "p4") {
      return ['bg-player4', 'text-player4']
    }
    return ['bg-gray-200', 'text-gray-500']
  }
  const [playerBgColor, playerTextColor] = getPlayerColor()

  return (
    <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow-lg w-48 mt-3 mb-6">
      <button
        className={clsx(
          tab === "setup" ? playerBgColor : 'text-gray-600 hover:text-gray-700',
          'rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-2.5 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
        )}
        onClick={() => setTab("setup")}
      >
        <span className={clsx(tab === "setup" ? playerTextColor : '')}>Setup</span>
        <span
          aria-hidden="true"
          className={clsx(
            tab === "setup" ? playerBgColor : 'bg-transparent',
            'absolute inset-x-0 bottom-0 h-0.5',
          )}
        />
      </button>
      <button
        className={clsx(
          tab === "conditions" ? playerBgColor : 'text-gray-600 hover:text-gray-700',
          'rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-2.5 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
        )}
        onClick={() => setTab("conditions")}
      >
        <span className={clsx(tab === "conditions" ? playerTextColor : '')}>Conditions</span>
        <span
          aria-hidden="true"
          className={clsx(
            tab === "conditions" ? playerBgColor : 'bg-transparent',
            'absolute inset-x-0 bottom-0 h-0.5',
          )}
        />
      </button>
    </nav>
  )
}

export default Tab