import { useContext, useState } from "react"
import { displayCardData } from "../../Context/GeminiContext"
import { geminiBtn } from "../../Context/GeminiBtnContext";

export default function DisplayCard(){
    const [data, _] = useState(displayCardData);
      const { isDark } = useContext(geminiBtn);
    return (
        <div className="displayCard">
             {
                data.map((element, index)=>{
                   return <div key={index} className="card"  id={isDark ?"darkCard":""}>
                        <span>{element.title}</span>
                        <img src={element.image} alt={index}/>
                    </div>
                })
             }

        </div>
    
    )
}