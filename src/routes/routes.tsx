import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Teachers from "../pages/Teachers";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Faq from "../pages/Faq";
import Pricing from "../pages/Pricing";
import Dashboard from "../pages/dashboard";
import ProtectedRoute from "../components/ui/ProtectedRoute";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/teachers", element: <Teachers /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/blog", element: <Blog /> },
  { path: "/courses", element: <Courses /> },
  { path: "/faq", element: <Faq /> },
  { path: "/Narxlar", element: <Pricing /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

export default routes;
