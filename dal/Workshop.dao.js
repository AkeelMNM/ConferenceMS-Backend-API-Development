const workShop = require('./').db('conferenceMT').collection('WorkshopColl');

const save = async ({userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate, proposalStatus, fileLocation}) =>{
    const result = await workShop.insertOne({userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate, proposalStatus, fileLocation});
    return  result.ops[0];
}

const getByUserId = async (userId) =>{
    const courser = await workShop.find({userID:userId});
    return courser.toArray();
}

const getById = async (id) =>{
    return await workShop.findOne({id});
}

const removeById = async (id) =>{
    return await workShop.removeOne({id});
}

const update = async (id ,{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation}) =>{
    const result = await workShop.replaceOne({id},{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation});
    return  result.ops[0];
}

module.exports = {save,getByUserId, getById, removeById, update};