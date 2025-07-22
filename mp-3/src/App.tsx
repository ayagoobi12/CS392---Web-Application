import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage       from "../pages/HomePage";
import EduPage        from "../pages/EduPage";
import EmpPage        from "../pages/EmloymentPage";
import PatentsPage    from "../pages/PatentsPage";
import CalculatorPage from "../pages/ProjectPage";
import ReferencesPage from "../pages/ReferencesPage";

// define URL-to-component mappings
const router = createBrowserRouter([
  { path: "/",     element: <HomePage />       }, // root/home
  { path: "/edu",  element: <EduPage />        }, // education section
  { path: "/emp",  element: <EmpPage />        }, // employment section
  { path: "/pat",  element: <PatentsPage />    }, // patents section
  { path: "/proj", element: <CalculatorPage /> }, // projects/calculator
  { path: "/ref",  element: <ReferencesPage /> }, // references section
]);

export default function App() {
  // provides router context so <Link> and navigation work
  return <RouterProvider router={router} />;
}
