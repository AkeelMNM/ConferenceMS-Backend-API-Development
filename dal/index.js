const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

client.connect(error => {
    if(err) {
        console.error(err);
        process.exit(-1)
    }

    console.log('ConferenceMS Application connected to MongoDB');
});

module.exports = client;
