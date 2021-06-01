import React, {Fragment, useState} from 'react'

const EditQuestion = ({ques_obj}) => {
    console.log(ques_obj)

    const [question, setQuestion] = useState()
    
    const EditQues = async(e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            try {
                const body = {question}
                const response = await fetch(`http://localhost:5000/questions/${ques_obj.id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                window.location = "/";
                
            } catch (error) {
                console.error(error.message)
            }
        }        
    }

    return (
        <Fragment>
            <form className="d-flex">
                <input type="text" className="form-control AddInput" defaultValue={ques_obj.question} onChange={e => setQuestion(e.target.value)} onKeyPress={e => EditQues(e)} />
                {/* <button className="btn btn-primary" style="visibility:hidden;" onClick={e => EditQues(e)}>Edit</button> */}
            </form>
        </Fragment>
    )
}

export default EditQuestion