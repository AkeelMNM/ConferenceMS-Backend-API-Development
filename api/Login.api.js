const {findByEmailAndPassword,findPasswordByEmail} = require('../dal/Login.dao');
const {decrypt} = require("../EncryptionHandler");

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

module.exports = {
    LoginUser
};