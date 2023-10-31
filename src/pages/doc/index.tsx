import { Layout } from '../../components'
import { useNavigate } from 'react-router-dom'

export default function ComplaintsPage(): JSX.Element {
    const navigate = useNavigate()

    const layoutProps = {
        withNavBar: true,
        style: { fontWeight: 500 },
        title: '免费帮助文档',
        backArrow: true,
        navBarLeftClick: () => {
            navigate('/', { replace: true })
        }
    }

    return <Layout {...layoutProps}>
        <iframe
            style={{
                width: '100%', height: '100vh', overflow: 'visible',
                border: 'none',
            }}

            src={'https://www.yuque.com/jiaowoi/zq5em7/xhxgm3u6hhosg9k0?singleDoc#%20《文章归档》'}
        />
    </Layout>
        
}
