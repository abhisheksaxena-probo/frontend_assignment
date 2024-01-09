import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import PostInfoPage from "./pages/PostInfoPage/PostInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <PostInfoPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
