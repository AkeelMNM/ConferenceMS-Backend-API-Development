
const Users = require('./').db('conferenceMT').collection('userCollection');
const Admin = require('./').db('conferenceMT').collection('administrationCollection');
const objectID = require("mongodb").ObjectId;

const findPasswordByEmail = async email => {
    const result = await  Users.findOne({email:email});
    return await result.password;
}

const findByEmailAndPassword = async (email, password) => {
    return await Users.findOne({email:email,password:password});
};

module.exports = {
    findPasswordByEmail,
    findByEmailAndPassword
};