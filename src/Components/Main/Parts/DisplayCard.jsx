import { useState } from "react"
import {geminiAssets} from "../../../assets/geminiAssets"

export default function DisplayCard(){
    const store= [
        {
            title: "compass ", 
            image : geminiAssets.bulb_icon
        },
        {
            title: "code",
            image : geminiAssets.code_icon
        },
        {
            title: "bulb",
            image : geminiAssets.bulb_icon
        }

    ]
    const [data, _] = useState(store)

    return (
        <div className="displayCard">
             {
                data.map((element, index)=>{
                   return <div key={index} className="card">
                        <span>{element.title}</span>
                        <img src={element.image} alt={index}/>
                    </div>
                })
             }

        </div>
    
    )
}