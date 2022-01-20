const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");

app.use(express.json());

dotenv.config();

app.get("/",(req,res)=>{
    res.send("API is running...")
});

app.get("/api/notes",(req,res)=>{
    res.json(notes);
})

app.get("/api/notes/:id",(req,res)=>{
    const note = notes.find((n)=> n._id === req.params.id);
    res.json(note);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
