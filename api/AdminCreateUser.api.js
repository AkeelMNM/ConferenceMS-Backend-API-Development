const UUID = require('uuid')

const {SaveUser} = require('../dal/AdminCreateUser.dao');

const adminCreateUser = async ({fullName, email, type, password}) => {
    const user = {
        id:UUID.v4(),
        fullName,
        email,
        type,
        password
    }
    return await SaveUser(user);
};

module.exports = {
    adminCreateUser
};