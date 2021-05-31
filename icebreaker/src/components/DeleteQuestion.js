import React, {Fragment} from "react";

const DeleteQues = ({questions, ques, setQuestions}) => {

    const DeleteQuestion = async id => {
        console.log(id)
        try { 
            const deleteQues = await fetch(`http://localhost:5000/questions/${id}`, {
                    method: "DELETE"
                });

                setQuestions(questions.filter( questions => questions.id !== id))

            } catch (error) {
            console.error(error.message) 
        }
    }

    return (
        <Fragment>
            <button className="btn btn-danger" onClick={()=> DeleteQuestion(ques.id) }>Delete</button>
        </Fragment>
    )
}

export default DeleteQues