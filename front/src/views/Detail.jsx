import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
import style from './Detail.module.css'

const Detail = () => {

  const { id } = useParams()

  const [character,setCharacter] = useState({})

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "b602bc6bb281.f1db9a9024056237f9a0"

    axios(`${URL_BASE}/character/${id}?key=${KEY}`).then((response) =>
      setCharacter(response.data)
    )
  },[id])

  return (
      <div className={style.container}>
        <div className={style.containerBtn}>
          <NavLink to="/home" >
            <button className={style.btn}>Volver</button>
          </NavLink>
        </div>
          {character.name ? (
              <div className={style.containerChar}>
                <div>
                  <h1>Nombre: {character.name}</h1>
                  <h2>Estado: {character.status}</h2>
                  <h2>Especie: {character.species}</h2>
                  <h2>Genero: {character.gender}</h2>
                  <h2>Origen:{character.origin.name}</h2>
                </div>
                <div>
                  <img src={character.image} alt="" />
                </div>
              </div>
          ) : (
              <h3>loading</h3>
          )}
      </div>
  )
}

export default Detail