import React from "react";
import style from './progress.module.css'

const Progress = ({skill}) => {
    const strokeDasharray = 250
    const setProgress = () => {
        return strokeDasharray * (100 - skill.percent)/ 100
    }
    return <>
        <div className={style.skillRow}>
            <svg viewBox="0 0 100 100" className={style.skillShape}>
                <linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="gold"/>
                    <stop offset="100%" stopColor="teal"/>
                </linearGradient>
                <circle cx="50" cy="50" r="40" className={style.skillCircleAbove}>
                </circle>
                <circle cx="50" cy="50" r="40" transform="rotate(180 50 50)"
                        className={style.skillCircleUnder}
                        stroke="url(#linear-gradient)"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={setProgress()}
                >
                </circle>
            </svg>
            <div className={style.skillTitle}>{skill.name}</div>
        </div>
    </>
}

export default Progress