import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./pages/Error";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Root from "./layout/Root";

import { fruits } from "./data/fruits";

import "@emdgroup-liquid/liquid/dist/css/liquid.global.css";
import Category from "./pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/:category",
        element: <Category></Category>,
      },
      {
        path: "/:category/:fruit",
        element: <Detail></Detail>,
      },
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
