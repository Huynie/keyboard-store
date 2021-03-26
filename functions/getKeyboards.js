const MongoClient = require("mongodb").MongoClient;
// const mongo = require('../env.json');

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
  const products = await db.collection("products").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  };
};

module.exports.handler = async (event, context, callback) => {
  // otherwise the connection will never complete, since
  // we keep the DB connection alive
  context.callbackWaitsForEmptyEventLoop = false;

  const db = await connectToDatabase(MONGODB_URI);
  switch (event.httpMethod) {
    case "GET":
      return queryDatabase(db);
    case "POST":
      return pushToDatabase(db, JSON.parse(event.body));
    default:
      return { statusCode: 400 };
  }
};