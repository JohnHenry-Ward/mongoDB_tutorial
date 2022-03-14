const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://JohnHenry:JohnHenry@cluster0.qdogo.mongodb.net/mongo_tutorial?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
  const collection = client.db("mongo_tutorial").collection("test");
  // perform actions on the collection object

  collection.insertOne({
      name: "steve"
  })

  const result = await collection.findOne({ name: 'Bob' });
  console.log(result);
  client.close();
});