import { useState } from 'react';
import './App.scss';
import Characters from './components/Characters/Characters';
import { useFetch } from './hooks/useFetch'
function App() {
  const [ endpoint, setEnpoint ] = useState("character")
  const [ data, loading, error ] = useFetch(endpoint);
  const { results: characters, info } = data;

  console.log(data)
  return (
    <div className="App">
     <Characters characters={characters}/>
    </div>
  );
}

export default App;
