import ReactDOM from 'react-dom/client'
import './static/css/index.scss'
import './static/css/antd.scss'
import { RouterProvider } from "react-router-dom"
import { router } from './config/route'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
