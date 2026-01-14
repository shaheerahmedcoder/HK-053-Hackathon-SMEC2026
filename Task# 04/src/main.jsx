import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'

const router = createBrowserRouter([
  {
    path:(``),
    element: <Layout/>,
    children:[
      {
        path:(``),
        element: <Home/>
      },
      {
        path:(`about`),
        element: <About/>
      },
      {
        path:(`contact`),
        element: <Contact/>
      },
      {
        path:(`products`),
        element: <Products/>
      },
      {
        path:(`product/:id`),
        element: <SingleProduct/>
      },

    ]
  }
])


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)