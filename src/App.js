import './App.css'
import Nav from './components/nav/Nav.jsx'
// import Landing from "./views/Landing.jsx"
import Home from "./views/Home.jsx"
import About from "./views/About.jsx"
import Detail from "./views/Detail.jsx"
import { useState } from 'react'
import { Route, Routes } from "react-router-dom" 

function App () {

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

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App