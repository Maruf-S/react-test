import React from "react"
import Marquee from "react-fast-marquee"
import styles from "./reference.module.css"
import cbc from "../../assets/images/logos/cbc.svg"
import city_line from "../../assets/images/logos/city_line.svg"
import ctv_news from "../../assets/images/logos/ctv_news.svg"
import food_canada from "../../assets/images/logos/food_canada.svg"
import food_network from "../../assets/images/logos/food_network.svg"
import trend_hunter from "../../assets/images/logos/trend_hunter.svg"
function index() {
    return (
        <div className={styles["container"]}>
            <p className={styles["seen_on"]}>As Seen On</p>
            <Marquee className={styles["marquee"]}>
                <img src={cbc} />
                <img src={city_line} />
                <img src={ctv_news} />
                <img src={food_canada} />
                <img src={food_network} />
                <img src={trend_hunter} />
            </Marquee>
        </div>
    )
}

export default index
