
const Users = require('./').db('conferenceMT').collection('userCollection');

const getAll = async ()=> {
    const cursor = await Users.find();
    return cursor.toArray();
};

const getById = async id => {
    return await Users.findOne({id});
};

const removeById =async id => {
    return await Users.deleteOne({id});
};

const update = async (id, {fullName, email, type, password}) => {
    const  result = await Users.replaceOne({id}, {id, fullName, email, type, password});
    return result.ops[0];
};

module.exports = {
    getAll,
    getById,
    removeById,
    update
};