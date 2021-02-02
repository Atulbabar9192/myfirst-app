import React, { useState } from 'react';
import { useContext } from 'react';
import { QuizContext } from '../Helper/Context';
import { Questions } from '../Helper/QuestionBank';

const EndScreen = () => {
    const { score, setScore, setGameState } = useContext(QuizContext)
    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    };

    return (
        <div>
            <h1> Quiz completed</h1>
            <h3>{score}/{Questions.length}</h3>

            <button className='endbutton' onClick={restartQuiz}>Restart Quiz</button><br /><br />
            <button className='endbutton'>Exit</button>


        </div>
    )
}

export default EndScreen
