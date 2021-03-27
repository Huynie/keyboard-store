const MongoClient = require("mongodb").MongoClient;
const localURI = require('../env.json').MONGODB_URI;

const MONGODB_URI = localURI;
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
  const pokemon = await db.collection("products").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemon),
  };
};

const axios = require("axios");
const getKeyboards = async (req, res) => {
  try {
    const keyboards = await axios.get('http://localhost:9000/getKeyboards');
    return keyboards.data
  } catch (e) {
    console.log('something went wrong while getting data.');
    return res.status(500).json({ message: e.message });
  }
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