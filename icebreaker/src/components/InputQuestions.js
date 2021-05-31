import React, {Fragment, useState} from 'react';

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
            <h4 className="text-center mt-5">Input Question</h4>
            <form className="d-flex mt-5" onSubmit={onSubmitQues}>
                <input type="text" className="form-control" value={question} onChange={e => setQuestion(e.target.value)}></input>
                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
    )
};

export default InputQuestion