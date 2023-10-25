import React from "react"
import cx from "classnames"
// import styles from "./button.module.css"
interface Props {
    title: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    // Customizable style
    style?: React.CSSProperties
    variant?: "primary"
    className?: string
}
function Index({ title, onClick, style = {}, className = "", variant = "primary" }: Props) {
    // Map variant to class
    const variantClass = {
        primary:
            "flex justify-center items-center bg-white shadow rounded-[50px] text-black text-center font-['Colby_NrBld'] text-[52px] font-bold leading-normal transition-all ease-in-out duration-900 hover:bg-black hover:text-white hover:cursor-pointer hover:shadow-lg w-[400px] h-[100px] whitespace-nowrap",
    }
    return (
        <button
            onClick={onClick}
            className={cx({
                [className]: true,
                [variantClass[variant]]: true,
            })}
            style={style}
        >
            {title}
        </button>
    )
}

export default Index
