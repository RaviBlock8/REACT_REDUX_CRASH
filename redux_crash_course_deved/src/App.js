import React from 'react';

import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'

function App() {

  const counter=useSelector(state=>state.counter)
  const isLogged=useSelector(state=>state.isLogged)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button type="button" onClick={()=>dispatch(increment())}>+</button>
      <button type="button" onClick={()=>dispatch(decrement())}>-</button>
      {isLogged?<h2>Valuable information i shouldn't be seeing</h2>:''}
    </div>
  );
}

export default App;
