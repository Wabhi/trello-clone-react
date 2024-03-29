import React from 'react'
import {CssBaseline,Paper} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Title } from "./Title"
import { Card } from "../Cards/Card"
import { InputContainer } from "../Inputs/InputContainer"
import {Droppable,Draggable} from "react-beautiful-dnd"

//this is for,give style to component........................
const useStyle = makeStyles((theme) => ({
    root: {
        width: "350px",
        backgroundColor: "#eec0ff",
        marginLeft: theme.spacing(1)
    },
    cardContainer: {
        marginTop:theme.spacing(4)
    }
}));
export const Lists = ({ list,index }) => {
    const classes = useStyle();
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef}>
                <Paper className={classes.root} {...provided.dragHandleProps}>
                    <CssBaseline />
                    <Title title={list.title} listId={list.id} />
                    <Droppable droppableId={list.id}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer}>
                             {list.cards.map((card,index) => {
                                 return <Card key={card.id} card={card} index={index}/>
                             })}
                             {provided.placeholder}
                            </div>
                        )}
                    </Droppable> 
                    <InputContainer listId={list.id} type="card"/>
                </Paper>
            </div>
            )}
        </Draggable>    
    )
}
