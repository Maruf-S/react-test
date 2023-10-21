import React from "react"
import Header from "../../components/Header"
import Intro from "../../components/Intro"
import styles from "./home.module.css"
function Index() {
    return (
        <div className={styles["container"]}>
            <Header />
            <Intro />
        </div>
    )
}

export default Index
