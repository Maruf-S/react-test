import React from "react"
import styles from "./button.module.css"
interface Props {
    title: string
    onClick?: () => void
    // Customizable style
    style?: React.CSSProperties
}
function Index({ title, onClick, style = {} }: Props) {
    return (
        <div className={styles["btn"]} style={style}>
            {title}
        </div>
    )
}

export default Index
