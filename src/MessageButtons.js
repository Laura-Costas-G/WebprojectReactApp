import { useState } from "react"

import { Favorite, FavoriteBorderOutlined, Reply, Star, StarBorderOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

import useUserStore from "./stores/user";

function MessageButtons() {
    const color = useUserStore(s => s.color)

    const [fav, setFav] = useState(false)
    const [like, setLike] = useState(false)

    function toggleFav() {
        setFav(!fav)
    }
    function toggleLike() {
        setLike(!like)
    }

    return ( 
        <Box>
            <IconButton onClick={toggleFav}>{fav ? <Star style={color ? {color: "yellow"} : null}/> : <StarBorderOutlined/>}</IconButton>
            <IconButton onClick={toggleLike}>{like ? <Favorite style={color ? {color: "red"} : null}/> : <FavoriteBorderOutlined/>}</IconButton>
            <IconButton><Reply/></IconButton>
        </Box>
    );
}

export default MessageButtons;