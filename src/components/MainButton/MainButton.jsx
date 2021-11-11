import React, { useContext } from "react";
import { PopupContext } from "../../context/pop/PopupContext";
import c from "./MainButton.module.scss";

const MainButton = () => {
    const popup = useContext(PopupContext)

    // const cls = [
    //     c.MainButton,
    // ]

    // if (popup.isOpened) {
    //     cls.push(c.MainButton__grey)
    // } 

    return (
        <div className={c.MainButton}>
            <button
                type="button"
                className={c.MainButton__button}
                onClick={() => {
                    popup.openPopup()
                }}
            >
                Налоговый вычет
            </button>
        </div>
    )
}

export default MainButton