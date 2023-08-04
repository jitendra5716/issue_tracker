const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

mongoose.set('strictQuery',false);

// const uri = 'mongodb+srv://root:db@Cluster0.wnkz58j.mongodb.net/projectIssue?retryWrites=true&w=majority';



// const mongoUrl = "mongodb+srv://root:db@cluster0.wnkz58j.mongodb.net/?retryWrites=true&w=majority"

// const connectDB = async ()=>{
//     const connection = await mongoose.connect(mongoUrl)
//     if(connection){
//         console.log("Database connected");
//     }else{
//         console.log("Error in connecting to database");
//     }
// }

const MONGO_URI = "mongodb+srv://root:db@cluster0.wnkz58j.mongodb.net/";

mongoose.connect(MONGO_URI);

const db = mongoose.connection;


db.on('error',console.error.bind(console,'Error in configuration of db'));

db.once('open',()=>{
    console.log("successfully connected to Database");
});

module.exports = db;
// module.exports = {connectDB};

// const uri = 'mongodb+srv://root:db@Cluster0.wnkz58j.mongodb.net/projectIssue?retryWrites=true&w=majority';

// const connectToDB =  async ()=> {
//     try {
//       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
//       // Connect to the MongoDB Atlas cluster
//       await client.connect();
  
//       // Access your desired database and collection
//       const db = client.db('projectIssue');
//       const collection = db.collection('Project');
  
//       // Perform database operations as needed
//       // For example, you can insert documents:
//       await collection.insertOne({ name: 'Jitendra', age: 26 });
        
//       // Remember to close the connection when you're done
//       await client.close();
//     } catch (error) {
//       console.error('Error connecting to MongoDB Atlas:', error);
//     }
//   }
  
//   // Call the function to connect to the database
//  connectToDB();

//   module.exports = connectToDB;