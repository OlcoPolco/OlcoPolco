import {Request, Response} from "express";
import Data from "./../data";

// GET - /user returns all users
export let allUsers = (req: Request, res: Response) => {
    let user = Data.find((err: any, user: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.allUsers = allUsers;
// GET - /user/1 returns a user with id
export let getUser = (req: Request, res: Response) => {
    let user = Data.findById(req.params.id, (err: any, user: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.getUser = getUser;
// POST - /user/ inserts a new user into the table
export let addUser = (req: Request, res: Response) => {
    let user = new Data(req.body)
    user.save((err: any) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(user)
        }
    })
}
exports.addUser = addUser;
// DELETE - /user/1 deletes a user with id
export let deleteUser = (req: Request, res: Response) => {
    let user = Data.findByIdAndDelete({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted the User");
        }
    });
};
exports.deleteUser = deleteUser;
// PUT - /user1 updates a user with id
export let updateUser = (req: Request, res: Response) => {
    Data.findByIdAndUpdate(req.params.id, req.body, (err: any, user: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Updated the User");
        }
    });
};
