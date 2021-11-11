import React from "react";
import c from './Decrease.module.scss';

const Decrease = () => {
    return (
        <fieldset className={c.Decrease}>
            <legend className={c.Decrease__legend}>Что уменьшаем?</legend>
            <p className={c.Decrease__text}>Что уменьшаем?</p>

            <div className={c.Decrease__labels}>
                <label htmlFor="payment" className={c.Decrease__label}>
                    <input type="radio" id="payment" name="decrease" className={c.Decrease__input} />
                    <span className={c.Decrease__body}>Платеж</span>
                </label>

                <label htmlFor="timing" className={c.Decrease__label}>
                    <input type="radio" id="timing" name="decrease" className={c.Decrease__input} />
                    <span className={c.Decrease__body}>Срок</span>
                </label>
            </div>


        </fieldset>
    )
}

export default Decrease
