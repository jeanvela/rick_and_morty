import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import { filterCards, orderCards } from "../redux/actions"

const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites)
//-------------------------------------------------------------------
    const dispatch = useDispatch()
    
    const recive = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const otra = (event) => {
        dispatch(filterCards(event.target.value))
    }

//-------------------------------------------------------------------
    return (
        <>
        //---------------------------------------------------------
        <div>
            <select name="" id="" onChange={recive}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descente</option>
            </select>
            <select name="" id="" onChange={otra}>
                <option value="Male">Male</option>
                <option value="Femele">Femele</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>

        </div>
        //---------------------------------------------------------
            {
                favorites.map(({id,name,species,gender,image}) => {
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        />
                    )
                })
            }
        </>
    )
}

export default Favorites