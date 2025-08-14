import "./Main.css"
import {useContext} from "react"
import Contents from "./Parts/Contents"
import NavBar from "./Parts/NavBar"
import SearchItems from "./Parts/SearchItems"
import SearchResult from "./Parts/SearchResult"
import { context } from "../Context/GeminiContext"

export default function Main(){
 const {searchingResult} = useContext(context)
    return (
      <div className="Main">
        <NavBar/>
        {searchingResult? <SearchResult />: <Contents /> }
        <SearchItems/>
      </div>
    )
  }