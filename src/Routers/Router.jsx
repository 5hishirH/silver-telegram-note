import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import CreateNote from "../Pages/CreateNote/CreateNote";
import EditNote from "../Pages/EditNote/EditNote";

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
      {
        path: "/create-note",
        element: <CreateNote />,
      },
      {
        path: "/edit-note/:id",
        element: <EditNote />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
