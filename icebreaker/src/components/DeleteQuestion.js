import React, {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "../assets/css/Buttons.css"

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
            <button className="DeleteButton" onClick={()=> DeleteQuestion(ques.id) }><FontAwesomeIcon icon={faTrashAlt}/></button>
        </Fragment>
    )
}

export default DeleteQues