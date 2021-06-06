const {SaveUser} = require('../dal/AdminCreateUser.dao');

const adminCreateUser = async ({fullName, email, type, password}) => {
    const user = {
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