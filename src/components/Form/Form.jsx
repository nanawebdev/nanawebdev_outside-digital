import React from "react";
import c from './Form.module.scss';
import Button from "../Button/Button";
import Decrease from "../Decrease/Decrease";
import Salary from "../Salary/Salary";
import Calculation from "../Сalculation/Сalculation";

const Form = () => {
    return (
        <form className={`c.Form flex`}>
            <div className="content">
                <h1 className={c.Form__title}>Налоговый вычет</h1>
                <p className={c.Form__text}>Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                    Размер налогового вычета составляет не&nbsp;более 13% от своего официального годового дохода.</p>

                <Salary title="Ваша зарплата в месяц" placeholder="Введите данные" />
                <Calculation />
                <Decrease />
            </div>

            <div className="bottom">
                <Button title="Добавить" />
            </div>

        </form>
    )
}

export default Form