import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) { //({name,species,gender,image,onClose})
   return (
      <div className={style.divContainer}>
         <button 
            className={style.btn} 
            onClick={() => props.onClose(props.id)}>
            X
         </button>
         <img className={style.imagen} src={props.image} alt="" />
         <Link to={`/detail/${props.id}`}>
            <h2>Name: {props.name}</h2>
         </Link>
         
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
      </div>
   );
}
