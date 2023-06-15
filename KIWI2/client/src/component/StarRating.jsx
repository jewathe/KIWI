import React from 'react'

const StarRating = ({ rating, totalStars, onRate }) => {
    const stars = []

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <span
                key={i}
                className={`star ${i <= rating ? 'filled' : 'empty'}`}
                onClick={() => onRate(i)}
            >
                &#9734;
            </span>
        )
    }

    return <div className='star-rating'>{stars}</div>
}

export default StarRating
