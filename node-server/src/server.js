const express = require("express");
const app = express();

const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory tasks array to mimic the FastAPI example
let tasks = ["Write a diary entry from the future", "Create a time machine from a cardboard box", "Plan a trip to the dinosaurs", "Draw a futuristic city", "List items to bring on a time-travel adventure"];

// GET endpoint to return a simple message
app.get('/', (req, res) => {
  res.send('Hello World');
});

// POST endpoint to add a task
app.post('/tasks', (req, res) => {
  const { text } = req.body; // Assuming the body has a "text" field
  if (text) {
    tasks.push(text);
    res.json({ message: "Task added successfully" });
  } else {
    res.status(400).send('Task text is required');
  }
});

// GET endpoint to list all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});