import './App.css'
import Nav from './components/nav/Nav.jsx'
// import Landing from "./views/Landing.jsx"
import Home from "./views/Home.jsx"
import About from "./views/About.jsx"
import Detail from "./views/Detail.jsx"
import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom"
import Form from './components/form/Form.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Favorites from './components/favorites/Favorites'

function App () {

  const {pathname} = useLocation()

  const navigate = useNavigate()

  const [access, setAccess] = useState(false)

  const username = "jeanvelaarana@email.com"
  // minimo 6 caracteres, maximo 10 caracteres,
  // al menos una letra mayuscula y minuscula, 
  // almenos un digito, almenos un caracter especial 
  // y no espcaios en blanco
  const password = "Kiranana1$"

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    } else {
      alert("usuario incorrecto")
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const [characters,setCharacters] = useState([])

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "b602bc6bb281.f1db9a9024056237f9a0"

    if (characters.find((char) => char.id === id)) return alert("Personaje repetido")

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.name) {
        setCharacters((oldchars) => [...oldchars,data])
        // setCharacters([...characters,data])
      } else {
        alert("personaje no encontrado")
      }
    })
  }
  
  const onClose = (id) => {
    setCharacters(
      characters.filter(char => char.id !== id)
    )
  }
// className='App'
  return (
    
    <div className={pathname === '/' ? 'App2' : 'App'}> 
      <>
      {pathname !=='/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes></>
    </div>
  );
}

export default App