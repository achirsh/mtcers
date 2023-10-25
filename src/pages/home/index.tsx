import { Modal, Card, Carousel, Button } from 'antd'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'

const shopDatas = [
    {
        icon: 'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/shop_01.png',
        text: '类目1:',
        desc: '苹果ID账号',
        data: [
            {
                title: '购买【成品账号】产品',
                items: [
                    { title: '产品编号-01:', desc: '亚洲地区ID', price: '¥：13' },
                    { title: '产品编号-02:', desc: '美国ID', price: '¥：13' },
                ]
            },
            {
                title: '购买【空白账号】产品',
                items: [
                    { title: '产品编号-03:', desc: '美国ID+安全上网工具', price: '¥：80' },
                ]
            }
        ]
    },
    // {
    //     icon: 'https://i.postimg.cc/3Rt5jX90/shop-03.jpg',
    //     text: '类目2:',
    //     desc: '安全上网工具使用权',
    //     data: [
    //         {
    //             title: '【美国】使用权',
    //             items: [
    //                 { title: '产品编号-07:', desc: '使用期1个月', price: '¥：140' },
    //                 { title: '产品编号-08:', desc: '使用期3个月', price: '¥：199' },
    //                 { title: '产品编号-09:', desc: '使用期半年', price: '¥：310' },
    //             ]
    //         },
    //         {
    //             title: '【亚洲】使用权',
    //             items: [
    //                 { title: '产品编号-10:', desc: '使用期1个月', price: '¥：140' },
    //                 { title: '产品编号-11:', desc: '使用期3个月', price: '¥：199' },
    //                 { title: '产品编号-12:', desc: '使用期半年', price: '¥：310' },
    //             ]
    //         }
    //     ]
    // },
    {
        icon: 'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/shop_04.jpg',
        text: '类目3:',
        desc: 'TikTok账号',
        data: [
            {
                title: 'TikTok【美国】账号',
                items: [
                    { title: '产品编号-13:', desc: '0粉丝账号', price: '¥：10' },
                    { title: '产品编号-14:', desc: '1000粉丝号', price: '¥：75' },
                    { title: '产品编号-15:', desc: '5000粉丝号', price: '¥：290' },
                ]
            },
            {
                title: 'TikTok【泰国】账号',
                items: [
                    { title: '产品编号-16:', desc: '0粉丝账号', price: '¥：10' },
                    { title: '产品编号-17:', desc: '1000粉丝号', price: '¥：70' },
                ]
            },
            {
                title: 'TikTok【马来西亚】账号',
                items: [
                    { title: '产品编号-20:', desc: '0粉丝账号', price: '¥：10' },
                    { title: '产品编号-21:', desc: '1000粉丝号', price: '¥：70' },
                ]
            },
            {
                title: 'TikTok【菲律宾】账号',
                items: [
                    { title: '产品编号-18:', desc: '0粉丝账号', price: '¥：10' },
                    { title: '产品编号-19:', desc: '1000粉丝号', price: '¥：70' },
                ]
            }
        ]
    },
    {
        icon: 'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/shop_04.jpg',
        text: '类目4:',
        desc: 'TikTok增粉',
        data: [
            {
                items: [
                    { title: '产品编号-22:', desc: 'Tiktok【美国账号】增粉', price: '¥：1000粉/39' },
                    { title: '产品编号-23:', desc: 'Tiktok【泰国账号】增粉', price: '¥：1000粉/30' },
                    { title: '产品编号-24:', desc: 'Tiktok【菲律宾账号】增粉', price: '¥：1000粉/30' },
                    { title: '产品编号-25:', desc: 'Tiktok【马来西亚账号】增粉', price: '¥：1000粉/30' },
                ]
            },
        ]
    },
    {
        icon: 'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/shop_04.jpg',
        text: '类目5:',
        desc: 'TikTok小白直通车',
        data: [
            {
                title: 'TikTok「 美国苹果ID + 安全上网工具 + TikTok账号 」 小白直通车',
                items: [
                    { title: '产品编号-26:', desc: '美国苹果ID+火箭+美国TikTok账号', price: '¥：160' },
                    { title: '产品编号-27:', desc: '美国苹果ID+火箭+美国TikTok账号', price: '¥：220' },
                    { title: '产品编号-28:', desc: '美国苹果ID+火箭+美国TikTok账号', price: '¥：330' },
                ]
            },
            {
                title: 'TikTok「 美国苹果ID + 安全上网工具 + TikTok账号 + 实物设备 」 小白直通车',
                items: [
                    { title: '产品编号-29:', desc: '美国苹果ID+火箭+TikTok全新账号+配置完毕iPhone7', price: '¥：1340' },
                    { title: '产品编号-30:', desc: '美国苹果ID+火箭+TikTok全新账号+配置完毕iPhone7', price: '¥：1480' },
                    { title: '产品编号-31:', desc: '美国苹果ID+火箭+TikTok全新账号+配置完毕iPhone7', price: '¥：1540' },
                ]
            },
        ]
    },
    {
        icon: 'https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/shop_04.jpg',
        text: '类目6:',
        desc: 'TikTok爆款全攻略！《独家秘笈》',
        data: [
            {
                title: 'TikTok爆款实操攻略！全网一流独家秘籍',
                items: [
                    { title: '产品编号-26:', desc: '《福利：多方位认识TikTok》', desc1: '引言：走近TikTok，解锁认知',  price: '¥：5.93' },
                    { title: '产品编号-27:', desc: '《保姆级教程：手把手教你TikTok正确打开方式》', desc1: '引言：科学上网，稳定畅玩', price: '¥：29.9' },
                    { title: '产品编号-28:', desc: '《涨粉绝技：3天破万粉》', desc1: '引言：大咖亲测有效，不保障100%', price: '¥：49.3' },
                    { title: '产品编号-28:', desc: '《营业：TikTok开一家属于自己的店铺》', desc1: '引言：今天做老板，明天炒老板', price: '¥：49.9' },
                    { title: '产品编号-28:', desc: '《TikTok帮手：大神们压箱底的工具》', desc1: '引言：小白快速上手出作品', price: '¥：34.9' },
                    { title: '产品编号-28:', desc: '《没感情的剪视频机器：高效视频制作流程》', desc1: '引言：大咖亲测有效，不保障100%', price: '¥：69.9' },
                    { title: '产品编号-28:', desc: '《怎么搞内容：电脑剪辑大神制作流程》', desc1: '引言：PR用户可使用', price: '¥：49.9' },
                    { title: '产品编号-28:', desc: '《怎么发货：物流及现代化管理方式》', desc1: '引言：电商人的必备素养', price: '¥：59.9' },
                    { title: '产品编号-28:', desc: '《事半功倍：选品的变现窍门》', desc1: '引言：选对货品，成功一半', price: '¥：99.9' },
                    { title: '产品编号-28:', desc: '《超细致：高能讲解如何带货》', desc1: '引言：选对方法，出海淘金', price: '¥：119' },
                ]
            },
        ]
    }
]

