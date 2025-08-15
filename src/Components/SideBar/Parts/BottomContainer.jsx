import {geminiAssets} from "../../../assets/geminiAssets"

export default function BottomContainer() {
    return (
        <div className="bottomContainer">
            <div className="help sideBarElements">
            <img src={geminiAssets.question_icon} alt= "help"/>
            <label>Help</label>
            </div>
            <div className="activity sideBarElements">
            <img src={geminiAssets.activity_icon} alt= "activity"/>
            <label>Activity</label>
            </div>
            <div className="setting sideBarElements">
            <img src={geminiAssets.setting_icon} alt= "setting"/>
            <label>Setting</label>
            </div>
        </div>
    )
}