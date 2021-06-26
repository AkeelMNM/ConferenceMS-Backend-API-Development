const {save, getAll, getById, removeById, update, findByEmailAndPassword,findPasswordByEmail} = require('../dal/User.dao');
const {encrypt, decrypt} = require("../EncryptionHandler");

const LoginUser = async (email, password) => {
    const Password = await findPasswordByEmail(email);
    console.log('DB password',Password);
    if (Password !== ''){
        const decryptPassword = decrypt(Password);
        console.log('decrypt password',decryptPassword);
        if(decryptPassword === password) {
            return await findByEmailAndPassword(email, Password);
        }
    }

};

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
    LoginUser,
    createUser,
    getAllUser,
    getUserById,
    deleteUser,
    updateUser
};