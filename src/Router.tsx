import { createBrowserRouter } from "react-router-dom";
import { Bestsellers } from "./pages/Bestsellers";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import Product from "./pages/Product";
import Products from "./pages/Products";
import CheckoutConfirmation from "./pages/CheckoutConfirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/bestsellers", element: <Bestsellers /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/checkoutconfirmation", element: <CheckoutConfirmation /> },
    ],
  },
]);
