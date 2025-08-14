import { useState } from "react"
import "./SideBar.css"
import TopContainer from "./Parts/TopContainer"
import BottomContainer from "./Parts/BottomContainer"

export default function SideBar(){
    const [collapse, setCollapse] = useState(true)
    return (
      <div className="sideBar">
       <TopContainer collapse={collapse} setCollapse={setCollapse}/>
       {!collapse ?<BottomContainer />:null}
      </div>
    )
  }