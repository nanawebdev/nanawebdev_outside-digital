import React, { useReducer } from "react";
import { CLOSE_POPUP, OPEN_POPUP } from "../types";
import { PopupContext } from "./PopupContext";
import { popupReducer } from "./popupReducer";

const PopupState = ({ children }) => {
    const initialState = {
        isOpened: false
    }

    const [state, dispatch] = useReducer(popupReducer, initialState)

    const openPopup = () => dispatch({ type: OPEN_POPUP})
    const closePopup = () => dispatch({ type: CLOSE_POPUP})

    const { isOpened } = state
    return (
        <PopupContext.Provider value={{ isOpened, openPopup, closePopup }}>
            {children}
        </PopupContext.Provider>
    )
}

export default PopupState