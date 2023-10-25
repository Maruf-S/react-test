import React from "react"
import Header from "components/_shared/Header"
import Intro from "components/Home/Intro"
import Reference from "../../components/Home/Reference"
import WhyAreWeDifferent from "components/Home/WhyAreWeDifferent"
function Index() {
    return (
        <div className={"w-full flex flex-col overflow-x-hidden"}>
            <Header />
            <Intro />
            <Reference />
            <WhyAreWeDifferent />
        </div>
    )
}

export default Index
