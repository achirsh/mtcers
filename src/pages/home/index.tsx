import { Modal, Card } from 'antd'
import styles from './index.module.scss'
import { useEffect } from 'react'

export default function Home() {

    useEffect(() => {
        Modal.info({
            title: '购物须知',
            content: (
                <div>
                    <p>本站商品仅用于学习/游戏和测试，禁止用于任何违法行为！</p>
                    <h5>本站不接待上帝，买卖自愿/平等/互利，不接受请勿购买！</h5>
                    <h5>本站商品均有完整的介绍/使用教程/问题解答，购买请务必认真阅读</h5>
                </div>
            ),
            onOk() {},
            okText: '我知道了'
        });
    }, [])

    const render1 = () => {
        return (
            <Card 
                style={{
                    marginTop: '10px'
                }}
            >
                <h3>本站商品仅用于学习/游戏和测试，禁止用于任何违法行为！</h3>
                <p>1、本站仅出售AppleID，至于你用来下载什么App/下载的App如何使用，本站不做使用教学和服务！</p>
                <p>2、近期FaceTime诈骗频发，建议关闭FaceTime功能</p>
            </Card>
        )
    }

    return (
        <div className={styles.container}>
            {render1()}
        </div>
    )
}