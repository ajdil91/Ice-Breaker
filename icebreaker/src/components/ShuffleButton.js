import React, {Fragment, useState, useEffect} from 'react';

import Loader from "./Loader"

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

    const ShowResult = () => {
        if (loading === 'true') {
            return (
                <div>
                    {showLoader && <Loader/>}
                </div>)
        } else {
            return (
                <div>
                    <h3>{question}</h3>
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
                { result ? <ShowResult/> : null }
                <button className="btn btn-warning mt-3" onClick={e => randomizeQuestions(e)}>Shuffle</button>              
            </diV>
        </Fragment>
    )
}

export default ShuffleQuestions