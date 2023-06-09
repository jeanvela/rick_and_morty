import { AGREGAR_PERSONAJE, ELIMINAR_PERSONAJE, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {}
}

const rootReducer = (state = initialState,action) => {
    switch (action.type) {
        case AGREGAR_PERSONAJE:
        return {
            ...state,
            // myFavorites: [...state.allCharacters,action.payload],
            // allCharacters: [...state.allCharacters,action.payload]
            myFavorites: action.payload,
            allCharacters: action.payload,
            errors: {}
        }
        case ELIMINAR_PERSONAJE:
        return {
            ...state,
            // myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            myFavorites: action.payload,
            errors: {}
        }
        case FILTER:
            const allCharactersFilter = state.allCharacters.filter((char) => char.gender === action.payload)
        return {
            ...state,
            myFavorites: allCharactersFilter
        }
        case ORDER:
        return {
            ...state,
            myFavorites: action.payload === "Ascendente" ? state.allCharacters.sort((a,b) => a.id - b.id) : state.allCharacters.sort((a,b) => b.id -  a.id)
        }
        case 'GET_FAVs':
        return {
            ...state,
            myFavorites: action.payload,
            errors: {}
        }
        case 'ERROR':
        return {
            ...state,
            errors: action.payload
        }
        default:
        return {
            ...state
        }
    }
}

export default rootReducer