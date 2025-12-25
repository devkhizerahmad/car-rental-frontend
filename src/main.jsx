import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Practice/Navbar.jsx";
import { ThemeProvider } from "./components/Practice/ThemeContext.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/RoutingDom/Layout.jsx";
import Home from "./components/RoutingDom/Home/Home.jsx";
import About from "./components/RoutingDom/About/About.jsx";
import Contact from "./components/RoutingDom/ContactUS/ContactUs.jsx";
import User from "./components/RoutingDom/User/User.jsx";
import { Provider } from "react-redux";
import store from "./components/AppWrite/store/store.js";
import React from "react";
// import { store } from "./components/ReduxToolkit/app/store.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} loader={() => {}} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  // <ThemeProvider>
  //   {/* <RouterProvider router={router} /> */}
  //   <StrictMode>
  //     <App />
  //   </StrictMode>

  // </ThemeProvider>

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
