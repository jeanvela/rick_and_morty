import { useState } from "react"
import validation from "./validation"
import style from "./Form.module.css"


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username:"",
        password:"",
    })

    const [errors, setErrors] = useState({
        username:"",
        password:"",
    })

    const handleInputChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setUserData({...userData,[property]: value})
        setErrors(validation({...userData,[property]: value}, errors))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.container}>
                <label htmlFor="username" className={style.label}>Username</label>
                <input 
                    className={style.input}
                    type="text" 
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                />
            </div>
            <p className={style.errors}>{errors.username}</p>
            <div className={style.container}>
                <label htmlFor="password" className={style.label}>Password</label>
                <input 
                    className={style.input}
                    type="text" 
                    name="password" 
                    value={userData.password}
                    onChange={handleInputChange}
                />
            </div>
            <p className={style.errors}>{errors.password}</p>
            <button type="submit" className={style.btn}>Login</button>
        </form>
    )
}

export default Form