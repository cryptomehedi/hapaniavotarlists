import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { VotarProvider } from "./Context/VotarProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VotarProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </VotarProvider>
);
