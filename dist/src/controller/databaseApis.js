"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.addUser = exports.getUser = exports.allUsers = void 0;
const data_1 = __importDefault(require("./../data"));
// GET - /user returns all users
let allUsers = (req, res) => {
    let user = data_1.default.find((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.allUsers = allUsers;
exports.allUsers = exports.allUsers;
// GET - /user/1 returns a user with id
let getUser = (req, res) => {
    let user = data_1.default.findById(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.getUser = getUser;
exports.getUser = exports.getUser;
// POST - /user/ inserts a new user into the table
let addUser = (req, res) => {
    let user = new data_1.default(req.body);
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.addUser = addUser;
exports.addUser = exports.addUser;
// DELETE - /user/1 deletes a user with id
let deleteUser = (req, res) => {
    let user = data_1.default.findByIdAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted the User");
        }
    });
};
exports.deleteUser = deleteUser;
exports.deleteUser = exports.deleteUser;
// PUT - /user1 updates a user with id
let updateUser = (req, res) => {
    data_1.default.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Updated the User");
        }
    });
};
exports.updateUser = updateUser;
