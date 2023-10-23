import { useLocation, Routes, Route } from 'react-router-dom'
import { routes } from '../config/route'
import loadable from '@loadable/component'

const CommonPage = loadable((props: { page: string }) => import(`../pages/${props.page}`), {
	cacheKey: props => props.page,
})

export default function PageIndex() {
    const location = useLocation()

    return (
        <Routes location={location}>
            <Route path={'/'}>
                {routes.map(item => {
                    return (
                        <Route
                            path={item.url || item.page}
                            key={`route-${item.page}`}
                            element={<CommonPage page={item.page} />}
                        />
                    )
                })}
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    )
}