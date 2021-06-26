
const Users = require('./').db('conferenceMT').collection('userCollection');
const objectID = require("mongodb").ObjectId;

const save = async ({fullName, email, type, password}) => {
    const result = await Users.insertOne({fullName, email,
        type, password});
    return result.ops[0];
};

const getAll = async ()=> {
    const cursor = await Users.find();
    return cursor.toArray();
};

const getById = async id => {
    return await Users.findOne({_id:objectID(id)});
};

const removeById =async id => {
    return await Users.deleteOne({_id:objectID(id)});
};

const update = async (id, {fullName, email, type, password}) => {
    const  result = await Users.replaceOne({id}, {id, fullName, email, type, password});
    return result.ops[0];
};

const findPasswordByEmail = async email => {
    const result = await  Users.findOne({email:email});
    return await result.password;
}

const findByEmailAndPassword = async (email, password) => {
    return await Users.findOne({email:email,password:password});
};

module.exports = {
    save,
    getAll,
    getById,
    removeById,
    update,
    findPasswordByEmail,
    findByEmailAndPassword
};