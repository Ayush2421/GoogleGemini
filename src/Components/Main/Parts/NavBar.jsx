import { useContext } from "react"
import {geminiAssets} from "../../../assets/geminiAssets"
import { geminiBtn } from "../../Context/GeminiBtnContext"
import { context } from "../../Context/GeminiContext"

export default function NavBar(){
    const {setSearchingResult} = useContext(context)
    const {setWhichPageVisible,isDark} = useContext(geminiBtn)
     
    const handleGeminiLogo=()=>{
        setWhichPageVisible(null);
        setSearchingResult(false);
    }
    return (
        <div className="navBar" id={isDark ?"darkNavBar":""}>
            <h1 onClick={handleGeminiLogo}>Gemini</h1>
            <img src={geminiAssets.user_icon} alt="user" onClick={()=>setWhichPageVisible(null)}/>
        </div>
    )
}