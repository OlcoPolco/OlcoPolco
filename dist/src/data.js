"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// MongoDB connect
// mongoose.connect('mongodb://localhost:27017/local', function(err) {
//     if (err) {
//         console.log('Not connected to the database: ' + err);
//     } else {
//         console.log('Successfully connected to MongoDB')
//     }
// });
// Data schema
exports.useDataSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true }
});
// Data model
const Data = mongoose_1.default.model("data", exports.useDataSchema);
exports.default = Data;
