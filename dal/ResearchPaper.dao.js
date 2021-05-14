const researchPaper = require('./').db('researchPaper').collection('researchPaper');

const save = async ({id, authorName, paperTitle, email, date, fileLocation}) =>{
    const result = await researchPaper.insertOne({id, authorName, paperTitle, email, date, fileLocation});
    return  result.ops[0];
}

const getById = async (id) =>{
    return await researchPaper.findOne({id});
}

const removeById = async (id) =>{
    return await researchPaper.removeOne({id});
}

const update = async (id ,{authorName, paperTitle, email, date, fileLocation}) =>{
    const result = await researchPaper.replaceOne({id},{authorName, paperTitle, email, date, fileLocation});
    return  result.ops[0];
}

module.exports = {save, getById, removeById, update};