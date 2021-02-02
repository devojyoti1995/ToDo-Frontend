import React, { useState } from "react";
import "./../styles/App.css";
// import ListItem from "./ListItem";
import TodoList from "./TodoList";

function App() {
  // const [items, setItems] = useState([]);
  // const [newItem, setNewItem] = useState("");
  // const addItem = () => {
  //   items.push(newItem);
  //   setItems([...items]);
  //   setNewItem("");
  // };
  // const newChangeItem = (e) => {
  //   //console.log(e.target.value);
  //   setNewItem(e.target.value);
  // };
  // const deleteHandler = (itemIdx) => {
  //   items.splice(itemIdx, 1);
  //   setItems([...items]);
  // };
  // const editTaskHandler = (editedValue, idx) => {
  //   items[idx] = editedValue;
  //   setItems([...items]);
  // };
  return (
    <div id="main">
      <TodoList />
      {/* <textarea id="task" onChange={newChangeItem} value={newItem}></textarea>
      <button id="btn" onClick={addItem} disabled={newItem.trim().length === 0}>
        Add Item
      </button>
      {items.map((item, idx) => (
        <ListItem
          item={item}
          key={`${item}_${idx}`}
          idx={idx}
          editTask={editTaskHandler}
          deleteTask={deleteHandler}
        />
      ))} */}
    </div>
  );
}

export default App;
