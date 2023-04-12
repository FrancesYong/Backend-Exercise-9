// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://127.0.0.1:27017/')
//     .then (async (client) => {
//         console.log("Server database connect!");
//         const db = client.db("db_latihan");

//         const quotes = await db.collection("users").find().toArray();
//         console.log(quotes);
//     })
//     .catch((error) => console.error(error));

// module.exports = MongoClient;

const MongoClient = require("mongodb").MongoClient;
const connectionString = "mongodb://127.0.0.1:27017"; // tanpa authentication

const client = new MongoClient(connectionString);

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  }
})();

module.exports = client;