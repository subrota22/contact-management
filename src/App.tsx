import {RouterProvider} from "react-router-dom" ;
import { Routers } from "./Routers/Routers";
import PageLoader from "./Components/Share/PageLoader/PageLoader";
import "./App.css";
function App() {
  return (
    <>
    <RouterProvider router={Routers} fallbackElement={<PageLoader></PageLoader>}></RouterProvider>
    </>
  );
}

export default App;
