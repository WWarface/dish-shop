import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/pages/Layout/Layout";
import Home from "./components/pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
    {
        element: <Layout />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
        ]
    },
])

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
