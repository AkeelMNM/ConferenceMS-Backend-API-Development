const workShop = require('./').db('workShop').collection('workShop');

const save = async ({id, presenterName, workShopTitle, email, affiliation, date, contactNo, fileLocation}) =>{
    const result = await workShop.insertOne({id, presenterName, workShopTitle, email, affiliation, date, contactNo, fileLocation});
    return  result.ops[0];
}

const getById = async (id) =>{
    return await workShop.findOne({id});
}

const removeById = async (id) =>{
    return await workShop.removeOne({id});
}

const update = async (id ,{presenterName, workShopTitle, email, affiliation, date, contactNo, fileLocation}) =>{
    const result = await workShop.replaceOne({id},{presenterName, workShopTitle, email, affiliation, date, contactNo, fileLocation});
    return  result.ops[0];
}

module.exports = {save, getById, removeById, update};