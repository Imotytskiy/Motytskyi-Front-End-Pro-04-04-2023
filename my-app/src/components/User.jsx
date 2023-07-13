import { useState } from "react";
const User = ({name}) => {
    setCounter(counter+1)
    const [counter, setCounter] = useState(0);

    const clickHandler = (event) => {
    counter++;}
    return( 
        <div className="">
            <div className="user_avatar">
                <img src="" alt="" />
            </div>
            <div className="user_name">{name}</div>
            <div className="counter">{counter}</div>
            
            <button onClick={clickHandler}  >inc +</button>
            <button>dec -</button>
        </div>
    )
}

export default User