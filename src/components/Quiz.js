import  { useState } from 'react';
import useLoadQuiz from './useLoadQuiz';
const Quiz = ({ title }) => {

    const [currentPosition, setCurrentPosition] = useState(0);
    const [correctNum, setCorrectNum] = useState(0);
    const {question, answerA, answerB, answerC, correct, finished} =  useLoadQuiz(currentPosition);
    
    

    
    
    return ( 
        <div className="quiz">
            <h1>{title}</h1>
            <div className="quiz-container">
                {finished && <div className="quiz-header">Quiz is Finished! Correct: {correctNum}</div>}
               {!finished && question && <> <div className="quiz-header">
                    <h2>{question}</h2>
                    <ul>
                        <li>
                            <input type="radio" id="a" name="answer" className="answer" />
                            <label htmlFor="a">{answerA}</label>
                        </li>
                        <li>
                            <input type="radio" id="b" name="answer" className="answer" />
                            <label htmlFor="b">{answerB}</label>
                        </li>
                        <li>
                            <input type="radio" id="c" name="answer" className="answer" />
                            <label htmlFor="c">{answerC}</label>
                        </li>
                    </ul>
                </div>
                <button onClick={ () => {
                    const answersEl = document.querySelectorAll(".answer");
                    answersEl.forEach(answerEl => {
                        if(answerEl.checked){
                            if(correct === answerEl.id){
                                setCorrectNum(correctNum + 1)
                            }
                        }
                    });
                    setCurrentPosition(currentPosition + 1);
                
                }}>Submit</button> 
                </>}
                
            </div>
        </div>
     );
}
 
export default Quiz;