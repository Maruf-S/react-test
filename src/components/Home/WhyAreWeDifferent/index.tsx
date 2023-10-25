import React from "react"
import Marquee from "react-fast-marquee"
import whyAreWeDifferent from "assets/images/home_background_2.jpg"
import img1 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 2.svg"
import img2 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 3.svg"
import img3 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 4.svg"
import img4 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 5.svg"
import img5 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 6.svg"
import img6 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 7.svg"
import img7 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 8.svg"
import img8 from "assets/images/whyAreWeDifferent/71mjlfCSIgS-removebg-preview 9.svg"

function index() {
    return (
        <div className={"h-[1000px] relative"}>
            <img src={whyAreWeDifferent} className={"w-full h-full"} />
            <div className="absolute top-0 pt-8 w-full h-full flex flex-col gap-5 items-center">
                <div className="text-center text-black text-8xl font-bold font-['Colby_NrBld'] leading-[95px]">Why We Are Different</div>
                <Marquee>
                    <img src={img1} className="mr-2" />
                    <img src={img2} className="mr-2" />
                    <img src={img3} className="mr-2" />
                    <img src={img4} className="mr-2" />
                    <img src={img5} className="mr-2" />
                    <img src={img6} className="mr-2" />
                    <img src={img7} className="mr-2" />
                    <img src={img8} className="mr-2" />
                </Marquee>
            </div>
        </div>
    )
}

export default index
