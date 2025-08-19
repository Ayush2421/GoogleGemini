import "./Main.css"
import { useContext } from "react"
import Contents from "./Parts/Contents"
import NavBar from "./Parts/NavBar"
import FooterItems from "./Parts/FooterItems"
import ShowSearchedResult from "./Parts/ShowSearchedResult"
import { context } from "../Context/GeminiContext"
import { geminiBtn, sideBarBottomBtns } from "../Context/GeminiBtnContext"

export default function Main() {
  const { searchingResult } = useContext(context)
  const { whichPageVisible } = useContext(geminiBtn);
  const ActiveComponents = sideBarBottomBtns[whichPageVisible] && sideBarBottomBtns[whichPageVisible].Component;

  return (
    <div className="main">
      <NavBar />
      {
        (whichPageVisible !== null) ? <ActiveComponents />
          : <>{searchingResult ? <ShowSearchedResult /> : <Contents />}
            <FooterItems />
          </>
      }
    </div>
  )
}

