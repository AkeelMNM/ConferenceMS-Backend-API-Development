const { save, getById, removeById, update} = require('../dal/Workshop.dao');
const uuid = require('uuid');

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

const addWorkShopPaper = async ({presenterName, workShopTitle, email, affiliation, contactNo, fileLocation}) =>{
    let WorkShop ={
        id:uuid.v4(),
        presenterName,
        workShopTitle,
        email,
        affiliation,
        date: new Date(),
        contactNo,
        fileLocation
    }

    return await save(WorkShop);
}

const getWorkShopById = async ({id}) => {
    return await getById(id);
}

const updateWorkShop = async (id,{presenterName, workShopTitle, email, affiliation, contactNo, fileLocation}) =>{
    return await update(id,{presenterName, workShopTitle, email, affiliation, date:new Date(), contactNo, fileLocation});
}

const removeWorkShopById = async ({id}) => {
    return await removeById(id);
}

module.exports = {
    addWorkShopPaper,
    getWorkShopById,
    updateWorkShop,
    removeWorkShopById
};