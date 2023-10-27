import React from "react";

export const IncmpleteTodo = (props) => {
  <div id="incompleteArea">
    <p>Incomplete ToDo</p>
    <ul>
      {incompleteItems.map((item, index) => {
        return (
          <div className="item">
            <li>{item}</li>
            <button onClick={() => onClickComplete(index)}>完成</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        );
      })}
    </ul>
  </div>;
};
