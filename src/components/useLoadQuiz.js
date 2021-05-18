import { useState, useEffect } from  'react';
import quizData from  '../data/quizData';

const useLoadQuiz = (currentPosition) => {

    const [question, setQuestion] = useState(null);
    const [answerA, setAnswerA] =  useState(null);
    const [answerB, setAnswerB] =  useState(null);
    const [answerC, setAnswerC] =  useState(null);
    const [finished, setFinished] =  useState(false);
    const [correct, setCorrect] =  useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        const currentQuiz  =  quizData[currentPosition];

        if(currentPosition < quizData.length){
            setQuestion(currentQuiz.question);
            setAnswerA(currentQuiz.a);
            setAnswerB(currentQuiz.b);
            setAnswerC(currentQuiz.c);
            setCorrect(currentQuiz.correct);
        } else {
            setFinished(true);
        }

        

        return () => abortCont.abort()

    },[currentPosition])

    return {question, answerA, answerB, answerC, correct, finished}
}
 
export default useLoadQuiz;