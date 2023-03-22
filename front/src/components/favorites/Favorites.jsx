import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import { filterCards, orderCards } from "../redux/actions"
import style from './Favorites.module.css'

const Favorites = () => {

    const favorites = useSelector(state => state.myFavorites)

    const dispatch = useDispatch()
    
    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={style.container}>
            <div className={style.options}>
                <select onChange={handlerOrder}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="Male">Male</option>
                    <option value="Femele">Femele</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            <div className={style.favorites}>
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
            </div>
        </div>
    )
}

export default Favorites