const { save, getById, removeById, update} = require('../dal/ResearchPaper.dao');
const uuid = require('uuid');

/**
 * @important  file input should be separated when saving the file i'm only saving the location of the file
 */

const addResearchPaper = async ({authorName, paperTitle, email, fileLocation}) =>{
    let ResearchPaper ={
        id:uuid.v4(),
        authorName,
        paperTitle,
        email,
        date: new Date(),
        fileLocation
    }

    return await save(ResearchPaper);
}

const getResearchPaperById = async ({id}) => {
    return await getById(id);
}

const updateResearchPaper = async (id,{authorName, paperTitle, email, fileLocation}) =>{
    return await update(id,{authorName,paperTitle,email,date:new Date(),fileLocation});
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