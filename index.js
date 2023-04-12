const express = require('express');
const app = express();
const client = require('./db');

app.get("/users", async (req, res) => {
    const db = client.db("db_latihan");
    const users = await db.collection("users").find().toArray();
    res.json(users);
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});
