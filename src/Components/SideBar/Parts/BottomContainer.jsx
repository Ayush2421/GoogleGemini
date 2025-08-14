import {geminiAssets} from "../../../assets/geminiAssets"

export default function BottomContainer() {
    return (
        <div className="bottomContainer">
            <div className="help elements">
            <img src={geminiAssets.question_icon} alt= "help"/>
            <label>Help</label>
            </div>
            <div className="activity elements">
            <img src={geminiAssets.activity_icon} alt= "activity"/>
            <label>Activity</label>
            </div>
            <div className="setting elements">
            <img src={geminiAssets.setting_icon} alt= "setting"/>
            <label>Setting</label>
            </div>
        </div>
    )
}