const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017' ; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

connect();

async function fetchData() {
    try {
      const db = client.db('gofood'); // Replace with your database name
      const collection1 = db.collection('food_items'); // Replace with your collection name
      const collection2 = db.collection('foodCategory');
      const result1 = await collection1.find({}).toArray();
      const result2 = await collection2.find({}).toArray();
      global.food_items = result1;
      global.foodCategory = result2;
    //   console.log(result);
    //   console.log(food_items);
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      client.close();
    }
  }
  
  fetchData();
// async function insertData()  {
//     try {
//       const db = client.db('gofood'); // Replace with your database name
//       const collection = db.collection('foodCategory'); // Replace with your collection name
      
//       const result = await collection.insertMany(jsonData);
//       console.log(`${result.insertedCount} documents inserted`);
//     } catch (error) {
//       console.error('Error inserting data', error);
//     } finally {
//       client.close();
//     }
//   }
  
//   insertData();