import React, { useState } from 'react';
const User = ({name}) => {
    let counter = 0;
    const state = useState(0);
    console.log(state);
    const clickHandler = (event) => counter++;
    return( 
        <div className="">
            <div className="user_avatar">
                <img src="" alt="" />
            </div>
            <div className="user_name">{name}</div>
            <div className="counter">{counter}</div>
            
            <button onClick={clickHandler}    >inc +</button>
            <button>dec -</button>
        </div>
    )
}

export default User