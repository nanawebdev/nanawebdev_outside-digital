import React, { useReducer } from "react";
import { CalculationContext } from "./CalculationContext";
import { calculationReducer } from "./calculationReducer";
import { SET_PAYMENTS, SET_SALARY } from "./../types";


const CalculateState = ({ children }) => {

    const initialState = {
        payments: [],
        monthSalary: 0,
    }

    const [state, dispatch] = useReducer(calculationReducer, initialState)

    const setPayments = (payments) => dispatch({type: SET_PAYMENTS, payload: payments})
    const setSalary = (salary) => dispatch({type: SET_SALARY, payload: salary})

    const {payments, monthSalary} = state
      
    return (
     <CalculationContext.Provider value={{
        setPayments, setSalary, 
         payments, monthSalary}}
        >
         {children}
    </CalculationContext.Provider>
    )
}

export default CalculateState