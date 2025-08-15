import "./Main.css"
import {useContext} from "react"
import Contents from "./Parts/Contents"
import NavBar from "./Parts/NavBar"
import FooterItems from "./Parts/FooterItems"
import ShowSearchedResult from "./Parts/ShowSearchedResult"
import { context } from "../Context/GeminiContext"

export default function Main(){
 const {searchingResult} = useContext(context)
    return (
      <div className="main">
        <NavBar/>
        {searchingResult? <ShowSearchedResult />: <Contents /> }
        <FooterItems/>
      </div>
    )
  }