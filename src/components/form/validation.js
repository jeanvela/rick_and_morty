
const validation= (userData,errorsState) => {
    let errors = {...errorsState}
    if (!userData.username) {
        errors.username = "Email no puede estar vacio"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)) {
        errors.username = "Email inavlido"
    } else if (userData.username.length > 35) {
        errors.username = "No puede tener 35 caracteres"
    } else {
        errors.username = ""
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "Password no puede tener menos de 6 caracteres y mas de 10 caracteres"
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/.test(userData.password)) {
        errors.password = "password invalido"
    } else {
        errors.password = ""
    }
    return errors
}


export default validation