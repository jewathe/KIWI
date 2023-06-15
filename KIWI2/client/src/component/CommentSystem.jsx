import React, { useState } from 'react'
import '../css/style.css'

const CommentSystem = () => {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const handleCommentChange = (event) => {
        setNewComment(event.target.value)
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault()
        if (newComment.trim() === '') return

        const updatedComments = [...comments, newComment]
        setComments(updatedComments)
        setNewComment('')
    }

    return (
        <div class='commentaire'>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder='Enter your comment...'
                />
                <button type='submit'>Envoyer</button>
            </form>
            <div>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentSystem
