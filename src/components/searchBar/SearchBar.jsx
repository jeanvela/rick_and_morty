import React, { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) { // ({onSearch})
   const [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   };

   return (
      <div className={style.divContainer}>
         <input 
            className={style.input} 
            type='search' 
            onChange={handleChange}
         />
         <button 
            className={style.btn} 
            onClick={() => props.onSearch(id)}>
            Agregar
         </button>
         {/* <button className={style.btn} onClick={() => props.onSearch(id)}>Agregar</button> */}
      </div>
   ); 
}
