import React from "react";

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import MyJobs from "../pages/MyJobs";
import CreateJob from "../pages/CreateJob";
import UpdateJob from "../pages/UpdateJob";
import JobDetails from "../pages/JobDetails";
import Login from "../pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-job",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <PrivateRoute>
            <CreateJob />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(
            `https://job-portal-backend-q154.onrender.com/all-jobs/${params.id}`
          ),
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/reset",
    element: <ForgotPassword />,
  },
]);

export default router;
