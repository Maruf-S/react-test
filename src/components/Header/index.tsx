import React from "react"
import NavTitle from "./NavTitle"
import styles from "./header.module.css"
import logo from "../../assets/images/logo.png"
interface Props {}
function Index({}: Props) {
    return (
        <div className={styles["header"]}>
            <NavTitle titleName="Shop Now" url="#" />
            <NavTitle titleName="Where To Buy" url="#" />
            <img src={logo} alt="logo" className={styles["logo"]}/>
            <NavTitle titleName="Our story" url="#" />
            <NavTitle titleName="Contact us" url="#" />
        </div>
    )
}

export default Index
