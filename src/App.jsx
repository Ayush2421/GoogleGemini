import Gemini from "./Components/Gemini"
import "./App.css"
import { GeminiContext } from "./Components/Context/GeminiContext"

export default function App(){
  return (
    <>
    <GeminiContext> 
    <Gemini />
    </GeminiContext>
    </>
  )
}