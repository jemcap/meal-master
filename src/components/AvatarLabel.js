import React from "react";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

function AvatarLabel (props) {
    const { label } = props;
    return (
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {label.charAt(0)}
        </Avatar>
    )
}

export default AvatarLabel
