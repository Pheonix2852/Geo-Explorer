import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
