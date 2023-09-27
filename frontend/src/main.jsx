import React from "react";
import ReactDOM from "react-dom/client";
import AuthPage from "./pages/Auth.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error.jsx";
import EventsPage from "./pages/Events.jsx";
import BookingsPage from "./pages/Bookings.jsx";
import MainNavigation from "./components/Navigation/MainNavigation.jsx";
import AuthContext from "./context/auth-context.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/events",
        element: <EventsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/bookings",
        element: <BookingsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext.Provider>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  </React.StrictMode>
);
