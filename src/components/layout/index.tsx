import styles from "./index.module.scss";
import { NavBar } from "antd-mobile";
import "./index.css";

export default function AppRouter(props: any) {
    const {
        withNavBar = false,
        backArrow = false,
        navBarMode = "light",
        navBarLeftClick,
        title = "",
        leftContent,
        rightContent,
        style,
        children,
        bodyScroll,
        bodyStyle,
        contentBgChild
    } = props

    const goBack = async () => {
        //
    }

    const basicNavBarProps = {
        mode: navBarMode,
        right: rightContent,
        style,
        backArrow,
        left: leftContent,
        children: title || "",
        onBack: () => {
            navBarLeftClick ? navBarLeftClick() : goBack();
        }
    }

    return (
        <div className={styles["content"]}>
            <div className={styles["content-bg"]}>{contentBgChild}</div>
            {withNavBar &&  <NavBar {...basicNavBarProps} className={styles["nav-bar-style"]} />}
            <div
                className={styles.body}
                style={{ ...bodyStyle }}
                onScroll={bodyScroll}
            >
                {children}
            </div>
        </div>
    )
}
