import { Outlet, createBrowserRouter } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavigationBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
