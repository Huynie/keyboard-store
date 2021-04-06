const MongoClient = require("mongodb").MongoClient;
// const localURI = require('../env.json').MONGODB_URI;

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'Keybz';

let cachedDb = null;

const connectToDatabase = async (uri) => {
  // we can cache the access to our database to speed things up a bit
  // (this is the only thing that is safe to cache here)
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(uri, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db(DB_NAME);

  return cachedDb;
};

const queryDatabase = async (db) => {
  const keyboards = await db.collection("products").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTION"
    },
    body: JSON.stringify(keyboards),
  };
};
  
  module.exports.handler = async (event, context) => {
    // otherwise the connection will never complete, since
    // we keep the DB connection alive
    context.callbackWaitsForEmptyEventLoop = false;
  
    const db = await connectToDatabase(MONGODB_URI);
    
    switch (event.httpMethod) {
      case "GET":
        return queryDatabase(db);
      default:
        return { statusCode: 400 };
    }
  };