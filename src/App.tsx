import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Langing';

function App() {

  useEffect(()=>{
  }, []) 

  return (
    <div className="App" id='app'>
      <Landing/>
    </div>
  );
}

export default App;
