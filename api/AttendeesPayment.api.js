const TicketId = require('uuid')
const {save, getAll, getById, removeById, update} = require('../dal/AttendeesPayment.dao');

const createAttendeesPayment = async ({name, email, payment}) =>{
    let payments = {
        name,
        email,
        payment,
        payDate: new Date().toISOString().slice(0, 10),
        ticketID: TicketId.v4()
    }
    console.log('I am ApI' , payments);
    return await save(payments);
};

const getAllPayment = async () => {
    return await getAll();
};

const getPaymentById = async (id) => {
    return await getById(id);
};

const deletePayment = async(id) =>{
    return await removeById(id);
};

const UpdateAttendeesPayment = async (id, {name, email, payment, ticketID}) =>{
    let payments = {
        name,
        email,
        payment,
        payDate: new Date().toISOString().slice(0, 10),
        ticketID
    }
    return await update(id,payments);
};

module.exports = {
    createAttendeesPayment,
    getAllPayment,
    getPaymentById,
    deletePayment,
    UpdateAttendeesPayment
};