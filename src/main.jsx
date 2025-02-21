import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LeftBar from './components/LeftBar.jsx'
import HomeMain from './components/HomeMain.jsx'
import SearchMain from './components/SearchMain.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <><LeftBar /><HomeMain /></>
    },
    {
      path: "/home",
      element: <><LeftBar /><HomeMain /></>
    },
    {
      path: "/search",
      element: <><LeftBar /><SearchMain /></>
    },
  ]},
  {
    path: "/login",
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
