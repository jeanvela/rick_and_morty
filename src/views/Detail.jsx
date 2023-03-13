import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"

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

  // useEffect(() => {
  //   const URL_BASE = "https://be-a-rym.up.railway.app/api"
  //   const KEY = "b602bc6bb281.f1db9a9024056237f9a0"
  //   fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
  //   .then((response) => response.json())
  //   .then((char) => {
  //     if (char.name) {
  //       setCharacter(char);
  //     } else {
  //       window.alert("No hay personajes con ese ID");
  //     }
  //   })
  //   .catch((err) => {
  //    window.alert("No hay personajes con ese ID");
  //   });
  //   return setCharacter({});
  // }, []);

  return (
      <div>
          {character.name ? (
              <div>
                  <h1>{character.name}</h1>
                  <h2>{character.status}</h2>
                  <h2>{character.species}</h2>
                  <h2>{character.gender}</h2>
                  <h2>{character.origin.name}</h2>
                  <img src={character.image} alt="" />
              </div>
          ) : (
              <h3>loading</h3>
          )}
      </div>
  )
}

export default Detail