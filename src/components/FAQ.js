import React, { useState } from 'react';

function FAQ() {
    const questionsAnswers = [
        {id: 0, question: "Q1", answer: "A1"},
        {id: 1, question: "Q2", answer: "A2"},
        {id: 2, question: "Q3", answer: "A3"}
    ];

    return (
        <div id = "FAQ">
            <h1> FAQ </h1>
            {questionsAnswers.map(entry => {
                return <QuestionBox question = {entry.question}
                        answer = {entry.answer}></QuestionBox>
            })}
        </div>
    );
}

function QuestionBox({question, answer}) {
    const [displayAnswer, setDisplayAnswer] = useState(false);
    
    const openedClosed = !displayAnswer ? "closed" : "opened";
    const imgSrc = !displayAnswer ? "chevron-right.png" : "chevron-bottom.png";

    return (
        <div class = "question-box">
            <div class = {"question " + openedClosed}>
                <p> {question} </p>
                <img src = {imgSrc} alt = "" onClick = {() => setDisplayAnswer(!displayAnswer)}></img>
            </div>
            {displayAnswer &&
            <div class = "answer">
                <p> {answer} </p>
            </div>
            }
        </div>
    );
}

export default FAQ;