const UUID = require('uuid')

const {save} = require('../dal/Register.dao');

const createUser = async ({name, email, type, password}) => {
    const user ={
        id: UUID.v4(),
        name,
        email,
        type,
        password
    }
    return await save(user);
}

module.exports = {
    createUser
};