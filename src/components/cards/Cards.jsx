import Card from "../card/Card";
import style from "./Cards.module.css"

export default function Cards({characters, onClose}) { // ({characters})
   // const { characters } = props; // comentado
   return (
      <div className={style.divContainer}>
         {
            characters.map(({id,name,species,gender,image}) => { // (character)
               return (
                  <Card
                  id = {id} 
                  name = {name}  // {character.name}
                  species = {species}
                  gender = {gender}
                  image = {image}
                  onClose = {onClose}
                  />
               )
            })
         }
      </div>
   )
}
