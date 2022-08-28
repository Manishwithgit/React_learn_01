import React from "react";


import './UserOutput.css'
const userOutput=(props)=>{
    return(
        <div className="UserOutput">
            {/* <p>manish</p>
            <p>I don`t know react</p> */}


            {/* ques 4 */}
            <p> UserName:{props.userName}</p>
            <p>i don`t know react</p>
        </div>
    )


};
export default userOutput;