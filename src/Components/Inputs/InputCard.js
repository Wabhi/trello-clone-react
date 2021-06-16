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
export const InputCard = ({ setOpen,listId,type }) => {
    const [title, setTitle] = useState('')
    const {addMoreCard,addMoreList} = useContext(storeApi)
    const classes = useStyle()
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleAddButton = () => {
        if (type === "card") {
            addMoreCard(title,listId)
            setOpen(false)
            setTitle('')
        } else {
            addMoreList(title)
            setOpen(false)
            setTitle('')
        }
            
    }
    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleChange}
                        value={title}
                        multiline
                        fullWidth
                        inputProps={{ className: classes.input }}
                        placeholder={type==="card"?"Enter a title of card... ":"Enter a title of list..."}
                        // onBlur={()=>setOpen(false)}
                    />
                </Paper>
            </div> 
            <div className={classes.confirm}>
                <Button className={classes.btn} onClick={handleAddButton}>{type==="card"?"ADD CARD":"ADD LIST"}</Button>
                <IconButton>
                  <ClearButton onClick={()=>setOpen(false)}/>
                </IconButton>
            </div>
        </div>
    )
}
