import React, {Fragment} from "react";
import './App.css';

//components 
import InputQuestion from "./components/InputQuestions"
import ListQuestions from "./components/ListQuestions"
import ShuffleQuestions from "./components/ShuffleButton"

function App() {
  return (
    <Fragment>
      <diV class="container">
        <h1 className="text-center mt-5">ICE BREAKER</h1>
        <ShuffleQuestions/>
        <InputQuestion/>
        <ListQuestions/>
      </diV>  
    </Fragment>
  )
}

export default App;
