import React from "react";
import c from './Button.module.scss';

const Button = ({title}) => {
    return (
        <button className={c.Button}>{title}</button>
    )
}

export default Button