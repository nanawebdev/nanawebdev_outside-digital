import React, { useContext } from "react";
import { CalculationContext } from "../../context/calc/CalculationContext";
import c from './Сalculation.module.scss';
import sprite from './../../svg/sprite.svg';

const Calculation = () => {
  const tax = useContext(CalculationContext)

  const payments = tax.payments

  const setStrEnd = (i) => {
    const strks = ['ый', 'ой', 'ий']
    let digit = i

    if (digit > 9) {
      digit = parseInt(i.toString().split('').pop())
    }

    if (digit === 3) {
      return strks[2]
    }

    if (digit === 1 || digit === 4 || digit === 5 || digit === 9 || digit === 0) {
      return strks[0]
    }

    if (digit === 2 || digit === 6 || digit === 7 || digit === 8) {
      return strks[1]
    }
  }

  const renderValues = (v, i) => {

    return (
      <li key={i} className={c.Calculation__item}>
        <label className={c.Calculation__label}>
          <input type="checkbox" className={c.Calculation__checkbox} />

          <span className={c.Calculation__checkmark}>

            <svg className={c.Calculation__svg} width="20" height="20">
              <use href={sprite + '#checkmark'} />
            </svg>

            <svg className={c.Calculation__disabled} width="20" height="20">
              <use href={sprite + '#checkmark-disabled'} />
            </svg>
          </span>

          <span className={c.Calculation__price}>{v} рублей </span>
          <span className={c.Calculation__year}>в {i + 1}-{setStrEnd(i + 1)} год</span>
        </label>
      </li>
    )
  }

  return (
    <React.Fragment>
      {
        payments.length > 0 && <fieldset className={c.Calculation}>
          <legend className={c.Calculation__legend}>Итого можете внести в качестве досрочных:</legend>

          <ul className={c.Calculation__list}>
            {payments.map((v, i) => renderValues(v, i))}
          </ul>

        </fieldset>
      }
    </React.Fragment>
  )
}

export default Calculation