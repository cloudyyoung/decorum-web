import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/home";
import Join from "./pages/join";
import Lobby from "./pages/lobby";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/join", element: <Join /> },
  { path: "/lobby", element: <Lobby /> }
]);

export const App = () => {
  return (
    <>
      <div className="container is-max-tablet">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
