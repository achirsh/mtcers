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
        title: '免费帮助文档',
        backArrow: true,
        navBarLeftClick: () => {
            navigate('/', { replace: true })
        },
        bodyStyle: {paddingBottom: '50px'}
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
                        <div className={styles.desc}>{item?.desc}</div>
                    </div>
                </div>
            </div>
            {item?.desc1 && <div className={styles.itemTitle1}>{item?.desc1}</div>}
            {item && item.data.map((item1, idx) => {
                return (
                    <div key={`data-${idx}`} className={styles.itemData}>
                        {
                            item1.title && 
                            <div className={styles.itemTitle}>
                                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/arrow_down_h.svg' />
                                <span>{item1.title}</span>
                                <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/arrow_down_h.svg' />
                            </div>
                        }
                        <div className={styles.itemContent}  style={{
                            flexDirection: item1.type === 'cross' ? 'row' : 'column'
                        }}>
                            {item1.items.map((n, i) => {
                                return (
                                    <div key={`n-${i}`} className={styles.nItem} style={{
                                        flexDirection: n.type === 'cross' ? 'row' : 'column'
                                    }}>
                                        <div className={styles.title}>
                                            <span>编号-</span>
                                            <span>{n.title}</span>
                                        </div>
                                        <div className={styles.desc}>{n.desc}</div>
                                        <div className={styles.price}>
                                            <span>¥：</span>
                                            <span>{n.price}</span>
                                        </div>
                                        {n.recommended && <div className={styles.recommended}>{n.recommended}</div>}
                                        {n.desc1 && <div className={styles.desc1}>说明：{n.desc1}</div>}
                                        {n.desc2 && <div className={styles.desc1}>{n.desc2}</div>}
                                        {n.desc3 && <div className={styles.desc1}>{n.desc3}</div>}
                                        {n.recommended && <img alt='' src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/tuijian.png' className={styles.tuijian} />}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

            <div className={styles.tishi}>
                <span>点击“</span>
                <span>小蓝圈</span>
                <span>“输入编号,</span>
                <div>如“01”，进行下单</div>
                <img alt='' className={styles.arrow} src='https://pub-82355d939751402182e1cc721dccbb3c.r2.dev/arrow.svg' />
            </div>
        </Layout>
    )
}