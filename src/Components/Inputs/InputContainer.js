import { Collapse, Paper,Typography} from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles, fade } from "@material-ui/core/styles"
import {InputCard} from "./InputCard"

const useStyle = makeStyles((theme) => ({
    root: {
        width: "350px",
        marginTop:theme.spacing(1)
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: "#1fa643",
        fontSize: "1.2rem",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor:fade('#000',0.25)
        }
    }
}))
export const InputContainer = ({listId,type}) => {
    const classes = useStyle()
    const [open,setOpen] = useState(false)
    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId} type={type}/>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} onClick={()=>setOpen(!open)}>
                    <Typography>{type==="card"?"+ ADD A CARD":"+ ADD A LIST"}</Typography>
                </Paper>
            </Collapse>
        </div>
    )
}
