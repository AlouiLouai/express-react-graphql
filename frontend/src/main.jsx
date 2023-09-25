import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthPage from "./pages/Auth.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import ErrorPage from "./pages/Error.jsx";
import EventsPage from "./pages/Events.jsx";
import BookingsPage from "./pages/Bookings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
