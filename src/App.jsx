import Start from './components/Start'
import './App.css'
import { useState } from 'react'
import GamePlay from './components/GamePlay';

function App() {
  const [startTheGame,setStartTheGame] = useState(false);

  const toggleGamePlay = () => {
    setStartTheGame((prev) => !prev);
  };
  return (
    <div className='app'>
      {
        startTheGame ? <GamePlay/> : <Start toggle={toggleGamePlay}/>
      }
    </div>
  )
}

export default App
