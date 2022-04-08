import { useState } from 'react';
import './App.scss';
import Characters from './components/Characters/Characters';
import { useFetch } from './hooks/useFetch'
import Loading from './components/common/Loading';
import Search from './components/Search/Search';
function App() {
  
  const [ endpoint, setEnpoint ] = useState("character")

  const { data, loading, error } = useFetch(endpoint);
  const { results: characters, info } = data;

  const findCharacter = (character) => {
    setEnpoint(`character?name=${character}`)
  }

  console.log(data)

  if (loading) return <Loading /> 

  return (
    <div className="app">
      <Search findCharacter={findCharacter}/>
      <Characters characters={characters} /> 
    </div>
  );
}

export default App;
