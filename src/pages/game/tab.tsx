import clsx from "clsx"

export type TabOption = "setup" | "conditions"

export interface TabProps {
  tab: TabOption
  setTab: (tab: TabOption) => void
}

export const Tab = ({ tab, setTab }: TabProps) => {
  return (
    <nav aria-label="Tabs" className="isolate flex divide-x divide-gray-200 rounded-lg shadow-md w-36 my-4">
      <button
        className={clsx(
          tab === "setup" ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
          'rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1.5 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
        )}
        onClick={() => setTab("setup")}
      >
        <span>Setup</span>
        <span
          aria-hidden="true"
          className={clsx(
            tab === "setup" ? 'bg-player1' : 'bg-transparent',
            'absolute inset-x-0 bottom-0 h-0.5',
          )}
        />
      </button>
      <button
        className={clsx(
          tab === "conditions" ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
          'rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-1.5 text-center text-sm font-medium hover:bg-gray-50 focus:z-10',
        )}
        onClick={() => setTab("conditions")}
      >
        <span>Conditions</span>
        <span
          aria-hidden="true"
          className={clsx(
            tab === "conditions" ? 'bg-player1' : 'bg-transparent',
            'absolute inset-x-0 bottom-0 h-0.5',
          )}
        />
      </button>
    </nav>
  )
}

export default Tab