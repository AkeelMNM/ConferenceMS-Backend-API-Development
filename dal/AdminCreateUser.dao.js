const User = require('./').db('conferenceMT').collection('administrationCollection');
const objectID = require("mongodb").ObjectId;

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

const getByIdInAdminColl = async id => {
    return await User.findOne({_id:objectID(id)});
};

const UpdateAdmin = async (id, {fullName, email, type, password}) => {
    const  result = await User.replaceOne({_id:objectID(id)}, {fullName, email, type, password});
    return result.ops[0];
};


module.exports = {
    SaveUser,
    findPasswordByEmailInAdmin,
    findByEmailAndPasswordInAdmin,
    getByIdInAdminColl,
    UpdateAdmin
};