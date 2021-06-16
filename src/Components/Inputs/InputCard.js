import React, { useContext, useState } from 'react'
import { Paper, InputBase, Button, IconButton } from "@material-ui/core"
import ClearButton from "@material-ui/icons/Clear"
import { makeStyles } from "@material-ui/core/styles"
import storeApi from '../../Data/storeApi'

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom:theme.spacing(5)
    },
    input: {
        margin:theme.spacing(1)
    },
    btn: {
        background: "#1b75bc",
        color:"white"
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),   
    }
}))
export const InputCard = ({ setOpen,listId }) => {
    const [cardTitle, setCardTitle] = useState('')
    const {addMoreCard} = useContext(storeApi)
    const classes = useStyle()
    const handleChange = (e) => {
        setCardTitle(e.target.value)
    }
    const handleAddButton = () => {
        addMoreCard(cardTitle,listId)
        setOpen(false)
        setCardTitle('')
    }
    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleChange}
                        value={cardTitle}
                        multiline
                        fullWidth
                        inputProps={{ className: classes.input }}
                        placeholder="Enter a title of card... "
                        onBlur={()=>setOpen(false)}
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btn} onClick={handleAddButton}>ADD CARD</Button>
                <IconButton>
                  <ClearButton onClick={()=>setOpen(false)}/>
                </IconButton>
            </div>
        </div>
    )
}
