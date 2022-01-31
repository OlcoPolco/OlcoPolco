import mongoose from "mongoose";

// MongoDB connect
// mongoose.connect('mongodb://localhost:27017/local', function(err) {
//     if (err) {
//         console.log('Not connected to the database: ' + err);
//     } else {
//         console.log('Successfully connected to MongoDB')
//     }
// });
// Data schema
export const useDataSchema = new mongoose.Schema({
    name: {type:String, required: true },
    city: {type: String, required: true },
    gender: {type: String, required: true },
    age: {type: Number, required: true }
});
// Data model
const Data = mongoose.model("data", useDataSchema);

export default Data;