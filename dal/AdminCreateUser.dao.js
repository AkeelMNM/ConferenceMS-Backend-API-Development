
const Users = require('./').db('conferenceMT').collection('administrationCollection');

const SaveUser = async ({fullName, email, type, password}) => {
    const result = await Users.insertOne({fullName, email, type, password});
    return result.ops[0];
};

module.exports = {
    SaveUser
};