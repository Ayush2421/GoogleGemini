import { useContext } from "react"
import { geminiAssets } from "../../../assets/geminiAssets"
import { geminiBtn, sideBarBottomBtns } from "../../Context/GeminiBtnContext"

export default function BottomContainer() {
    const { setWhichPageVisible, isDark } = useContext(geminiBtn)

    const handleBtn = (id) => {
        setWhichPageVisible(id);
    }

    return (
        <div className="bottomContainer">
            {
                sideBarBottomBtns.map((element) =>
                    <div key={element.Id} className="sideBarElements"  id={isDark ?"darkSBElement":""} onClick={() => handleBtn(element.Id)}>
                        <img src={element.Icon} alt={element.Name} />
                        <label>{element.Name}</label>
                    </div>
                )
            }
        </div>
    )
}