import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Root/Home/Home.jsx';
import Mobiles from './components/Root/Mobiles/Mobiles.jsx';
import Laptop from './components/Root/Laptops/Laptops.jsx';
import Laptops from './components/Root/Laptops/Laptops.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true,Component:Home},
      {path:'mobiles',Component:Mobiles},
      {path:'laptops',Component:Laptops}
    ]
  },
  {
    path:'about',
    element:<div>About Me Here</div>
  },
  {
    path:'blogs',
    element:<div>All my blogs are here</div>
  },
  {
    path:'app',
    Component:App
  },
  {
    path:'app2',
    element:<App></App>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
