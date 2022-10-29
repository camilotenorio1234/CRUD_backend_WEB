import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import MusicRoute from "./routes/musicaRouter.js";
import LibroRoute from "./routes/LibroRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(MusicRoute);
app.use(LibroRoute);

app.listen(9000, ()=> console.log('Server up and running...'));