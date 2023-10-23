import { Modal, Card, Carousel } from 'antd'
import styles from './index.module.scss'
import { useEffect } from 'react'

import shop_01 from '../../static/img/shop_01.png'
import shop_02 from '../../static/img/shop_02.png'

const shopDatas = [
    {
        icon: shop_01,
        text: '苹果成品账号',
        desc: '已购付费App的苹果账号'
    },
    {
        icon: shop_02,
        text: '苹果空白账号',
        desc: '全球各国/地区苹果账号'
    }
]

export default function Home() {

    useEffect(() => {
        // Modal.info({
        //     title: '购物须知',
        //     content: (
        //         <div>
        //             <p>本站商品仅用于学习/游戏和测试，禁止用于任何违法行为！</p>
        //             <h5>本站不接待上帝，买卖自愿/平等/互利，不接受请勿购买！</h5>
        //             <h5>本站商品均有完整的介绍/使用教程/问题解答，购买请务必认真阅读</h5>
        //         </div>
        //     ),
        //     onOk() {},
        //     okText: '我知道了'
        // });
    }, [])

    const carouselRender = () => {
        return (
            <Carousel autoplay>
                <img alt='' src='https://raw.githubusercontent.com/achirsh/achirsh.github.io/master/images/mtcer/swipe_01.jpeg' className={styles.carousel} />
                <img alt='' src='https://raw.githubusercontent.com/achirsh/achirsh.github.io/master/images/mtcer/swipe_02.jpeg' className={styles.carousel} />
                <img alt='' src='https://raw.githubusercontent.com/achirsh/achirsh.github.io/master/images/mtcer/swipe_03.jpeg' className={styles.carousel} />
            </Carousel>
        )
    }
    
    const render1 = () => {
        return (
            <Card 
                title="# 公告及联系"
                style={{
                    marginTop: '20px'
                }}
            >
                <h3 style={{ marginTop: 0 }}>本站商品仅用于学习/游戏和测试，禁止用于任何违法行为！</h3>
                <ul className={styles.ul1}>
                    <li>1 本站仅出售对应账号，至于你用来下载什么App/下载的App如何使用，本站不做使用教学和服务！</li>
                    <li>2 要购买具体商品请点击右下角聊天图标联系我哟！</li>
                    <li>3 近期FaceTime诈骗频发，建议关闭FaceTime功能！</li>
                </ul>
            </Card>
        )
    }

    const render2 = () => {
        return (
            <Card 
                title="# 要来点什么"
                style={{
                    marginTop: '20px'
                }}
            >
                <div className={styles.cardContent}>
                    {shopDatas.map((item, idx) => {
                        return (
                            <div key={`shop-data-${idx}`} className={styles.shopItem}>
                                <img alt='' src={item.icon} />
                                <div>
                                    <div className={styles.title}>{item.text}</div>
                                    <div className={styles.desc}>{item.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Card>
        )
    }

    return (
        <div className={styles.container}>
            {carouselRender()}
            {render1()}
            {render2()}
        </div>
    )
}