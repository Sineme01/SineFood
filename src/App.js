import React from "react";
import ReactDOM from "react-dom/client";
//Default Import.
import Header from "./components/header.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";
import About from "./components/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Basic from "./components/Authentication.js";
import Profile from "./components/Profile_class.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu></RestaurantMenu>,
      },
    ],
  },
  {
    path: "/login",
    element: <Basic></Basic>,
  },
]);

//changing the content inside the <div id="root">--content--</div>
root.render(<RouterProvider router={appRouter} />);
