import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/home'

export const router = createBrowserRouter(
    [
        {
            path: "/",
            caseSensitive: true, // 是否开启大小写检测
            children: [
                {
                    index: true,
                    Component: Home,
                    loader: async () => {
                        return []
                    }
                }
            ]
        }
    ], 
    {
        basename: "/",
        future: {
            v7_normalizeFormMethod: true
        },
    }
)