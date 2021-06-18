// import { useState } from 'react';
// import './App.css';
// import { Lists } from './Components/Lists/Lists';
// import store from "./Data/store"
// import storeApi from './Data/storeApi';
// import { v4 as uuid } from "uuid"
// import { InputContainer } from "./Components/Inputs/InputContainer"
// import { makeStyles } from "@material-ui/core/styles"
// import {DragDropContext,Droppable} from "react-beautiful-dnd"

// // to use drag and drop for specific area, used react-beautiful-dnd
// // <DragDropContext /> - Wraps the part of your application you want to have drag and drop enabled for
// // <Droppable /> - An area that can be dropped into. Contains <Draggable />s
// // <Draggable /> - What can be dragged around

// const useStyle = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     minHeight: "100vh",
//     background: "#70b8ff",
//     width: "100%",
//     overflow:"auto"
//   }
// }))
// function App() {
//   const [data, setData] = useState(store)
//   const classes = useStyle()
//   //add more card in cardlist...........................................................
//   const addMoreCard = (title,listId) => {
//     //console.log(title,listId)
//     const newCardId = uuid()
//     //console.log(newCard)
//     //here, updating the newCard with previous card.....
//     const newCard = {
//       id: newCardId,
//       title,
//     }
//     const list = data.lists[listId]
//     list.cards = [...list.cards, newCard]
//     //update state after adding the newCard..............
//     const newState = {
//       ...data,
//       lists: {
//         ...data.lists,
//         [listId]:list,
//       }
//     }
//     setData(newState)
//   }
//   //add more list...........................................................................
//   const addMoreList = (title) => {
//     //console.log('clicked!!!!!!!!!!!!')
//     //creating new list id...
//     const newListId = uuid()
//     //creating new list...
//     const newList = {
//       id: newListId,
//       title,
//       cards:[]
//     }
//     //creating new state...
//     const newState = {
//       listIds: [...data.listIds, newListId],
//       lists: {
//         ...data.lists,
//         [newListId]:newList
//       }
//     }
//     setData(newState)
//   }
//   //change the listTitle/make list title editable........................................
//   const upadeteListTitle = (title, listId) => {
//     console.log('clicked')
//     const list = data.lists[listId]
//     list.title = title
//     const newState = {
//       lists: {
//         ...data.lists,
//         [listId]:list
//       }
//     }
//     setData(newState)
//   }
//   //to handle drang and drop, because when we drag and and drop content goes back same place where it was before............
//   const handleOnDrangEnd = (result) => {
//     const { destination, source, draggableId, type } = result
//     //Destination=>to where we will dropp............
//     //Source=>from where we are dragging...........
//     //DraggableId=>which one we are dragging with id number...........
//     //console.log(destination,source,draggableId)
//     const sourceList = data.lists[source.droppableId]
//     const destinationList = data.lists[destination.droppableId]
//     //1.check the destination first where content is going ,if it going outside then it will return null ,so for that we use return
//     if (!destination) {
//       return
//     }
//     if (type === "list") {
//       const newListIds = data.listIds
//       newListIds.splice(source.index, 1)
//       newListIds.splice(destination.index,0,draggableId)
//       return
//     }
//     //2.
//     const draggingCard = sourceList.cards.filter(card => card.id === draggableId)[0]
    
//     //checking for same source and destination..................
//     if (source.droppableId === destination.droppableId) {
//       sourceList.cards.splice(source.index, 1)
//       destinationList.cards.splice(destination.index, 0, draggingCard)
//       //updating the state...
//       const newState = {
//         ...data,
//         lists: {
//           ...data.lists,
//           [sourceList.id]:destinationList
//         }
//       }
//       setData(newState)
//     }
//     //if same source and destination is not found........
//     else {
//       sourceList.cards.splice(source.index, 1)
//       destinationList.cards.splice(destination.index, 0, draggingCard)
//       const newState = {
//         ...data,
//         lists: {
//           ...data.lists,
//           [sourceList.id]: sourceList,
//           [destinationList.id]:destinationList
//         }
//       }
//       setData(newState)
//     }
//   }
//   return (
//     <>
//     <div className="App">TRELLO CLONE WITH REACT AND MATERIAL UI</div>
//       <storeApi.Provider value={{ addMoreCard, addMoreList, upadeteListTitle }}>
//         <DragDropContext onDragEnd={handleOnDrangEnd}>
//           <Droppable droppableId="app" type="list" direction="horizontal">
//             {(provided) => (
//               <div className={classes.root} ref={provided.innerRef} {...provided.droppableProps}>
//                 {data.listIds.map((listId,index) => {
//                   const list = data.lists[listId];
//                   return <Lists list={list} key={listId} index={index} />
//                 })}
//                 <InputContainer type="list" />
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//     </storeApi.Provider>
//     </>  
//   );
// }

// export default App;
import React from 'react'
import Wrapper from './Components/Wrapper'

const App = () => {
  return (
    <div>
      <Wrapper/>
    </div>
  )
}

export default App
