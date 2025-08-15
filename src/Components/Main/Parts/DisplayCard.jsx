import { useState } from "react"
import { displayCardData } from "../../Context/GeminiContext"

export default function DisplayCard(){
    const [data, _] = useState(displayCardData);
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