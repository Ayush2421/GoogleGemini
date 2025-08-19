import { useContext, useState } from "react"
import "./SideBar.css"
import TopContainer from "./Parts/TopContainer"
import BottomContainer from "./Parts/BottomContainer"
import { geminiBtn } from "../Context/GeminiBtnContext"

export default function SideBar(){
    const [collapse, setCollapse] = useState(true)
    const { isDark } = useContext(geminiBtn);
    return (
      <div className="sideBar"  id={isDark ?"darkSideBar":""}>
       <TopContainer collapse={collapse} setCollapse={setCollapse}/>
       {!collapse ?<BottomContainer />:null}
      </div>
    )
  }