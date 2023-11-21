import mongoose from 'mongoose';
import 'dotenv/config';

mongoose
    .connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
    ).catch((err) => {
        console.error('Error connecting to Mongo', err);
    });


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const schema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
});

/**
 * Compile the model from the schema.
 */
const Users = mongoose.model("Users", schema);

/**
 * Find a particular exercise
 * @param {} filter 
 * @returns 
 */
const findUser = async (filter) => {
    const query = Users.find(filter);
    return query.exec();
}

export {findUser}