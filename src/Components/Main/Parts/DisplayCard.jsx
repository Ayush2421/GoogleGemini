import { useContext, useState } from "react"
import { context, displayCardData } from "../../Context/GeminiContext"
import { geminiBtn } from "../../Context/GeminiBtnContext";

export default function DisplayCard(){
    const [data, _] = useState(displayCardData);
    const { isDark } = useContext(geminiBtn);
    const {setInput } = useContext(context);

    return (
        <div className="displayCard">
             {
                data.map((element)=>{
                   return <div key={element.id} className="card"  id={isDark ?"darkCard":""}
                   onClick={()=>setInput(data[element.id].title)} >
                        <span>{element.title}</span>
                        <img src={element.image} alt={element.id}/>
                    </div>
                })
             }

        </div>
    
    )
}