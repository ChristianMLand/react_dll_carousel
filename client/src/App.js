// import './App.css';
import Carousel from './components/Carousel'
import {useState,useEffect} from 'react'
import DLL from './util/DLL'
import axios from 'axios';

function App() {
  const [dll,setDll] = useState(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(resp => {
      setDll(new DLL(resp.data.results))
    })
  },[])

  return (
    <div className="App">
      <Carousel dll={dll} amt={1}/>
      <br/>
      <Carousel dll={dll} amt={3}/>
      <br/>
      <Carousel dll={dll} amt={10}/>
    </div>
  );
}

export default App;
