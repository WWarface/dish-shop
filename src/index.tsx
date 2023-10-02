import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
])

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
