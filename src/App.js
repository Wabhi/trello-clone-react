import { useState } from 'react';
import './App.css';
import { Lists } from './Components/Lists/Lists';
import store from "./Data/store"
import storeApi from './Data/storeApi';
import { v4 as uuid } from "uuid"
import { InputContainer } from "./Components/Inputs/InputContainer"
import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background:"#70b8ff"
  }
}))
function App() {
  const [data, setData] = useState(store)
  const classes = useStyle()
  //add more card in cardlist..................
  const addMoreCard = (title,listId) => {
    //console.log(title,listId)
    const newCardId = uuid()
    //console.log(newCard)
    //here, updating the newCard with previous card.....
    const newCard = {
      id: newCardId,
      title,
    }
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    //update state after adding the newCard..............
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]:list,
      }
    }
    setData(newState)
  }
  return (
    <>
    <div className="App">TRELLO CLONE WITH REACT AND MATERIAL UI</div>
    <storeApi.Provider value={{addMoreCard}}>
      <div className={classes.root}>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <Lists list={list} key={listId} />
      })}
        <InputContainer />
        <InputContainer />
        <InputContainer />
        <InputContainer />
        <InputContainer />
    </div>
    </storeApi.Provider>
    </>  
  );
}

export default App;
