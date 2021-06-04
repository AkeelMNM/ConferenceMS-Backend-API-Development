const  UUID = require ('uuid')
//const  posts = new Map();

const {getAll, getById, removeById, save, update} = require('../dal/posts.dao');

const  createPost = async ({creator,conference_title,message,status}) =>{
    const post ={
    id: UUID.v4(),
        creator:creator,
        conference_title:conference_title,
        message:message,
        status:status,
        postedDate: new Date()
    }
   // posts.set(post.id,post);
    //return post;
    return await save(post);

}
//get all data
const getPosts = async () => {
    //Spreading Iterator
    //return [...posts.values()];
    return await getAll();
};
//get data by id
const getPost =async (id) => {
    //return posts.get(id);
    return await getById(id);
}
//delete data
const deletePost  =async (id) => {
    return await removeById(id);
}
//update data
const updatePost  =async (id,{creator,conference_title,message,status}) => {
    const post ={

        creator:creator,
        conference_title:conference_title,
        message:message,
        status:status,
        postedDate: new Date()
    }
    return await update(id,post);
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost

};