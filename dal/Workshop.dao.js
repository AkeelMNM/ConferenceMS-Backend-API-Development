const workShop = require('./').db('conferenceMT').collection('WorkshopColl');
const ObjectId = require("mongodb").ObjectId;

const save = async ({userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate, proposalStatus, fileLocation}) =>{
    const result = await workShop.insertOne({userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate, proposalStatus, fileLocation});
    return  result.ops[0];
}

const getAll = async () =>{
    const courser = await workShop.find({});
    return courser.toArray();
}

const getByUserId = async (userId) =>{
    const courser = await workShop.find({userID:userId});
    return courser.toArray();
}

const getById = async (id) =>{
    return await workShop.findOne({_id:ObjectId(id)});
}

const removeById = async (id) =>{
    return await workShop.deleteOne({_id:ObjectId(id)});
}

const update = async (id ,{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation}) =>{
    const result = await workShop.replaceOne({id},{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation});
    return  result.ops[0];
}

module.exports = {save,getAll,getByUserId, getById, removeById, update};