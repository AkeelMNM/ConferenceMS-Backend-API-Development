
const User = require('./').db('conferenceMT').collection('administrationCollection');

const SaveUser = async ({fullName, email, type, password}) => {
    const result = await User.insertOne({fullName, email, type, password});
    return result.ops[0];
};

const findPasswordByEmailInAdmin = async email => {
    const result = await  User.findOne({email:email});
    if(result !== null ){
        return await result.password;
    }else {
        return null;
    }
};

const findByEmailAndPasswordInAdmin = async (email, password) => {
    return await User.findOne({email:email,password:password});
};

module.exports = {
    SaveUser,
    findPasswordByEmailInAdmin,
    findByEmailAndPasswordInAdmin
};