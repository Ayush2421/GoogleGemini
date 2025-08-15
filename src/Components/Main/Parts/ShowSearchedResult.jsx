import { useContext } from "react";
import { geminiAssets } from "../../../assets/geminiAssets"
import { context } from "../../Context/GeminiContext";

export default function ShowSearchedResult() {
  const { loading, resultData, historyPrompt } = useContext(context);
  return (
    <div className="searchedResult">

      <div className="questionContainer">
        <img src={geminiAssets.gemini_icon} alt="gemini" />
        {historyPrompt.length > 0 && <span>{historyPrompt.slice(-1)}</span>}
      </div>

      <div className="resultContainer">
        {/* <img src={geminiAssets.gemini_icon} alt="gemini" /> */}
        {
          loading ? <h1>Loading......</h1> 
          :<p dangerouslySetInnerHTML={{__html:resultData }}></p>
        }

      </div>

    </div>
  )
}