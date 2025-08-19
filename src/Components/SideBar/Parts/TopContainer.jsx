
import { useContext } from "react";
import { geminiAssets } from "../../../assets/geminiAssets"
import { context } from "../../Context/GeminiContext";
import { geminiBtn } from "../../Context/GeminiBtnContext";
export default function TopContainer({ collapse, setCollapse }) {
    const { historyPrompt, resultCount,recentlengthTab} = useContext(context);
    const { isDark } = useContext(geminiBtn);

    let start = 0;
    start = (historyPrompt.length < recentlengthTab)? 0: (resultCount) 
    let end = ( historyPrompt.length);

    return (
        <div className="topContainer"  id={isDark ?"darkTopContainer":""}>
            <img onClick={() => setCollapse((prev) => !prev)} src={geminiAssets.menu_icon} alt="menu" />

            {
                !collapse &&
                    <div className="previewContainer">
                        <h4 style={{color: isDark ?"white":"black"}}>History</h4>
                        {
                            historyPrompt.slice(start, end).reverse().map((element, index) => {
                                return (
                                    <div className="messageContainer sideBarElements" id={isDark ?"darkSBElement":""} key={index}>
                                    <img src={geminiAssets.message_icon} alt="message" />
                                    <label> {element.length>10 ? element.slice(0, 10)+"..." : element} </label>
                                    </div>)
                            })
                        }
                    </div> 
            }
        </div>
    )
}