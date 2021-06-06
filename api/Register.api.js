const UUID = require('uuid')

const {save} = require('../dal/Register.dao');

const createUser = async ({fullName, email, type, password}) => {
    const user ={
        fullName,
        email,
        type,
        password
    }
    return await save(user);
}

module.exports = {
    createUser
};