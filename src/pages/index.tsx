import { router } from '../config/route'

import { 
    RouterProvider 
} from "react-router-dom"

export default function PageIndex() {

    return (
        <RouterProvider router={router} />
    )
}