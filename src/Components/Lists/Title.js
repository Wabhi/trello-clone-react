import React, { useContext, useState } from 'react'
import { Typography, InputBase } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MoreHoriz from "@material-ui/icons/MoreHoriz"
import storeApi from '../../Data/storeApi'

const useStyle = makeStyles((theme) => ({
    editableStyleHorizen: {
        margin: theme.spacing(1),
        display:"flex"
    },
    editableStyle: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight:"bold"
    },
    input: {
        margin: theme.spacing(1),
        "&:focus": {
            background:"#fae878"
        }
    }
}))

export const Title = ({title,listId}) => {
    //state value to make editable or not...........
    const [text, setText] = useState(false)
    //to chnage the title means edit the title.........
    const [newText, setNewText] = useState(title)
    const {upadeteListTitle} = useContext(storeApi)
    const classes = useStyle()
    const handleInputChange = (e) => {
        setNewText(e.target.value)
    }
    const handleBlure = () => {
        upadeteListTitle(newText,listId)
        setText(false)
    }
    return (
        <div>
            {
                text ?
                    (<div>
                        <InputBase
                            onChange={handleInputChange}
                            value={newText}
                            inputProps={{
                                className:classes.input
                            }}
                            fullWidth
                            onBlur={handleBlure}
                        />
                        
                    </div>)
                    :
                    (<div className={classes.editableStyleHorizen}>
                        <Typography onClick={() => setText(!text)} className={classes.editableStyle}>
                            {title}
                        </Typography>
                        <MoreHoriz/>
                    </div>)
            }
        </div>
    )
}
