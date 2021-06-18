import React from 'react';

const Scro = (props) =>{
    return(
        <div style = {{height : "70vh", overflowY: "scroll"}}>
            {props.children}
        </div>
    )
}

export default Scro;