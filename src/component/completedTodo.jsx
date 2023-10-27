import React from "react";

export const CompletedTodo = (props) => {
  const { items, onClick } = props;
  return (
    <div id="completedArea">
      <p>Completed ToDo</p>
      <ul>
        {items.map((item, index) => {
          return (
            <div className="item">
              <li>{item}</li>
              <button
                onClick={() => {
                  onClick(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
