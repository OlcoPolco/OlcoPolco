import  express from "express";
import * as dataController from "./controller/databaseApis";

const app = express();

// Connection string
app.set('port', process.env.PORT || 3000);

// Deffined request type/endpoint/path
app.get('/get-all-users', dataController.allUsers);
app.get('/get-user/:id', dataController.getUser);
app.put('/crt-user', dataController.addUser);
app.delete('/dlt-user/:id', dataController.deleteUser);
app.post("/chg-user/:id", dataController.updateUser);

export default app;