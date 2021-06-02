const workShop = require('./').db('conferenceMT').collection('WorkshopColl');

const save = async ({userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation}) =>{
    const result = await workShop.insertOne({userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation});
    return  result.ops[0];
}

const getById = async (userId) =>{
    return await workShop.find({userID:userId});
}

const removeById = async (id) =>{
    return await workShop.removeOne({id});
}

const update = async (id ,{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation}) =>{
    const result = await workShop.replaceOne({id},{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation});
    return  result.ops[0];
}

module.exports = {save, getById, removeById, update};