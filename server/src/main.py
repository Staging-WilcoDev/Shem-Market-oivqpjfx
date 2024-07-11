from fastapi import FastAPI

app = FastAPI()

tasks = []

@app.post("/add_task")
def add_task(task: str):
    tasks.append(task)
    return {"message": "Task added successfully"}

@app.get("/get_tasks")
def get_tasks():
    return {"tasks": tasks}