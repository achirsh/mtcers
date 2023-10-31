import styles from './index.module.scss'
import { Layout } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { shopDatas } from '../../config'
import { useEffect, useState } from 'react'

export default function Detail() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [item, setItem] = useState<any>(null)

    const layoutProps = {
        withNavBar: true,
        style: { fontWeight: 500 },
        title: '',
        backArrow: true,
        navBarLeftClick: () => {
            navigate('/#', { replace: true })
        },
        bodyStyle: {
            height: 'calc(100% - 110px)'
        }
    }

    useEffect(() => {
        if (id) {
            setItem(shopDatas.find(x => x.id === id))
        }
    }, [])

    return (
        <Layout {...layoutProps}>
            <div className={styles.shopItem}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img alt='' src={item?.icon} />
                    <div>
                        <div className={styles.title}>{item?.text}</div>
                        <div className={styles.desc}>{item?.desc}{item?.desc11}</div>
                    </div>
                </div>
            </div>
            {item?.desc1 && <div className={styles.itemTitle1}>{item?.desc1}</div>}
            {item && item.data.map((item1: any, idx: number) => {
                return (
                    <div key={`data-${idx}`} className={styles.itemData}>
                        {
                            item1.title && 
                            <div className={styles.itemTitle}>
                                <span>{item1.title}</span>
                            </div>
                        }
                        <div className={styles.itemContent}  style={{
                            flexDirection: item1.type === 'cross' ? 'row' : 'column'
                        }}>
                            {item1.items.map((n: any, i: number) => {
                                return (
                                    <div key={`n-${i}`} className={styles.nItem} style={{
                                        flexDirection: n.type === 'cross' ? 'row' : 'column',
                                        justifyContent: n.center ? 'center' : 'flex-start'
                                    }}>
                                        <div className={styles.title} style={{
                                            marginRight: n.center ? '10px' : 0
                                        }}>
                                            <span>编号-</span>
                                            <span>{n.title}</span>
                                        </div>
                                        <div className={styles.desc}>{n?.desc}</div>
                                        {n.desc11 && <div className={styles.desc}>{n?.desc11}</div>}
                                        <div className={styles.price}>
                                            <span>¥：</span>
                                            <span>{n.price}</span>
                                        </div>
                                        {n.recommended && <div className={styles.recommended} style={{
                                            fontSize: n.recommended === '推荐!' ? '16px' : '20px',
                                            marginLeft: n.recommended === '推荐!' ? '10px' : 0
                                        }}>
                                            {n.recommended}
                                            <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/tuijian.png' className={styles.tuijian} />
                                        </div>}
                                        {n.desc1 && <div className={styles.desc1}>{n.desc1}</div>}
                                        {n.desc2 && <div className={styles.desc1}>{n.desc2}</div>}
                                        {n.desc3 && <div className={styles.desc1}>{n.desc3}</div>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            {item?.shuoming && <div className={styles.shuoming}>
                {item?.shuoming}
            </div>}
            
            {
                item?.id === '1' &&
                <div className={styles.idone}>
                    <div>ID需要在苹果商店登录。</div>
                    <div>一定不要在“设置”登录，</div>
                    <div>一定不要在“设置”登录，</div>
                    <div>一定不要在“设置”登录！！！</div>
                    <div>自己用，不要给别人。</div>
                    <div>不换设备、不乱改IP，用完退出，</div>
                    <div>再用再登，科学上网，持续稳定。</div>
                    <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/1211698741988_.pic.jpg' />
                    <div className={styles.tishidesc}>
                        TikTok是抖音的海外版，抖音和海外TikTok同属字节跳动旗下产品，但抖音和TikTok数据不互通，当前“类目1”产品不提供TikTok使用教学及服务，你成功登录ID/下载App则表示本商品无质量问题。
                    </div>
                </div>
            }

            {
                item?.id === '2' &&
                <div className={styles.idtwo}>
                    <div>确认账号无误之后请修改邮箱、登录密码等信息，否则账号丢失自行承担后果</div>
                    <div>美国账号一天内没改用户名、邮箱、登录密码就被封了，无偿给换下单同等价值新号（正常换头像和发视频的也可以换，只要没有改用户名、邮箱和登录密码）</div>
                    <div>账号出售不包小黄车，科学上网，文明使用，持续稳定</div>

                    <div className={styles.tishidesc}>
                        TikTok是抖音的海外版，抖音和海外TikTok同属字节跳动旗下产品，但抖音和TikTok数据不互通，当前“类目2”产品不提供TikTok使用教学及服务，赠送服务包含：售后48小时内掉粉包补充粉丝量，出售账号均为满月账号。
                    </div>
                </div>
            }

            {
                item?.id === '3' &&
                <div className={styles.idthree}>
                    <div>其他地区增粉需求，点击“小蓝圈”私信客服</div>
                
                    <div className={styles.tishidesc}>
                        TikTok是抖音的海外版，抖音和海外TikTok同属字节跳动旗下产品，但抖音和TikTok数据不互通，当前“类目3”产品不提供TikTok使用教学及服务，因平台政策调动导致的账号意外情况不负责任。
                    </div>
                </div>
            }

            <div className={styles.tishi}>
                <span>点击“</span>
                <span>小蓝圈</span>
                <span>“输入编号,</span>
                <div>如“{item?.data[0].items[0].title.replace('：', '')}”，进行下单</div>
                <img alt='' className={styles.arrow} src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/arrow.svg' />
            </div>
        </Layout>
    )
}