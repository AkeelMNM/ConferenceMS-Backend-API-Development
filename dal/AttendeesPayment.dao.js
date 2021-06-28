
const PaymentColl = require('./').db('conferenceMT').collection('attendeesPaymentCollection');

const save = async ({userID, name, email, payment, payDate, ticketID}) => {
    const result = await PaymentColl.insertOne({userID, name, email, payment, payDate, ticketID});
    return result.ops[0];
};

const getAll = async () => {
    const cursor = await PaymentColl.find();
    return cursor.toArray();
};

const getById = async (id) => {
    return await PaymentColl.findOne({id});
};

const removeById = async () => {
    return await PaymentColl.deleteOne({id});
};

const update = async (id, {userID, name, email, payment, payDate, ticketID}) => {
    const result = await PaymentColl.replaceOne({id} , {id, userID, name, email, payment, payDate, ticketID });
    return result.ops[0];
};

module.exports = {
    save,
    getAll,
    getById,
    removeById,
    update
};