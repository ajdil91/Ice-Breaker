import React, {Fragment, useState} from 'react';
import "../assets/css/Buttons.css"
import "../assets/css/Input.css"

const InputQuestion = () => {
    const [question, setQuestion] = useState("")

    const onSubmitQues = async(e) => {
        e.preventDefault();
        try {
            const body = {question};
            const response = await fetch("http://localhost:5000/questions", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <form className="input-group d-flex mt-5" onSubmit={onSubmitQues}>
                <input type="text"  placeholder="Add a question" className="form-control AddInput" value={question} onChange={e => setQuestion(e.target.value)}></input>
                <div className="input-group-append">
                    <button className="btn Add">Add</button>
                </div>     
            </form>
        </Fragment>
    )
};

export default InputQuestion