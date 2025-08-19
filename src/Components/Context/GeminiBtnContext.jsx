import { createContext, useState } from "react";
import HelpPage from "../Btns/HelpPage";
import ActivityPage from "../Btns/ActivityPage";
import SettingPage from "../Btns/SettingPage";
import { geminiAssets } from "../../assets/geminiAssets";

export const geminiBtn = createContext()

export default function GeminiBtnContext(props){
    const [whichPageVisible, setWhichPageVisible]= useState(null); 
    const [isDark, setIsDark]= useState(false);
    const [value, setValue]= useState("Light")

    const geminiBtnValue={
        whichPageVisible, setWhichPageVisible,
        isDark, setIsDark,
        value, setValue
    }

    return (
        <geminiBtn.Provider value={geminiBtnValue}>
            {props.children}
        </geminiBtn.Provider>
    )
}

export const sideBarBottomBtns =[
    {
        Name: "Help",
        Id: 0,
        Component: HelpPage,
        Icon: geminiAssets.question_icon
    },
    {
        Name: "Activity",
        Id: 1,
        Component: ActivityPage,
        Icon: geminiAssets.activity_icon

    },
    {
        Name: "Setting",
        Id: 2,
        Component: SettingPage,
        Icon: geminiAssets.setting_icon
    }
]
export const toggleBtns =[
    {
        Name: "Dark",
        Id: 0
    },
    {
        Name: "Light",
        Id: 1
    }
   
]