import React from "react"
interface Props {
    titleName: string
    url: string
}
function Index({ titleName, url }: Props) {
    return (
        <a className={"text-stone-primary text-[32px] font-bold font-['Cera_Condensed_Pro'] leading-10 hover:opacity-70"} href={url}>
            {titleName}
        </a>
    )
}

export default Index
