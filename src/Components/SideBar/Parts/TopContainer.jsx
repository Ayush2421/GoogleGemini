
import { useContext } from "react";
import { geminiAssets } from "../../../assets/geminiAssets"
import { context } from "../../Context/GeminiContext";
export default function TopContainer({ collapse, setCollapse }) {
    const { historyPrompt, resultCount,recentlengthTab} = useContext(context);

    let start = 0;
    start = (historyPrompt.length < recentlengthTab)? 0: (resultCount) 
    let end = ( historyPrompt.length);

    return (
        <div className="topContainer">
            <img onClick={() => setCollapse((prev) => !prev)} src={geminiAssets.menu_icon} alt="menu" />

            {
                !collapse ?
                    <div className="previewContainer">
                        <label>Recent</label>

                        {
                            historyPrompt.slice(start, end).reverse().map((element, index) => {
                                return (
                                    <div className="messageContainer elements" key={index}>
                                    <img src={geminiAssets.message_icon} alt="message" />
                                    <p> {element.slice(0, 10)+"..."} </p>
                                    </div>)
                            })
                        }

                    </div> : null
            }
        </div>
    )
}