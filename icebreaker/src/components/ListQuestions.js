import React, {Fragment, useEffect, useState} from "react";

import DeleteQues from './DeleteQuestion'
import EditQuestion from './EditQuestion'

const ListQuestions = () => {

    const [questions, setQuestions] = useState([]);
    console.log(questions)

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

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                    <th scope="col">Questions</th>
                    {/* <th scope="col">Edit</th> */}
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map(ques => (
                        <tr key={ques.id}>
                            {/* <td scope="row">{ques.question}</td> */}
                            <td><EditQuestion ques_obj={ques}/></td>
                            <td><DeleteQues ques={ques} questions={questions} setQuestions={setQuestions}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListQuestions