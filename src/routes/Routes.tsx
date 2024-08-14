import { createBrowserRouter } from "react-router-dom";
import HomePage from "./../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import App from "../layout/App";
import ProductPage from "./../pages/ProductPage/ProductPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about_us", element: <AboutPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/registration", element: <RegistrationPage /> },
      {
        path: "/product-details/:productId",
        element: <ProductDetailsPage />,
        loader: async ({ params }) =>
          fetch(
            `${import.meta.env.VITE_SERVER_URL}/products/${params.productId}`
          ),
      },
    ],
  },
]);

export default routes;
