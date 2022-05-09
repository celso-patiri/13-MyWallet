import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT;
const MONGO_BASE = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const MONGO_URI = `${MONGO_BASE}`;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log(`Connected with mongoose on ${MONGO_URI}`))
    .catch(console.dir);

app.listen(PORT, () => console.log(`Listening on ${PORT} `));
