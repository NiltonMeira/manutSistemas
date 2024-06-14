import style from "./Card.module.css"

export const Alert = () =>{
    return (
        <div className={style.card}> 
             <h1>Not found</h1>
             <p>Personagem não encontrado :/</p>
        </div>
    )
}