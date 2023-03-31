import axios from 'axios';
export const AGREGAR_PERSONAJE = "AGREGAR_PERSONAJE"
export const ELIMINAR_PERSONAJE = "ELIMINAR_PERSONAJE"
export const FILTER = "FILTER"
export const ORDER = "ORDER"

export const agregarPersonaje = (personaje) => {
    return async (dispacth) => {
        try {
            const response =await axios.post('http://localhost:3001/rickandmorty/fav',personaje)
            return dispacth({
                type: AGREGAR_PERSONAJE,
                payload: response.data
            })
        } catch (error) {
            return dispacth({
                type: 'ERROR',
                payload: error
            })
        }
    }
}

export const eliminarPersonaje = (id) => {
    return async (dispacth) => {
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            const data = response.data
            return dispacth({
                type: ELIMINAR_PERSONAJE,
                payload: data
            })
        } catch (error) {
            return dispacth({
                type: 'ERROR',
                payload: error
            })
        }
    }
}

export const getFavorites = () => {
    return async (dispacth) => {
        try {
            const response = await axios.get('http://localhost:3001/rickandmorty/fav')
            return dispacth({
                type: 'GET_FAVS',
                payload: response.data
            })
        } catch (error) {
            return dispacth({
                type: 'ERROR',
                payload: error
            })
        }
    }
}

export const filterCards = (gender) => {
    return {type:FILTER, payload:gender}
}

export const orderCards = (id) => {
    return {type:ORDER,payload:id}
}