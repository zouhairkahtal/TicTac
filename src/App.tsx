import { Layout } from "../src/layout";
import { HomePage } from "../src/views/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./views/AboutPage";
import { ContactUs } from "./views/ContactUs";
import { Consultation } from "./views/consultation";


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
        // {
        //   path: "ForgotPassword",
        //   element: <ForgotPassword />,
        // },
        // {
        //   path: "ResetPassword",
        //   element: <ResetPassword />,
        // },
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
