const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//submit a question

app.post("/questions", async(req, res) => {
    try {
        const { question } = req.body;
        const newQuestion = await pool.query("INSERT INTO questions (question) VALUES($1) RETURNING *", [question]);
        res.json(newQuestion.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
} )

//get all questions 

app.get("/questions", async(req, res) => {
    try {
        const allQuestions = await pool.query("SELECT * FROM questions");
        res.json(allQuestions.rows);
    } catch (err) {
      console.error(err.message);        
    }
});

//get a question 

app.get("/questions/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const getQuestion = await pool.query("SELECT * FROM questions WHERE id = $1", [id]);
        res.json(getQuestion.rows[0])
    } catch (error) {
        console.error(error.message);
    }
})

//edit a question

app.put("/questions/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {question} = req.body;
        const editQues = await pool.query("UPDATE questions SET question = $1 WHERE id = $2", [question, id]);
        res.json(editQues.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//delete a question

app.delete("/questions/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteQues = await pool.query("DELETE FROM questions WHERE id = $1", [id]) 
        res.json("Question was deleted.")
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
});