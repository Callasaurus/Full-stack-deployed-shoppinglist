import React, { useState, useEffect } from "react";
import InputList from "../InputList";
import ShowList from "../ShowList";
import ClearList from "../ClearList";

const url = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:3000";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getShoppingList() {
      const response = await fetch(`${url}/items`);
      const data = await response.json(response);
      console.log(data);
      let sortedItems = [...data.payload].sort(function (a, b) { return a.id - b.id });
      setList(sortedItems);
    }
    getShoppingList();
  }, []);


  async function addToList(newListItem) {
    const listItemWithoutId = {
      item: newListItem,
      completed: false,
    };

    const response = await fetch(`${url}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ listItem: listItemWithoutId }),
    });

    if (!response.ok) {
      return alert("Failed to add item, please try again later.");
    }

    const data = await response.json();
    const listItemWithId = data.payload;

    setList((previous) => [...previous, listItemWithId]);
  }

  function clearList() {
    const clearedList = [];
    setList(clearedList);
  }

  function tickItem(idOfTickedItem) {
    setList((previous) => {
      return previous.map((item) => {
        return item.id !== idOfTickedItem
          ? item
          : { ...item, completed: !item.completed };
      });
    });
  }

  async function updateCompletedInDatabase(item) {
    const response = await fetch(`${url}/items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        item: item.item,
        completed: !item.completed
       }),
    });
    let data = await response.json()
    console.log(data.payload[0])
  }

  async function handleDelete(id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        await fetch(`${url}/items/${id}`, {
          method: "DELETE"
        })
        const deleted = [...list.slice(0, i), ...list.slice(i + 1)];
        setList(deleted);
      }
    } return
  }

  return (
    <section>
      <InputList addToList={addToList} buttonText={"Add To List"} />
      <ShowList list={list} tickItem={tickItem} updateCompletedInDatabase={updateCompletedInDatabase} handleDelete={handleDelete} />
      <ClearList clearList={clearList} buttonText={"Clear List"} />
    </section>
  );
}

export default App;
