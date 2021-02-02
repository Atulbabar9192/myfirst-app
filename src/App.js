<<<<<<< HEAD
import React, { useState, } from 'react'
import EndScreen from './Component/EndScreen'
import MainMenu from './Component/MainMenu'
import Quiz from './Component/Quiz'
import { QuizContext } from './Helper/Context'
import './App.css'
const App = () => {
    const [gameState, setGameState] = useState('menu')
    const [score, setScore] = useState();
    return (
        <div className='App'>
            <h1 className="Quiz">Quiz App</h1>
            <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
                {gameState === 'menu' && <MainMenu />}
                {gameState === 'quiz' && <Quiz />}
                {gameState === 'endscreen' && <EndScreen />}
            </QuizContext.Provider>
        </div>
    )
}

export default App
=======
import React from 'react'
import './App.css'

function App() {
  return (

    <div className='App'>
      < h1> Welcome to the Dream Tours </h1 >
    </div >
  )
}
export default App;
>>>>>>> 68da7300295d5e0bf2da8ff1b66023729579e3b9
