import React from 'react'
import './Acordian.css'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const Acordian = ({title, active, setActive, ans}) => {
    return (
        <div className="acordian">
            <div className="acordianHeading">
                <div className="container" onClick={() => setActive(title)}>
                    <p>{title}</p>
                    <span>
                        {(active === title ? <BsArrowUp/> : <BsArrowDown/>)}
                    </span>
                </div>
            </div>
            <div className={(active === title ? "show" : "") + "acordianContent"}>
                <div className="container">
                    <p>{ans}</p>
                </div>
            </div>
        </div>
    )
}

export  {Acordian}
