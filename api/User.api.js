const {getAll, getById, removeById, update} = require('../dal/User.dao');

const getAllUser = async () => {
    return await getAll();
};

const getUserById = async (id) => {
  return await getById(id);
};

const deleteUser = async (id) => {
    return await removeById(id);
};

const updateUser = async (id, {name, email, type, password}) => {
    const user ={
        name,
        email,
        type,
        password
    }
    return await update(id,user);
};

module.exports = {
    getAllUser,
    getUserById,
    deleteUser,
    updateUser
};