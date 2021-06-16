import React, { useState } from 'react'
import { Typography, InputBase } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MoreHoriz from "@material-ui/icons/MoreHoriz"

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

export const Title = ({title}) => {
    //state value to make editable or not...........
    const [text, setText] = useState(false)
    const classes = useStyle()
    return (
        <div>
            {
                text ?
                    (<div>
                        <InputBase
                            value={title}
                            inputProps={{
                                className:classes.input
                            }}
                            fullWidth
                            onBlur={()=>setText(!text)}
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
