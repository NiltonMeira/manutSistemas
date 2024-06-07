/* eslint-disable react/prop-types */
import style from "./Card.module.css"

export const Rick = (props) => {
    return(
        <div className={style.cardItem}>
            <h1>{props.name}</h1>
            <h3>{props.desc}</h3>
            <p>{props.value}</p>
            <p>{props.type}</p>
        </div>
    )
  }