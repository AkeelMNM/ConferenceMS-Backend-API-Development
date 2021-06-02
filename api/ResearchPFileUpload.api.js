const { saveFile } = require('../dal/FileUpload.dao');

const addResearchPaperFile = async ({file}) =>{
    let RpFile ={
        file
    }

    return await saveFile(RpFile);
}

module.exports = {addResearchPaperFile};