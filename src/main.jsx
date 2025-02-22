import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from './components/Login.jsx'
import CreateAccount from './components/CreateAccount.jsx'
// import { AuthContextProvider } from './contect/AuthContext.jsx'
import HomePage from './components/HomePage.jsx'
import SearchPage from './components/SearchPage.jsx'
import VideoPage from './components/VideoPage.jsx'
import SearchContext from './context/searchContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <HomePage />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "/watch",
      element: <VideoPage />
    },
  ]},
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/createaccount",
    element: <CreateAccount />
  },
])

createRoot(document.getElementById('root')).render(
  <SearchContext>
    <RouterProvider router={router} />
  </SearchContext>
)
