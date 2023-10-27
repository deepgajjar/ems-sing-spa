import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<div>  <h1>Ems project</h1>
    </div>
  },
  {
    path: "/ems",
    element:<div>  <h1>Ems project</h1>
    </div>
  },
],);
export default function Root(props) {
  return  <RouterProvider router={router} />
}
