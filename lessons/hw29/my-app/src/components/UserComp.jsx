import { useState } from "react";

const User = ({ name, comments = [] }) => {
  const [counter, setCounter] = useState(0);
  const inc = (event) => {
    setCounter(counter + 1);
  };
  const dec = (event) => {
    setCounter(counter - 1);
  };
  console.log(comments);
  if (!comments.length) {
    return <h2>No Comments</h2>;
  }
  return (
    <div className="user">
      <div className="user_avatar">
        <img src="" alt="" />
      </div>
      <div className="user_name">{name}</div>
      <div className="counter">{counter}</div>

      <button onClick={inc}>inc +</button>
      <button onClick={dec}>dec -</button>

      {comments.map((item, index) => (
        <div key={index} className="item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default User;
