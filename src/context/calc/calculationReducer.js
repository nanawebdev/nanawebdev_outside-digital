import { SET_PAYMENTS, SET_SALARY } from "./../types"

const handlers = {
    [SET_PAYMENTS]: (state, {payload}) => ({...state, payments: payload}),
    [SET_SALARY]: (state, {payload}) => ({...state, monthSalary: payload}),
    DEFAULT: state => state
}

export const calculationReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}