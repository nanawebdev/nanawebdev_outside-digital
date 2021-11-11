import { CLOSE_POPUP, OPEN_POPUP } from "../types";

const handlers = {
    DEFAULT: state => state,
    [OPEN_POPUP]: state => ({...state, isOpened: true}),
    [CLOSE_POPUP]: state => ({...state, isOpened: false}),
}

export const popupReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}