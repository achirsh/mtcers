import { Modal, Card, Carousel, Button } from 'antd'
import styles from './index.module.scss'
import { useEffect } from 'react'

import swipe_01 from '../../static/img/swipe_01.jpeg'
import swipe_02 from '../../static/img/swipe_02.jpeg'
import swipe_03 from '../../static/img/swipe_03.jpeg'

import shop_01 from '../../static/img/shop_01.png'
import shop_03 from '../../static/img/shop_03.jpeg'
import shop_04 from '../../static/img/shop_04.jpg'

const shopDatas = [
    {
        icon: shop_01,
        text: '类目1:',
        desc: '苹果ID账号'
    },
    {
        icon: shop_03,
        text: '类目2:',
        desc: '科学上网工具'
    },
    {
        icon: shop_04,
        text: '类目3:',
        desc: 'TikTok账号'
    },
    {
        icon: shop_04,
        text: '类目4:',
        desc: 'TikTok增粉'
    },
    {
        icon: shop_04,
        text: '类目5:',
        desc: 'TikTok小白直通车'
    },
    {
        icon: shop_04,
        text: '类目6:',
        desc: 'TikTok爆款全攻略！《独家秘笈》'
    }
]

export default function Home() {

    useEffect(() => {
        // Modal.info({
        //     title: '购物须知',
        //     content: (
        //         <div>
        //             <p>本站商品仅用于学习、测试及跨境电商服务，严禁用于任何违法行为！</p>
        //             <h5>本站不接待上帝，买卖自愿/平等/互利，非质量受损问题售出不退！</h5>
        //         </div>
        //     ),
        //     onOk() {},
        //     okText: '我知道了'
        // });
    }, [])

    const carouselRender = () => {
        return (
            <Carousel autoplay>
                <img alt='' src={swipe_01} className={styles.carousel} />
                <img alt='' src={swipe_02} className={styles.carousel} />
                <img alt='' src={swipe_03} className={styles.carousel} />
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
                <h3 style={{ marginTop: 0 }}>重要公告及免费帮助文档</h3>
                <ul className={styles.ul1}>
                    <li>1 本站商品仅用于学习、测试及跨境电商服务，严禁用于任何违法行为！！！</li>
                    <li>2 本站仅出售线上产品，至于你用来下载什么app、下载的app如何使用，本站不做无偿教学服务</li>
                </ul>
                <div style={{ textAlign: 'right' }}>
                    <Button type='primary'>免费帮助文档</Button>
                </div>
            </Card>
        )
    }

    const render2 = () => {
        return (
            <Card 
                title="商品选购区"
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