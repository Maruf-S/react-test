import React from "react"
import styles from "./intro.module.css"
import Button from "../Button"
function index() {
    return (
        <div className={styles["container"]}>
            <p className={styles["motto"]}>
                Artisan style Pita Chips made <br /> with 100% Coconut Oil
            </p>
            <div className={styles["button_row"]}>
                <Button title="Find Near Me" />
                <Button title="Shop Online" />
            </div>
        </div>
    )
}

export default index
