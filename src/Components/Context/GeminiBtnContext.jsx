import { createContext, useState } from "react";
import HelpPage from "../Btns/HelpPage";
import ActivityPage from "../Btns/ActivityPage";
import SettingPage from "../Btns/SettingPage";

export const geminiBtn = createContext()

export default function GeminiBtnContext(props){
    const [whichPageVisible, setWhichPageVisible]= useState(null);

    const geminiBtnValue={
        whichPageVisible, setWhichPageVisible,
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
        Component: HelpPage
    },
    {
        Name: "Activity",
        Id: 1,
        Component: ActivityPage
    },
    {
        Name: "Setting",
        Id: 2,
        Component: SettingPage
    }
]