import React from "react"
import NavTitle from "./NavTitle"
import logo from "assets/images/logo.png"
interface Props {}
function Index({}: Props) {
    return (
        <div
            className={
                "w-full flex items-center justify-center gap-[4.68em] py-[1.56em]"
            }
        >
            <NavTitle titleName="Shop Now" url="#" />
            <NavTitle titleName="Where To Buy" url="#" />
            <img src={logo} alt="logo" className={"w-[10.2em] h-[4.7em]"} />
            <NavTitle titleName="Our story" url="#" />
            <NavTitle titleName="Contact us" url="#" />
        </div>
    )
}

export default Index
