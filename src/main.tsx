import React from 'react'
import ReactDOM from 'react-dom/client'
import './static/css/index.scss'
import { RouterProvider } from "react-router-dom"
import { router } from './config/route'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
