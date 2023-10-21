import React from "react"
import Header from "../../components/Header"
import Intro from "../../components/Intro"
import Reference from "../../components/Reference"
import styles from "./home.module.css"
function Index() {
    return (
        <div className={styles["container"]}>
            <Header />
            <Intro />
            <Reference />
        </div>
    )
}

export default Index
