import './App.css'
import {
  createHashRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import RegularNav from './assets/components/RegularNav';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const FullPage = () =>{
  return(
    <div className='fullPage'>
      <RegularNav />
      <Outlet />
    </div>
  )
}

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <FullPage/>,
    children:[{
      path: "/checkout",
      element: <Checkout />,
    },],
  },
  {
    path: "/about",
    element: <FullPage/>,
    children:[{
      path: "/about",
      element: <About />,
    },],
  },
  {
    path: "/*",
    element: <NotFound/>,
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