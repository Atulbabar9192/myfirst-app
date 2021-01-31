import React, { useState, useContext } from 'react'
import { Questions } from '../Helper/QuestionBank'
import { QuizContext } from '../Helper/Context'
const Quiz = () => {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChoosen) {
            setScore(score + 1);
            alert(score)
            console.log(score)
        }
        setCurrQuestion(currQuestion + 1)
    }
    const finalquiz = () => {
        if (Questions[currQuestion].answer == optionChoosen) {
            setScore(score + 1);

        }
        setGameState('endscreen')
    }

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => setOptionChoosen("A")}> {Questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChoosen("B")}> {Questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChoosen("C")}> {Questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChoosen("D")}> {Questions[currQuestion].optionD}</button>
            </div>
            {[currQuestion] == Questions.length - 1 ? (<button onClick={finalquiz}>Finish Quiz</button>) :
                <button onClick={nextQuestion}>Next Question</button>

            }

        </div>
    )
}

export default Quiz
