import { createContext, useState } from "react";
import GeminiConfig from "../config/GeminiConfig";
import { geminiAssets } from "../../assets/geminiAssets";

export const context = createContext();
export const displayCardData= [
    {
        title: "Explore the world to explore yourself.", 
        image : geminiAssets.compass_icon
    },
    {
        title: "Make the code easier to read.",
        image : geminiAssets.code_icon
    },
    {
        title: "Align with societal needs, safety & beauty",
        image : geminiAssets.bulb_icon
    }
]

export const GeminiContext = (props) => {
    const recentlengthTab = 4;
    const [input, setInput]= useState("");
    const [historyPrompt, setHistoryPrompt] =useState([]);
    const [searchingResult, setSearchingResult]= useState(false);
    const [resultData, setResultData]= useState("");
    const [resultCount, setSetResultCount]= useState(0); //to show 5 data in sideBar
    const [loading, setLoading]= useState(false);

    const showDelayInWord = ((index, word)=>{
        setTimeout(() => {
            setResultData((prev)=> prev + word);
        }, 25 * index);
    })

    async function onSent(prompt){
       let result =  await GeminiConfig(prompt)
       if(result.length>0){
        setLoading(false);
        let removeDoubleStar = result.split("**").map((e, index)=>
            (index %2 ===1) ? ("<b>"+e+"</b>"): e
        )
        result = removeDoubleStar.join("").split("*").join("</br>");
        result.split("").forEach((e, i)=>{
            showDelayInWord(i, e)
        })
       }
    }

    // onSent("what is jsx");
    const contextValue = {
        input, setInput,
        searchingResult, setSearchingResult,
        resultData, setResultData,
        resultCount, setSetResultCount,
        loading, setLoading,
        historyPrompt, setHistoryPrompt,
        recentlengthTab ,onSent

    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>

    )
}

