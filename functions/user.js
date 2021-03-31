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
  const user = await db.collection("users").find({}).toArray();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
};

const pushToDatabase = async (db, data) => {
    const user = {
      name: data.name,
      password: data.password,
    };
  
    if (user.name && user.password) {
      await db.collection("users").insertOne(data);
      return { statusCode: 201, body: data };
    } else {
      return { statusCode: 422 };
    }
};

// const updateDatabase = async (db, data) => {
//     const user = {
//       name: data.name,
//       password: data.password
//     };
  
//     if (user.name && user.password) {
//       await db.collection("users").updateOne(data);
//       return { statusCode: 201 };
//     } else {
//       return { statusCode: 422 };
//     }
// };
  module.exports.handler = async (event, context) => {
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