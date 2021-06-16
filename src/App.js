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
  //add more card in cardlist...........................................................
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
  //add more list...........................................................................
  const addMoreList = (title) => {
    //console.log('clicked!!!!!!!!!!!!')
    //creating new list id...
    const newListId = uuid()
    //creating new list...
    const newList = {
      id: newListId,
      title,
      cards:[]
    }
    //creating new state...
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]:newList
      }
    }
    setData(newState)
  }
  //change the listTitle/make list title editable........................................
  const upadeteListTitle = (title, listId) => {
    console.log('clicked')
    const list = data.lists[listId]
    list.title = title
    const newState = {
      lists: {
        ...data.lists,
        [listId]:list
      }
    }
    setData(newState)
  }
  return (
    <>
    <div className="App">TRELLO CLONE WITH REACT AND MATERIAL UI</div>
    <storeApi.Provider value={{addMoreCard,addMoreList,upadeteListTitle}}>
      <div className={classes.root}>
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <Lists list={list} key={listId} />
      })}
          <InputContainer type="list"/>
    </div>
    </storeApi.Provider>
    </>  
  );
}

export default App;
