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
import store from './utils/reduxStore.jsx'
import { Provider } from 'react-redux'

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
  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
)
