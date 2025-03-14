import { createBrowserRouter } from "react-router-dom";
import { Bestsellers } from "./pages/Bestsellers";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { News } from "./pages/News";
import { NotFound } from "./pages/NotFound";
import Product from "./pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <News /> },
      { path: "/bestsellers", element: <Bestsellers /> },
      { path: "/product/:id", element: <Product /> },
    ],
  },
]);
