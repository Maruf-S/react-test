import React from "react"
import Marquee from "react-fast-marquee"
import styles from "./reference.module.css"
import cbc from "assets/images/logos/cbc.svg"
import city_line from "assets/images/logos/city_line.svg"
import ctv_news from "assets/images/logos/ctv_news.svg"
import food_canada from "assets/images/logos/food_canada.svg"
import food_network from "assets/images/logos/food_network.svg"
import trend_hunter from "assets/images/logos/trend_hunter.svg"
import dragons_den from "assets/images/dragons_den.png"
import Play from "assets/images/icons/play.svg?react"
import video_thumbnail_1 from "assets/images/video_thumbnail_1.jpg"
function index() {
    return (
        <div className={styles["container"]}>
            <p className={"text-stone-primary text-center font-['Colby_NrBld'] text-8xl font-bold leading-normal"}>As Seen On</p>
            <Marquee className={styles["marquee"]}>
                <img src={cbc} />
                <img src={city_line} />
                <img src={ctv_news} />
                <img src={food_canada} />
                <img src={food_network} />
                <img src={trend_hunter} />
            </Marquee>
            <div className="flex flex-row gap-9 px-14 justify-between items-center">
                <div className="flex flex-col gap-[50px] justify-between py-5">
                    <div className="text-center text-stone-primary text-[52px] font-bold font-['Cera_Condensed_Pro']">
                        Watch our <br />
                        Dragons’ Den episode
                    </div>
                    <img src={dragons_den} className="w-[400px]" />
                </div>
                <div className="relative h-[544px] rounded-[25px] overflow-clip">
                    <img className="w-full h-full" src={video_thumbnail_1} />
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#D9D9D9]">
                        <Play />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
