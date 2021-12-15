import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Branches from "./schemas/branch.schema.js";

dotenv.config();

// app config
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// database config
const URI = process.env.DB_URI;

mongoose.connect(
  URI,
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

// api routes
app.get("/", (req, res) => res.status(200).send([]));

// get the branch
app.get("/sync", (req, res) => {
  Branches.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// get by id
app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Branches.findById(id);
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});

// create the branch
app.post("/new", (req, res) => {
  const dbMessage = req.body;

  Branches.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// update the branch
app.patch("/:id", async (req, res, nex) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };

    const result = await Branches.findByIdAndUpdate(id, updates, options);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
