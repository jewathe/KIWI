import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

const LikeButton = () => {
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        setLiked(!liked)
    }

    return (
        <div>
            <button onClick={handleLike}>
                <FavoriteIcon color={liked ? 'error' : 'inherit'} />
            </button>
        </div>
    )
}

export default LikeButton
