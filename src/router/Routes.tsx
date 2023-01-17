import { createBrowserRouter } from "react-router-dom";

import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <div>
        <h1>Coming Soon</h1>
      </div>
    ),
  },
]);

export default router;
