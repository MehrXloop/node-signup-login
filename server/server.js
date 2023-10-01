const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/adduser", (req, res) => {
    const username = req.body["username"];
    const password = req.body["password"];

    const insertSTMT = `INSERT INTO accounts (username, password) VALUES ('${username}', '${password}');`;

    pool.query(insertSTMT)
        .then((result) => {
            console.log("data saved");
            console.log(result);
            res.send("Data saved successfully");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error saving data");
        });
});

app.post("/login", async (req, res) => {
    const username = req.body["username"];
    const password = req.body["password"];

    // Query the database to check if the username and password match
    const selectSTMT = `SELECT * FROM accounts WHERE username = $1 AND password = $2;`;

    try {
        const { rowCount } = await pool.query(selectSTMT, [username, password]);

        if (rowCount === 1) {
            // Successful login
            console.log("Login successful");
            res.status(200).send("Login successful");
        } else {
            // Login failed (username and password do not match)
            console.log("Login failed");
            res.status(401).send("Login failed");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error during login");
    }
});

app.listen(4000, () => console.log("Server running on localhost:4000"));