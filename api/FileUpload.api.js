const { saveFile } = require('../dal/FileUpload.dao');

const fileUploads = async ({fileName, filePath, fileType}) =>{
    return await saveFile({fileName, filePath, fileType});
}

module.exports = {fileUploads};