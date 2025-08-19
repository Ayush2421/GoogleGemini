import GeminiApp from "./Components/GeminiApp"
import "./App.css"
import { GeminiContext } from "./Components/Context/GeminiContext"
import GeminiBtnContext from "./Components/Context/GeminiBtnContext"

export default function App() {
  return (
    <>
      <GeminiContext>
        <GeminiBtnContext>
          <GeminiApp />
        </GeminiBtnContext>
      </GeminiContext>
    </>
  )
}