import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivatePage>
        <MainLayout />
      </PrivatePage>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
