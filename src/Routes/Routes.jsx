import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import Login from "../Pages/Login/Login";
import VotarDataAdd from "../Pages/DataUolpad/VotarDataAdd";
import UserData from "../Pages/UserData/UserData";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement : <NotFound/>,
      children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "/menLists" ,
            element: <UserData />
        },
        {
            path: "/womenLists" ,
            element: <UserData />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
          path: "/votaradd",
          element: <VotarDataAdd />
        }
      ]
    },
  ]);