import React from "react"
import SearchBar from "../searchBar/SearchBar"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

function Nav (props) {
    return (
        <div className={style.divContainer}>
            <nav className={style.navbar}>
            <SearchBar 
                onSearch={props.onSearch}
            />
            <Link to="/Home">
                <p>Home</p>
            </Link>
            <Link to="/About">
                <p>About</p>
            </Link>
            </nav>
        </div>
    )
}

export default Nav