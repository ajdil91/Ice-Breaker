import React, {Fragment, useState, useEffect} from 'react';

import Loader from "./Loader"
import ShuffleButton from "../assets/images/ice-breaker_button2.png"
import "../assets/css/Buttons.css"
import "../assets/css/Text.css"

const ShuffleQuestions = () => {

    const [questions, setQuestions] = useState("")
    const [result, setResult] = useState(false)
    const [question, setQuestion] = useState("")
    const [loading, setLoader] = useState('false')

    const getQuestions = async() => {
        try {
            const response = await fetch("http://localhost:5000/questions")
            const jsonData = await response.json()

            setQuestions(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getQuestions();
    }, []);

    const randomizeQuestions = (e) => {
        try {
            showLoader()
            const ques_arry = questions
            const randomQues = ques_arry[Math.floor(Math.random()*ques_arry.length)]
            setResult(true)
            setQuestion(randomQues.question)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    const ShowShuffleButton = () => {
        return (
            <button onClick={e => randomizeQuestions(e)} style={{"background-color": "transparent", "border-style": "none"}}>
                <img src={ShuffleButton} style={{width:'250px'}}/>
            </button>
        )
    }

    const ShowResult = () => {
        if (loading === 'true') {
            return (
                <div>
                    {showLoader && <Loader/>}
                    <diV className="results"></diV>
                </div>)
        } else {
            return (
                <div>
                    <ShowShuffleButton/>
                    <diV className="results">
                        <h3 className="TextStyle">{question}</h3>
                    </diV>
                </div>)
        }
    }

    const showLoader = () => {
        setLoader('true');

        setTimeout(()=> {
            setLoader('false')
        }, 3500)
    }

    return (
        <Fragment>
            <diV className="container mt-5 text-center">
                { result ? <ShowResult/> : <ShowShuffleButton/> }
            </diV>
        </Fragment>
    )
}

export default ShuffleQuestions