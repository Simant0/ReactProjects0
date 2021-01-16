import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

// when the app loads, we need to connect to database and fetch data
useEffect(() => {
  // this code executes
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({ id: doc.id , todo: doc.data().todo})))
  })
}, []);

const addTodo = (event) =>{
  // on click of button
  event.preventDefault();
  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

  // clear input
  setInput('');
}
  
  return (
    <div className="App">
      <h1> Hello World !!!</h1>
  
      <form>
        
        <FormControl>
          <InputLabel> Write Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        
        { <Button disabled={!input} variant="contained"color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button> }
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
