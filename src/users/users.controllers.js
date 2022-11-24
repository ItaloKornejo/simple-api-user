const moment = require('moment')

let usersDB = []
let id = 1

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const filteredUser = usersDB.find(user => user.id == id)
    return filteredUser
}

const deleteUser = (id) => {
    const removeUser = usersDB.find(user => user.id == id)
    usersDB = usersDB.filter(user => user.id !== parseInt(id))
    return removeUser
    
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++, 
        first_name: obj.user_name ? obj.user_name : 'John', 
        last_name: obj.last_name ? obj.last_name : 'Doe', 
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || '06/06/1944' 
    }
    usersDB.push(newUser)
    return newUser
}

const modifyUser = (id,data) => {
    const {first_name,last_name} = data
    const indexUser = usersDB.indexOf(usersDB.find(item => item.id==id))
    usersDB[indexUser].first_name=first_name
    usersDB[indexUser].last_name=last_name
    return usersDB[indexUser]
}

const validateEmail = (email) => {
    const checkEmail = /\S+@\S+\.\S+/
    console.log(checkEmail.test(email))
    return checkEmail.test(email)
}

const validateDate = (birthday) => {
    
    const dateFormat = 'YYYY/MM/DD';
    const toDateFormat = moment(new Date(birthday)).format(dateFormat);
    return toDateFormat <= moment().format(dateFormat)
}

module.exports = {
    findAllUsers,
    findUserById,
    deleteUser,
    createNewUser,
    modifyUser,
    validateEmail,
    validateDate

}
