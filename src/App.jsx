import GeminiApp from "./Components/GeminiApp"
import "./App.css"
import { GeminiContext } from "./Components/Context/GeminiContext"

export default function App(){
  return (
    <>
    <GeminiContext> 
    <GeminiApp />
    </GeminiContext>
    </>
  )
}