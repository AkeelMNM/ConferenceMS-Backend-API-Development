const researchPaper = require('./').db('conferenceMT').collection('ResearchPaperColl');
const ObjectId = require("mongodb").ObjectId;

const save = async (
    {userID,authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus}) =>{
    const result = await researchPaper.insertOne(
        {
            userID,authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus
        });
    return  result.ops[0];
}

const getAll = async () =>{
    const courser =  await researchPaper.find({});
    return courser.toArray();
}

const getByUserId = async (userID) =>{
    const courser =  await researchPaper.find({userID:userID});
    return courser.toArray();
}

const getById = async (id) =>{
    return await researchPaper.findOne({_id:ObjectId(id)});
}

const removeById = async (id) =>{
    return await researchPaper.deleteOne({_id:ObjectId(id)});
}

const update = async (id ,{userID, authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus}) =>{
    const result = await researchPaper.replaceOne({id},{
        userID, authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus});
    return  result.ops[0];
}

module.exports = {save, getAll, getByUserId, getById, removeById, update};