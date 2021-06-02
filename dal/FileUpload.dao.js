const fileUpload = require('./').db('conferenceMT').collection('files');

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/conferenceMT');
// const conn = mongoose.connection;
// const Grid = require('gridfs-stream');
// const fs = require('fs');
// //const mongo = require('mongodb')
// //const db = new mongo.Db('conferenceMT',new mongo.Server("127.0.0.1", 27017));

//Grid.mongo = mongoose.mongo;

const saveFile = async (file) => {
    /*conn.once('open',()=>{
        console.log('Connection open for file Upload');
        const gfs = Grid(conn.db);

        let writeStream = gfs.createWriteStream();
        fs.createReadStream(file).pipe(writeStream);


    })*/

    const result = await fileUpload.insertOne({file});
    return  result.ops[0];
}

module.exports = {saveFile};