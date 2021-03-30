import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import InfoCard from './components/infoCard';


const App = () => {
  // const [count, setCount] = useState(0)
  // const [inputText, setInputText] = useState('')
  // const handleChange = (event)=>{
  //   setInputText(event.target.value)
  //   document.title = `Вы нажали ${count} раз`
  // }


  const axios = require('axios');

  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState([])

  const searchInputHandleChange = (event) => {
    setSearchInput(event.target.value)
  }


  const makeRequest = (event) => {
    let searchRequest = ('https://api.nasa.gov/planetary/apod?api_key=I77FdsHpfUvsKvtt5QZvVfwSsAWqN60ULfuxTIKq&date=' + searchInput)
    axios.get(searchRequest)
      .then(function (response) {
        setData(response.data)
        console.log(response.data)
      })
      .then(function(response){
        console.log(data)
      })
  }








  return (
    <div>
      {/* <form>
      <input onChange ={handleChange}></input>
      <br></br>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(0)}>O</button>
      <button onClick={count-1<0 ? ()=>setCount(0):()=>setCount(count - 1)}>-</button>
      <p>{count}</p>
      <p>В строке введено следующее: {inputText}</p>
      </form>
      
      <br />
      <br />
      <br /> */}



      <input placeholder="YYYY-MM-DD" onChange={searchInputHandleChange} />
      <button onClick={() => makeRequest()}>FIND</button>
      <InfoCard 
      date = {data.date}
      explanation = {data.explanation}
      url = {data.url}/>

    </div>
  )
}


export default App;

