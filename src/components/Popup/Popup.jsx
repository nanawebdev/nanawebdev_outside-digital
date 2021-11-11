import React, { useContext } from "react";

import c from './Popup.module.scss';
import sprite from './../../svg/sprite.svg';
import Form from "../Form/Form";
import { PopupContext } from "../../context/pop/PopupContext";

const Popup = () => {
    const popup = useContext(PopupContext)
    let visible = 'none'

    if (popup.isOpened) {
        visible = 'block'
    }

    return (
        <div className={c.Popup} style={{ display: visible }}>
            <div className={c.Popup__popup}>
                <button
                    type="button"
                    className={c.Popup__button}
                    onClick={() => popup.closePopup()}
                >
                    <svg className={c.Popup__cross} width="40" height="40">
                        <use href={sprite + '#cross'} />
                    </svg>
                </button>

                <Form />
            </div>
        </div>
    )
}

export default Popup