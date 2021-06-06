const {save, getAll, getById, removeById, update} = require('../dal/User.dao');
const {encrypt} = require("../EncryptionHandler");

const createUser = async ({fullName, email, type, password}) => {
    const hashedPassword = encrypt(password);
    const user ={
        fullName,
        email,
        type,
        password: hashedPassword
    }
    return await save(user);
}

const getAllUser = async () => {
    return await getAll();
};

const getUserById = async (id) => {
  return await getById(id);
};

const deleteUser = async (id) => {
    return await removeById(id);
};

const updateUser = async (id, {fullName, email, type, password}) => {
    const hashedPassword = encrypt(password);
    const user ={
        fullName,
        email,
        type,
        password: hashedPassword
    }
    return await update(id,user);
};

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    deleteUser,
    updateUser
};