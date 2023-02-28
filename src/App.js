import './App.css';
import Articolo from './Articolo';
import {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  //X GET All
  const [articoli, setArticoli ] = useState([]);
  //X GET id
  const [singolo, setSingolo] =  useState(false);
  const [post, setPost] = useState({});
  useEffect( () => {
   // ( async () => {  })();
    const getArticoli = async () => {
      const response = await axios.get("https://api.newscatcherapi.com/v2/search", {
        params: { q: "Dungeon and Dragons"},
        headers: { 'x-api-key': 'eMru68X0d7pzFccgIizcz9kBwvBOgtZaPC6MtkcpbYw' }
      })
      console.log(response)
      setArticoli(response.data.articles)
    }
    //console.log('Effettuando render!! ')
    getArticoli()

    }, [])
    
    
    onHandleClickTitle = () => {
      setPost(articoli[id]);
      setSingolo(true);

    }

  return (
    <div className="App">

      <h1>Prova</h1>
      <button onClick={ () => setSingolo(true) }> click </button>
      {
        singolo 
        ? 
        <Articolo  />
        : 
        <>
          {articoli.map( a =>  <div key={articoli.indexOf(a)}><h3 onClick={ () => onHandleClickTitle(articoli.indexOf(a)) } >{a.title }</h3> </div> )}
        </>
      }



    </div>
  );
}

export default App;
