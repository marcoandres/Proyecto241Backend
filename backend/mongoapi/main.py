# pylint: disable=missing-module-docstring
# pylint: disable=missing-class-docstring
# pylint: disable=missing-function-docstring
# pylint: disable=import-error
from fastapi import FastAPI, HTTPException

# an HTTP-specific exception class  to generate exception information
from fastapi.middleware.cors import CORSMiddleware

from model import Producto

from database import (
    fetch_one_producto,
    fetch_all_productos,
    create_todo,
    update_todo,
    remove_todo,
)
app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost:8080",
    "https://localhost:3000",
    "https://localhost:8000",
    "*",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/productos")
async def get_productos():
    response = await fetch_all_productos()
    return response

@app.get("/api/producto/{title}", response_model=Producto)
async def get_todo_by_title(title):
    response = await fetch_one_producto(title)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")

@app.post("/api/producto/", response_model=Producto)
async def post_producto(producto: Producto):
    response = await create_todo(producto.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/todo/{title}/", response_model=Producto)
async def put_todo(title: str, desc: str):
    response = await update_todo(title, desc)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")

@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo"
    raise HTTPException(404, f"There is no todo with the title {title}")