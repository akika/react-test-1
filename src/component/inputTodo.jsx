import React from "react";

export const InputTodo = (props) => {
  const { todotext, onChange, onClick } = props;
  return (
    <div id="addArea">
      <input placeholder="ToDoを入力" value={todotext} onChange={onChange} />
      <button id="addbutton" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
