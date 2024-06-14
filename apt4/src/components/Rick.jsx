/* eslint-disable react/prop-types */
import style from "./Card.module.css"

export const Rick = ({name,species,gender, image,status}) => {
    return(
        <div className={style.cardItem}>
            <h1>{name}</h1>
            <h3>{species}</h3>
            <p>{gender}</p> 
            {status=="Alive"? <p>Status: ✅</p> :<p>Status: ❌</p> }
            <img src={image} alt="{name}" height={"auto"} />
            
            

            
        </div>
    )
}