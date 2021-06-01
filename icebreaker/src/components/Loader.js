import React, {Fragment, useState} from "react"
import loader from "../assets/images/ice-breaker_loader.gif" 

const Loader = () => {

    return (
        <Fragment>
            {/* <div className="text-center mt-5"> */}
                <img src={loader} alt="loading..." style={{width:'250px'}}/>
            {/* </div> */}
        </Fragment>
    )
}

export default Loader