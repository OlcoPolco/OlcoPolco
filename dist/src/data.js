"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb://127.0.0.1:27017/local';
// Error handling
mongoose_1.default.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected to MongoDB");
    }
});
// Data schema
exports.useDataSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true }
});
// Data model
const Data = mongoose_1.default.model("datas", exports.useDataSchema);
exports.default = Data;
