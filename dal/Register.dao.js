
const Register = require('./').db('conferenceMT').collection('userCollection');

const save = async ({id, fullName, email, type, password}) => {
    const result = await Register.insertOne({id, fullName, email,
        type, password});
    return result.ops[0];
};

module.exports = {
    save
}