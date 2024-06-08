import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound";
import MenLists from "../Pages/Men/MenLists";
import WomenLists from "../Pages/Women/WomenLists";
import Login from "../Pages/Login/Login";
import VotarDataAdd from "../Pages/DataUolpad/VotarDataAdd";

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
            element: <MenLists/>
        },
        {
            path: "/womenLists" ,
            element: <WomenLists />
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