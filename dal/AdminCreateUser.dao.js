
const Users = require('./').db('conferenceMT').collection('administrationCollection');

const SaveUser = async ({id, fullName, email, type, password}) => {
    const result = await Users.insertOne({id, fullName, email, type, password});
    return result.ops[0];
};

module.exports = {
    SaveUser
};