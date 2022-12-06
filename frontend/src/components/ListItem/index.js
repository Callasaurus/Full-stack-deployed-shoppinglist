
import React from "react";
import "./listItem.css";

function ListItem({ name, completed, tickItem, updateCompletedInDatabase, handleDelete }) {
  function onClicks() {
    tickItem();
    updateCompletedInDatabase();
  }

  return (
    <div className="list-container">
    <li
      data-testid="list-item"
      className={completed ? "tickedItem" : "untickedItem"}
      onClick={onClicks}
    >
      {name}
    </li>
    <button onClick={handleDelete} className="buttons"> Delete </button>
    </div>
  );
}

export default ListItem;
