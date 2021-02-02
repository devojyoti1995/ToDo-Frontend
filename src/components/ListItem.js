import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [editedItem, setEditedItem] = useState(props.item.task);
  const [editMode, setEditMode] = useState(false);
  const editedItemChanged = (evt) => {
    setEditedItem(evt.target.value);
  };
  const saveEditedItem = () => {
    props.editHandler(editedItem, props.idx);
    setEditMode(false);
  };
  return (
    <div className="list">
      {editMode ? (
        <>
          <div className="listitem">
            <textarea
              className="editTask"
              onChange={editedItemChanged}
              placeholder="Edit Task"
              value={editedItem}
            ></textarea>
          </div>
          <div className="listactions">
            <button
              className="saveTask"
              onClick={saveEditedItem}
              disabled={editedItem.trim().length === 0}
            >
              Save Task
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="listitem">{props.item.task}</div>
          <div className="listactions">
            <button className="edit" onClick={() => setEditMode(true)}>
              edit
            </button>
            <button
              className="delete"
              onClick={() => props.deleteHandler(props.idx)}
            >
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;

// import React, { useState } from "react";
// import "./../styles/App.css";

// function ListItem(props) {
//   const [editedItem, setEditedItem] = useState(props.item);
//   const [editMode, setEditMode] = useState(false);
//   const editHandeler = (e) => {
//     setEditedItem(e.target.value);
//   };
//   const saveTaskHandler = () => {
//     setEditMode(false);
//     props.editTask(editedItem, props.idx);
//   };
//   return (
//     <div className="list">
//       {editMode ? (
//         <>
//           <textarea
//             id="editTask"
//             onChange={editHandeler}
//             placeholder="Edit Task"
//             value={editedItem}
//           ></textarea>
//           <button
//             id="saveTask"
//             onClick={saveTaskHandler}
//             disabled={editedItem.trim().length === 0}
//           >
//             Save Task
//           </button>
//         </>
//       ) : (
//         <>
//           {props.item}
//           <button className="edit" onClick={() => setEditMode(true)}>
//             edit
//           </button>
//           <button
//             className="delete"
//             onClick={() => props.deleteTask(props.idx)}
//           >
//             delete
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default ListItem;
