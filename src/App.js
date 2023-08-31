import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//Default Import.
import Header from "./components/header.js";
import Body from "./components/body.js";
import Footer from "./components/footer.js";
// import About from "./components/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.js";
import { Outlet } from "react-router-dom";
// import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Authentication.js";
import Profile from "./components/Profile_class.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/cart.js";
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
//Upon on demand loading -> upon render -> suspense loading
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Provider>
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
        element: (<Suspense><About /></Suspense>),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: (<Suspense><Contact /></Suspense>),
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu></RestaurantMenu>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

//changing the content inside the <div id="root">--content--</div>
root.render(<RouterProvider router={appRouter} />);
