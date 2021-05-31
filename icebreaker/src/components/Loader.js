import React, {Fragment, useState} from "react"
import loader from "../assets/images/ice-breaker_loader.gif" 

const Loader = () => {

    // loader = "./assets/images/ice-breaker_loader.gif"

    return (
        <Fragment>
            {/* <div className="text-center mt-5"> */}
                <img src={loader} alt="loading..." style={{width:'250px'}}/>
            {/* </div> */}
        </Fragment>
    )
}

export default Loader