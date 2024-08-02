import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Skilled from './components/Skilled.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './components/Contact.jsx'

let routes = createBrowserRouter([
    {
      path:'/',
      element:<App/>

    },
    {
      path:'/about',
      element:<About/>

    },{
      path:'/skilled',
      element:<Skilled/>
    },
    {
      path:'/experience',
      element:<Experience/>

    },
    {
      path: '/contact',
      element: <Contact/>

    }

  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
