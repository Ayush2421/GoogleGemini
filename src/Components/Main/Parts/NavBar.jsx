import {geminiAssets} from "../../../assets/geminiAssets"

export default function NavBar(){
    return (
        <div className="navBar">
            <h1>Gemini</h1>
            <img src={geminiAssets.user_icon} alt="user"/>
        </div>
    )
}