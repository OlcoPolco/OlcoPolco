import mongoose from "mongoose";

const uri: string = 'mongodb://127.0.0.1:27017/local';

// Error handling
mongoose.connect(uri, (err:any) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected to MongoDB");
    }
});
// Data schema
export const useDataSchema = new mongoose.Schema({
    name: {type:String, required: true },
    city: {type: String, required: true },
    gender: {type: String, required: true },
    age: {type: Number, required: true }
});
// Data model
const Data = mongoose.model("datas", useDataSchema);

export default Data;