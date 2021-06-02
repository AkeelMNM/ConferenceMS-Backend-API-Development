const { save, getById, removeById, update} = require('../dal/ResearchPaper.dao');

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

const addResearchPaper = async ({userID,authorName, paperTitle, email,researchPFileLocation}) =>{
    let ResearchPaper ={
        userID,
        authorName,
        paperTitle,
        email,
        submittedDate: new Date(),
        researchPFileLocation,
        submissionStatus:"pending",
        payment:0,
        paymentStatus:"Not Available"
    }

    return await save(ResearchPaper);
}

const getResearchPaperById = async (userID) => {
    return await getById(userID);
}

const updateResearchPaper = async (id,{userID,authorName, paperTitle, email,researchPFileLocation,submissionStatus,payment,paymentStatus}) =>{
    return await update(id,
        {
            userID,authorName, paperTitle, email, submittedDate:new Date(), researchPFileLocation,submissionStatus,payment,paymentStatus
        });
}

const removeResearchPaperById = async ({id}) => {
    return await removeById(id);
}

module.exports = {
    addResearchPaper,
    getResearchPaperById,
    updateResearchPaper,
    removeResearchPaperById
};