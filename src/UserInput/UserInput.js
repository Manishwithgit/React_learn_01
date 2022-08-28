import React from "react"


const userInput=(props)=>{

    // return <input type="text" />;

    // ques 7
    // return <input type="text" onChange={props.changed} />;

    //ques 8
    //  return <input 
    //   type="text" 
    //   onChange={props.changed} 
    //   value={props.currentName}
    //   />;

    // ques 10...

    const inputStyle={
        border:'2px solid red',
        margin: '20px'
    };
 
    return <input 
    type="text" 
    style={inputStyle}
    onChange={props.changed} 
    value={props.currentName}
    />;
};

export default userInput;