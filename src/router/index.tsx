import { createBrowserRouter } from "react-router-dom";
import FaixaImage from "../components/faixaImage/FaixaImage";
import AppTS from "../components/slider/Slider";
import App from "../components/slider/Slider";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
  ,
  {
    path: "/blog",
    element: <Blog />
  }
  ,
  {
    path: "/app",
    element: <AppTS />,
  }
  

]);

export default router;