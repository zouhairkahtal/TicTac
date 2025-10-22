import { Layout } from "../src/layout";

import { HomePage } from "../src/views/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./views/AboutPage";



// import { RemoveBudgets } from "./views/RemoveBudgets";


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
        // {
        //   path: "LogIn",
        //   element: <LogIn />,
        // },
        // {
        //   path: "SingUp",
        //   element: <SingUP />,
        // },
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
