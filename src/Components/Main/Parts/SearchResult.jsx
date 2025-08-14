import { useContext } from "react";
import { geminiAssets } from "../../../assets/geminiAssets"
import { context } from "../../Context/GeminiContext";

export default function SearchResult() {
  const { loading, resultData, historyPrompt } = useContext(context);
  return (
    <div className="searchResult">

      <div className="questionContainer">
        <img className="searchResultImage" src={geminiAssets.user_icon} alt="user" />
        {historyPrompt.length > 0 && <span>{historyPrompt.slice(-1)}</span>}
      </div>

      <div className="resultContainer">
        <img className="searchResultImage" src={geminiAssets.gemini_icon} alt="gemini" />
        {
          loading ? <h1>Loading......</h1> 
          :<p dangerouslySetInnerHTML={{__html:resultData }}></p>
        }

      </div>

    </div>
  )
}