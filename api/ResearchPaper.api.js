const { save, getAll, getByUserId,getById, removeById, update} = require('../dal/ResearchPaper.dao');

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

const addResearchPaper = async ({userID,authorName, paperTitle, email,researchPFileLocation}) =>{
    let ResearchPaper ={
        userID,
        authorName,
        paperTitle,
        email,
        submittedDate: new Date().toISOString().slice(0, 10),
        researchPFileLocation,
        submissionStatus:"pending",
        payment:0,
        paymentStatus:"Not Available"
    }
    return await save(ResearchPaper);
}

const getAllResearchPaper = async () => {
    return await getAll();
}

const getResearchPaperByUserId = async (userID) => {
    return await getByUserId(userID);
}

const getResearchPaperById = async (id) => {
    return await getById(id);
}

const updateResearchPaper = async (id,{userID,authorName, paperTitle, email,researchPFileLocation,submissionStatus,payment,paymentStatus}) =>{
    return await update(id,
        {
            userID,authorName,
            paperTitle,
            email,
            submittedDate:new Date().toISOString().slice(0, 10),
            researchPFileLocation,
            submissionStatus,
            payment,
            paymentStatus
        });
}

const removeResearchPaperById = async ({id}) => {
    return await removeById(id);
}

module.exports = {
    addResearchPaper,
    getAllResearchPaper,
    getResearchPaperByUserId,
    getResearchPaperById,
    updateResearchPaper,
    removeResearchPaperById
};