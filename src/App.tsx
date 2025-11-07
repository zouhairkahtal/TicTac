import { Layout } from "../src/layout";
import { HomePage } from "../src/views/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./views/AboutPage";
import { ContactUs } from "./views/ContactUs";
import { Consultation } from "./views/consultation";
import { Repair } from "./views/Repair";
import { Sell } from "./views/Sell";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage/>,
        },
        {
          path:"HomePage",
          element: <HomePage/>,
        },
        {
          path: "AboutPage",
          element: <About />,
        },
        {
          path: "contactUs",
          element: <ContactUs />,
        },
        {
          path: "consultation",
          element: <Consultation />,
        },
        {
          path: "Repair",
          element: <Repair/>,
        },
        {
          path: "Sell",
          element: <Sell />,
        },
        // {
        //   path: "Dashboard",
        //   element: <Dashboard />,
        // },
        // {
        //   path: "BudgetForm",
        //   element: <BudgetForm />,
        // },

        // {
        //   path: "RemoveBudgets",
        //   element: <RemoveBudgets />,
        // },
        {
          path: "*",
          element: (
            <h1 className="text-center text-2xl text-red-600">
              404 - Page Not Found
            </h1>
          ),
        },
      ],
    },
  ]);
  return (
 
      <RouterProvider router={router} />
  
  );
}

export default App;
