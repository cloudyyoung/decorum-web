import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Join from "./pages/join";
import Lobby from "./pages/lobby";
import HouseSetup from "./pages/game/house_setup";
import Conditions from "./pages/game/conditions";
import GameLayout from "./pages/game/game_layout";
import { GameContextProvider } from "./context/game_context";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <Join /> },
  { path: "/games/:gameId/lobby", element: <Lobby /> },
  {
    path: "/games/:gameId",
    element: <GameLayout />,
    children: [
      { path: "", index: true, element: <Navigate to="lobby" replace /> },
      { path: "setup", element: <HouseSetup /> },
      { path: "conditions", element: <Conditions /> }
    ]
  },
]);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";


export const App = () => {
  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <GameContextProvider>
          <RouterProvider router={router} />
        </GameContextProvider>
      </div>
    </>
  )
}

export default App
