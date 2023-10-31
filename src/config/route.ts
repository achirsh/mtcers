import { createBrowserRouter } from "react-router-dom"
import Home from '../pages/home'
import Iframe from '../pages/doc'
import Detail from '../pages/detail'

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
                },
                {
                    path: 'iframe',
                    Component: Iframe,
                    loader: async () => {
                        return []
                    },
                },
                {
                    path: 'detail/:id',
                    Component: Detail,
                    loader: async () => {
                        return []
                    },
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