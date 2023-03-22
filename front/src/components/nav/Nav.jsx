import React from "react"
import SearchBar from "../searchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

function Nav (props) {
    return (
        <nav className={style.navbar}>
            <Link to="/Home" className={style.link}>
                <p>Home</p>
            </Link>
            <Link to="/About" className={style.link}>
                <p>About</p>
            </Link>
            <Link to="/favorites" className={style.link}>
                <p>Favorites</p>
            </Link>
            <SearchBar 
                onSearch={props.onSearch}
            />
        </nav>
    )
}

export default Nav