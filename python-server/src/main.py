from fastapi import FastAPI

app = FastAPI()

tasks = ["Write a diary entry from the future", "Create a time machine from a cardboard box", "Plan a trip to the dinosaurs", "Draw a futuristic city", "List items to bring on a time-travel adventure"]

@app.get("/")
def get_tasks():
    return "Hello World"

@app.post("/task")
def add_task(task: str):
    tasks.append(task)
    return {"message": "Task added successfully"}

@app.get("/tasks")
def get_tasks():
    return {"tasks": tasks}
