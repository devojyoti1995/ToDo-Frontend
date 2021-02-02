import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "./../styles/App.css";

export default function TodoList(props) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    // send data to backend
    fetch("https://todo-backend-devojyoti.herokuapp.com/todo", {
      method: "POST",
      body: JSON.stringify({ task: newItem }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        console.log("Got data from POST backend", resp);

        items.push(resp);
        // setItems(items);
        // console.log(items);
        setItems([...items]);
        setNewItem("");
      });
  };
  const newItemChanged = (evt) => {
    setNewItem(evt.target.value);
  };

  const deleteHandler1 = (itemIdx) => {
    const idToDelete = items[itemIdx]._id;
    fetch(`https://todo-backend-devojyoti.herokuapp.com/todo/${idToDelete}`, {
      method: "DELETE",
    }).then((r) => {
      console.log("Got successfully DELETE");
      items.splice(itemIdx, 1);
      setItems([...items]);
    });
  };

  const editHandler = (editedValue, itemIdx) => {
    const idToEdit = items[itemIdx]._id;
    fetch(`https://todo-backend-devojyoti.herokuapp.com/todo/${idToEdit}`, {
      method: "PUT",
      body: JSON.stringify({ task: editedValue }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        console.log("Got successfully response from PUT", resp);
        items[itemIdx] = resp;
        setItems([...items]);
      });
  };

  useEffect(() => {
    fetch("https://todo-backend-devojyoti.herokuapp.com/todo")
      .then((r) => r.json())
      .then((arr) => {
        const sortedArr = arr.sort((a, b) => {
          const aDateNumeric = new Date(a.creationTime).valueOf();
          console.log(aDateNumeric);
          const bDateNumeric = new Date(b.creationTime).valueOf();
          console.log(aDateNumeric);
          return aDateNumeric - bDateNumeric;
        }); // sorts in ascending order of id - timestamp

        setItems(sortedArr); // sets the array of { id, task }
      });
  });

  return (
    <div id="main">
      <div className="new">
        <textarea
          id="task"
          onChange={newItemChanged}
          placeholder="New Item"
          value={newItem}
        ></textarea>
        <button
          id="btn"
          onClick={addItem}
          disabled={newItem.trim().length === 0}
        >
          Add Item
        </button>
      </div>
      {items.map((item, idx) => (
        <ListItem
          item={item}
          key={item._id}
          idx={idx}
          editHandler={editHandler}
          deleteHandler={deleteHandler1}
        />
      ))}
    </div>
  );
}
