// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import "./App.css";
import { React, useEffect,useState } from "react";
export default function App() {
  const [list,setList]= useState([])
  const [inputVal,setInputVal]= useState("")


  function addHandler(e) {
    e.preventDefault();
    const obj = {
      title: inputVal,
      done: false,
    };

    
    setList([...list, obj])
    setInputVal("")
  }
  function handelChange(e) {
    setInputVal(e.target.value)
  }
  function delet(index) {
    const newTodo=[...list]
    newTodo.splice(index, 1)
    setList(newTodo)
  }
  
  return <div className="todoList">
    <h1>Here you can see</h1>
    <h2>Todo List</h2>
      <form onSubmit={addHandler}>
      <input value={inputVal} onChange={handelChange} type="text"   />
        <button className="Add" type="submit">
          Add
        </button>
    </form>
    
    <ol className="orderList">
      {list.map((item, index) => (<li key={index}>
        <div>{index + 1}</div>
        <div style={{ textDecoration: item.done ? "line-through" : "none" }}>{item.title}</div>
       <button onClick={()=>delet(index)}>Delete</button>
      </li>
        
      ))}
    </ol>
  </div>;
}