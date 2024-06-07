/* eslint-disable react/prop-types */
import style from "./Card.module.css"

export const Card = (props) => {
  return(
      <div className={style.cardItem}>
          <h1>{props.name}</h1>
          <h3>{props.desc}</h3>
          <p>{props.value}</p>
          <p>{props.type}</p>
          {props.status? <p>Status: ✅</p> :<p>Status: ❌</p> }
          <img src={props.image} alt={props.name} width={150} height={"auto"}/>
      </div>
  )
}