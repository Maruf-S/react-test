import React from "react"
import styles from "./intro.module.css"
import Button from "components/_shared/Button"
function index() {
    return (
        <div
            className={
                "h-[47.8em] bg-[url('src/assets/images/home_background_1.JPG')] bg-cover pt-[1.5em] pb-[3.5em] flex flex-col items-center justify-between"
            }
        >
            <p className={`${styles["motto"]} text-white text-center font-bold leading-normal text-8xl font-['Colby_NrBld']`}>
                Artisan style Pita Chips made <br /> with 100% Coconut Oil
            </p>
            <div className={"flex flex-row justify-center items-center gap-[7.4em]"}>
                <Button title="Find Near Me" />
                <Button title="Shop Online" />
            </div>
        </div>
    )
}

export default index
