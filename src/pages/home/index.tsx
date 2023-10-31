import { Modal, Card, Carousel, Button } from 'antd'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shopDatas } from '../../config'

export default function Home() {
    const navigate = useNavigate()

    const [modal, setModal] = useState<boolean>(false)
    const [select, setSelect] = useState<any>([])

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
            <Carousel autoplay style={{ marginTop: '15px' }}>
                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/banner01.png' className={styles.carousel} />
                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/banner02.png' className={styles.carousel} />
                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/banner03.png' className={styles.carousel} />
            </Carousel>
        )
    }
    
    const render1 = () => {
        return (
            <Card bodyStyle={{ padding: '10px' }}>
                <div className={styles.cardTitle}>重要公告及免费帮助文档</div>
                <ul className={styles.ul1}>
                    <li>本站商品仅用于学习、测试及跨境电商服务，严禁用于任何违法行为！！！</li>
                    <li>本站仅出售线上产品，至于你用来下载什么app、下载的app如何使用，本站不做无偿教学服务</li>
                </ul>
                <div className={styles.buttonMain}>
                    <Button type='primary' onClick={() => {
                        navigate('/iframe?url=https://www.yuque.com/jiaowoi/zq5em7/xhxgm3u6hhosg9k0?singleDoc# 《文章归档》')
                        // window.open('https://www.yuque.com/jiaowoi/zq5em7/xhxgm3u6hhosg9k0?singleDoc# 《文章归档》')
                    }}>免费帮助文档</Button>
                </div>
            </Card>
        )
    }

    const render2 = () => {
        return (
            <div className={styles.cardContent}>
                {shopDatas.map((item, idx) => {
                    return (
                        <div key={`shop-data-${idx}`} className={`${styles.shopItem} ${item.text === '类目5' && styles.shopItem1}`} onClick={() => {
                            // setModal(true)
                            // setSelect(item.data)
                            navigate(`/detail/${item.id}`)
                        }} style={{
                            width: item.text === '类目5' ? '100%' : 'calc(50% - 5px)',
                        }}>
                            <div className={styles.title}>{item.text}</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img alt='' src={item.icon} />
                                <div>
                                    <div className={styles.desc}>{item.desc}</div>
                                    <div className={styles.desc}>{item.desc1}</div>
                                </div>
                            </div>
                            <div className={styles.desc4}>{item.desc2}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    // 商品详情弹窗
    const shopDetailModal = () => {
        return (
            <Modal 
                title="商品列表" 
                open={modal} 
                footer={null}
                style={{ top: 20 }}
                onCancel={() => setModal(false)}
            >
                <div className={styles.shopDetailModal}>
                    {select.map((item: any, idx: number) => {
                        return (
                            <div key={`shopDetailModal-${idx}`} className={styles.shopDetailModalItem}>
                                <div className={styles.title1}>{item.title}</div>
                                <div className={styles.content}>
                                    {item.items.map((n: any, i: number) => {
                                        return (
                                            <div key={`items-${i}`} className={styles.items}>
                                                <div className={styles.title}>{n.title}</div>
                                                <div className={styles.desc1}>{n.desc}</div>
                                                <div className={styles.desc2}>{n.desc1}</div>
                                                <div className={styles.desc3}>{n.desc2}</div>
                                                <div className={styles.price1}>{n.price1}</div>
                                                <div className={styles.price}>{n.price}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        )
    }

    return (
        <div className={styles.container}>
            {render1()}
            {carouselRender()}
            <div className={styles.title2}>
                <img alt='' src={'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/arrow_bottom.svg'} />
                <span>商品选购区</span>
                <img alt='' src={'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/arrow_bottom.svg'} />
            </div>
            {render2()}
            {shopDetailModal()}
        </div>
    )
}