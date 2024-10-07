import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Join from "./pages/join";
import Lobby from "./pages/game/lobby";
import Game from "./pages/game/game";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <Join /> },
  {
    path: "/games/:gameId", children: [
      { path: "", index: true, element: <Navigate to="lobby" replace /> },
      { path: "lobby", element: <Lobby /> },
      { path: "game", element: <Game /> }
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
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
