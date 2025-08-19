import { useContext, useState } from "react"
import { geminiBtn, toggleBtns } from "../Context/GeminiBtnContext"
import "./Btns.css"
export default function SettingPage(){
  const {setIsDark, value, setValue } = useContext(geminiBtn)

  const handleRadioBtn=(evt)=>{
    const {name} = evt.target;
    setValue(name);
    (name=== "Dark")?setIsDark(true)
    :setIsDark(false);

  }
    return (
      <div className="settingPage">
       <h1>Setting</h1>
        {
          toggleBtns.map((element)=>
            <div key={element.Id}>
            <input type="radio" name={element.Name} onChange={handleRadioBtn} checked={value=== element.Name} />
            <label>{element.Name}</label>
            </div>
          )
        }
      </div>
    )
  }