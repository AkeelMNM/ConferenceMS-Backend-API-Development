const researchPaper = require('./').db('conferenceMT').collection('ResearchPaperColl');

const save = async (
    {userID,authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus}) =>{
    const result = await researchPaper.insertOne(
        {
            userID,authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus
        });
    return  result.ops[0];
}

const getById = async (userID) =>{
    const courser =  await researchPaper.find({userID:userID});
    return courser.toArray();
}

const removeById = async (id) =>{
    return await researchPaper.removeOne({id});
}

const update = async (id ,{userID, authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus}) =>{
    const result = await researchPaper.replaceOne({id},{
        userID, authorName, paperTitle, email, submittedDate, researchPFileLocation,submissionStatus,payment,paymentStatus});
    return  result.ops[0];
}

module.exports = {save, getById, removeById, update};