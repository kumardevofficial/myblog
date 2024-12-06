import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CreatePost from "./component/CreatePost/CreatePost.jsx";
import HomePage from "./component/HomePageData/HomePage.jsx";
import PoliticsNews from "./component/PoliticsNews/PoliticsNews.jsx";
import TechnologyNews from "./component/TechnologyNews/TechnologyNews.jsx";
import GeneralNews from "./component/GeneralNews/GeneralNews.jsx";
import LoginAndSignup from "./component/loginAndSignup/LoginAndSignup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/politics",
        element: <PoliticsNews />,
      },
      {
        path: "/technology",
        element: <TechnologyNews />,
      },
      {
        path: "/general",
        element: <GeneralNews />,
      },
      {
        path: "/login",
        element: <LoginAndSignup />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
