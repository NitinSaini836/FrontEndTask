
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserForm from "./components/userform/UserForm";
import ShowUserData from "./components/userform/ShowUserData";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserForm />,
    },
    {
      path:"/showdata",
      element: <ShowUserData />
    }

  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
