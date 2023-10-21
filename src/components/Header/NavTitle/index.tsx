import React from "react"
import styles from "./nav.title.module.css"
interface Props {
    titleName: string
    url: string
}
function Index({ titleName, url }: Props) {
    return (
        <a className={styles["navTitle"]} href={url}>
            {titleName}
        </a>
    )
}

export default Index
