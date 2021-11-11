import React, { useContext, useState } from "react";
import c from './Salary.module.scss';
import { CalculationContext } from "../../context/calc/CalculationContext";

const Salary = ({ title, placeholder }) => {
    const [value, setValue] = useState() 
    const tax = useContext(CalculationContext)

    const calculatePayments = () => {
        const MAX = 260000
        const yearValue = Math.round((Number(value) * 12) * 0.13)
        console.log(yearValue);
        let count = Math.trunc(MAX / yearValue)
        console.log(count);
        const rest = MAX - (yearValue * count)
        const payments = []

        for (let i = 0; i < count; i++) {
            payments.push(yearValue)
        }

        if (rest > 0) {
            payments.push(rest)
        }

        tax.setPayments(payments)
    }

    

    return (
        <div className={c.Salary}>
            <label className={c.Salary__label}>
                {title}
                <input
                    placeholder={placeholder}
                    type="number"
                    className={c.Salary__input}
                    onChange={e => setValue(e.target.value)}
                />
            </label>
            <button
                type="button"
                className={c.Salary__button}
                onClick={() => calculatePayments()}
            >
                Рассчитать
            </button>

        </div>
    )
}

export default Salary