export default function Home() {
    const [modal, setModal] = useState<boolean>(false)
    const [select, setSelect] = useState<any>([])

    useEffect(() => {
        Modal.info({
            title: '购物须知',
            content: (
                <div>
                    <p>本站商品仅用于学习、测试及跨境电商服务，严禁用于任何违法行为！</p>
                    <h5>本站不接待上帝，买卖自愿/平等/互利，非质量受损问题售出不退！</h5>
                </div>
            ),
            onOk() {},
            okText: '我知道了'
        });
    }, [])

    const carouselRender = () => {
        return (
            <Carousel autoplay>
                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/swipe_01.jpeg' className={styles.carousel} />
                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/swipe_02.jpeg' className={styles.carousel} />
                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/swipe_03.jpeg' className={styles.carousel} />
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
                            <div key={`shop-data-${idx}`} className={styles.shopItem} onClick={() => {
                                setModal(true)
                                setSelect(item.data)
                            }}>
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
                                <div>{item.title}</div>
                                <div className={styles.content}>
                                    {item.items.map((n: any, i: number) => {
                                        return (
                                            <div key={`items-${i}`} className={styles.items}>
                                                <div>{n.title}</div>
                                                <div>{n.desc}</div>
                                                <div>{n.desc1}</div>
                                                <div>{n.price}</div>
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
            {carouselRender()}
            {render1()}
            {render2()}
            {shopDetailModal()}
        </div>
    )
}