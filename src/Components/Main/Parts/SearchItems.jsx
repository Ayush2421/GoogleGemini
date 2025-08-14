import { useContext } from "react"
import {geminiAssets} from "../../../assets/geminiAssets"
import { context } from "../../Context/GeminiContext"

export default function SearchItems(){
    const {input, setInput, setLoading, setSearchingResult, setSetResultCount, 
    historyPrompt, setHistoryPrompt,recentlengthTab,setResultData, onSent } = useContext(context);
    const handleSentBtn=()=>{
        onSent(input)
        setInput("");
        setResultData("")
        setSetResultCount((prev)=> (historyPrompt.length > recentlengthTab ) && prev+ 1);
        setLoading(true);
        setSearchingResult(true);
        setHistoryPrompt((prev)=> [...prev, input]);
    }
   
      return (
        <div className="searchItems" onKeyDown={(e)=> e.key==="Enter" && handleSentBtn()}>
            <div className="inputField">
            <input onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Enter any prompt"/>
            <img src={geminiAssets.gallery_icon} alt="gallery"/>
            <img src={geminiAssets.mic_icon} alt="mic"/>
            <img onClick={handleSentBtn} src={geminiAssets.send_icon} alt="send"/>
            </div>
            <p className="textBelowInput">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            ipsum iste enim natus laudantium veniam.</p>
            
        </div>
    )
}