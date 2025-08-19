import "./Btns.css"
export default function SettingPage(){
    return (
      <div className="settingPage">
       <h1>Setting</h1>
       <div>
        <input type="radio"/>
        <label>Dark</label>
       </div>
       <div>
        <input type="radio"/>
        <label>Light</label>
       </div>
      </div>
    )
  }