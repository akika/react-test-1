import React, { useEffect, useState } from "react";
import "./app.css";
import { InputTodo } from "./component/inputTodo";
import { IncompleteTodo } from "./component/incompleteTodo";
import { CompletedTodo } from "./component/completedTodo";

export const CreateHtml = () => {
  const [incompleteItems, setIncompleteitems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const onChangeValue = (event) => {
    setInputValue(event.target.value);
  };
  const onClickAdd = () => {
    if (inputValue === "") {
      return;
    }
    const newToDo = [...incompleteItems, inputValue];
    setIncompleteitems(newToDo);
    setInputValue("");
  };
  const onClickDelete = (index) => {
    const newItems = [...incompleteItems];
    newItems.splice(index, 1);
    setIncompleteitems(newItems);
  };
  const onClickComplete = (index) => {
    const target = incompleteItems[index];
    const newIncompleteItems = [...incompleteItems];
    newIncompleteItems.splice(index, 1);
    const newcompletedItem = [...completedItems, target];
    setIncompleteitems(newIncompleteItems);
    setCompletedItems(newcompletedItem);
  };
  const onClickBack = (index) => {
    const newcompletedItems = [...completedItems];
    newcompletedItems.splice(index, 1);
    const newIncompleteItems = [...incompleteItems, completedItems[index]];
    setIncompleteitems(newIncompleteItems);
    setCompletedItems(newcompletedItems);
  };
  return (
    <>
      <InputTodo
        todotext={inputValue}
        onChange={onChangeValue}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        items={incompleteItems}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodo onClick={onClickBack} items={completedItems} />
    </>
  );
};
