const {save, getAll, getById, removeById, update, findByEmailAndPassword,findPasswordByEmail} = require('../dal/User.dao');
const {findPasswordByEmailInAdmin, findByEmailAndPasswordInAdmin} = require('../dal/AdminCreateUser.dao');
const {encrypt, decrypt} = require("../EncryptionHandler");

const LoginUser = async (email, password) => {
    const UserPassword = await findPasswordByEmail(email);
    const AdminPassword = await findPasswordByEmailInAdmin(email);

    if(UserPassword !== null && AdminPassword === null){
        const decryptPassword = decrypt(UserPassword);
        if(decryptPassword === password) {
            return await findByEmailAndPassword(email, UserPassword);
        }
        else {
            console.log('Invalid Password');
        }
    }else if(UserPassword === null && AdminPassword !== null){
        const decryptPassword = decrypt(AdminPassword);
        if(decryptPassword === password) {
            return await findByEmailAndPasswordInAdmin(email, AdminPassword);
        }
        else {
            console.log('Invalid Password');
        }
    }
    else{
        console.log('No data');
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