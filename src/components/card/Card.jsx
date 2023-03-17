import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { agregarPersonaje, eliminarPersonaje } from "../redux/actions";
import { useState } from "react";
import { useEffect } from "react";

function Card({id,name,species,gender,image,onClose,agregarPersonaje,eliminarPersonaje,myFavorites}) { 

   const [isFav,setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         eliminarPersonaje(id)
      } else {
         setIsFav(true)
         agregarPersonaje({
            id,
            name,
            species,
            gender,
            image,
            onClose,
            agregarPersonaje,
            eliminarPersonaje
         })
      }
   }
   // myFavorites viene del estado global, recorre todo y se fija
   // si la card que tenemos montada esta dentro de el array de myFavorite.
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.divContainer}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button 
            className={style.btn} 
            onClick={() => onClose(id)}>
            X
         </button>
         <img className={style.imagen} src={image} alt="" />
         <Link to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      agregarPersonaje: (personaje) => {dispatch(agregarPersonaje(personaje))},
      eliminarPersonaje: (id) => {dispatch(eliminarPersonaje(id))}
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)