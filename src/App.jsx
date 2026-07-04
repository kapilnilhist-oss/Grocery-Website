import Home from "./components/Home/Home";
import { createHashRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProduct from "./components/AllProduct/AllProduct";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/allproduct",
          element: <AllProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;