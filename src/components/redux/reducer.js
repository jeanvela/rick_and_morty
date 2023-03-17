import { AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case AGREGAR_PERSONAJE:
        return {
            ...state,
            // myFavorites: [...state.myFavorites,action.payload]
            //----------------------------------------------------
            myFavorites: [...state.allCharacters,action.payload],
            allCharacters: [...state.allCharacters,action.payload]
            //----------------------------------------------------
        }
        case ELIMINAR_PERSONAJE:
        return {
            ...state,
            myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
        }
        //----------------------------------------------------
        case FILTER:
        return {
            ...state,
            allCharacters: state.allCharacters.filter((char) => char.gender === action.payload)
        }
        //----------------------------------------------------
        //----------------------------------------------------
        case ORDER:
        return {
            ...state,
            allCharacters: state.allCharacters.sort((a,b) => {
                if (action.payload === "Ascendente") {
                    return a -b
                } else if (action.payload === "Descendente") {
                    return b -a
                }
            }),
            myFavorites: [...state.allCharacters]
        }
        //----------------------------------------------------
        default:
        return {
            ...state
        }
    }
}

export default rootReducer