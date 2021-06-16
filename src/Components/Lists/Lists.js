import React from 'react'
import {CssBaseline,Paper} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Title } from "./Title"
import { Card } from "../Cards/Card"
import {InputContainer} from "../Inputs/InputContainer"

//this is for,give style to component........................
const useStyle = makeStyles((theme) => ({
    root: {
        width: "350px",
        backgroundColor: "#eec0ff",
        marginLeft: theme.spacing(1)

    }
}));
export const Lists = ({ list }) => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title} listId={list.id} />
                {list.cards.map((card) => {
                    return <Card key={card.id} card={card} />
                })}
                <InputContainer listId={list.id} type="card"/>
            </Paper>
        </div>
    )
}
