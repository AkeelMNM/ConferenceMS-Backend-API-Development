const { save, getById, removeById, update} = require('../dal/Workshop.dao');

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

const addWorkShopPaper = async ({userID, presenterName, workShopTitle, email, affiliation,contactNumber,fileLocation}) =>{
    let WorkShop ={
        userID,
        presenterName,
        workShopTitle,
        email,
        affiliation,
        contactNumber,
        date: new Date(),
        proposalStatus:"pending",
        fileLocation
    }

    return await save(WorkShop);
}

const getWorkShopById = async ({userID}) => {
    return await getById(userID);
}

const updateWorkShop = async (id,{userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate,proposalStatus, fileLocation}) =>{
    return await update(id,
        {
            userID, presenterName, workShopTitle, email, affiliation,contactNumber, submittedDate:new Date(),proposalStatus, fileLocation
        });
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