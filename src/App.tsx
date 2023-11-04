import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import './styles/global.scss'
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './styles/app.css';

const queryClient = new QueryClient();

function App() {
  
  const Layout = () => {  
    return (
      <div className="main">
        <Navbar/>
        <div className="container">

          <div className="menuContainer">
            <Menu/>
          </div>

          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
            <Outlet/>
            </QueryClientProvider>
          </div>

        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/users',
          element: <Users/>,
        },
        {
          path: '/products',
          element: <Products/>,
        },
        {
          path: '/users/:id',
          element: <User/>,
        },
        {
          path: '/products/:id',
          element: <Product/>,
        },
      ],
    },
    {
      path: '/login',
      element: <Login/>,
    }
  ]);

  return <RouterProvider router={router}/>
}

export default App
