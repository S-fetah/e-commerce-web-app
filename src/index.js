import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Account from "./routes/Account";
import Cart from "./routes/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
