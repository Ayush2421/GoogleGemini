
import SideBar from "./SideBar/SideBar"
import Main from "./Main/Main"

export default function GeminiApp(){
    return ( 
      <div className="geminiAppContainer">
      <SideBar/>
      <Main/>
      </div>
    )
  }