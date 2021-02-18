import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'
import { commentDestroy } from '../../../api/comments'

const ShowComments = props => {
  const { post } = props
  const [deleted, setDeleted] = useState(false)
  const [updateClicked, setUpdateClicked] = useState(false)
  const [commentId, setCommentId] = useState(null)
  const [commentsList] = useState(post.comments)

  const commentDelete = (commentId, event) => {
    const { user, post, msgAlert } = props
    const postId = post._id
    commentDestroy(commentId, postId, user)
      .then(setDeleted(true))
      .then(() => msgAlert({
        message: 'Your Comment Has Been Deleted',
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Comment Delete Failed',
        message: `Couldn't Delete Because: ${error.message}`,
        variant: 'danger'
      }))
  }

  const handleUpdateClicked = (commentId, event) => {
    setUpdateClicked(true)
    setCommentId(commentId)
  }

  const commentsJsx = commentsList.map(comment => (
    <li
      key={comment._id}>
      {comment.content}

      <Button
        variant="primary"
        type="button"
        onClick={(event) => handleUpdateClicked(comment._id, event)}
      >
        Update
      </Button>
      <button
        onClick={(event) => commentDelete(comment._id, event)}>Delete Comment</button>
    </li>
  ))

  if (updateClicked) {
    return (
      <div>

        <Button
          variant="primary"
          type="submit"
        >
            Submit
        </Button>

        <div className="showCommentContainer">
          <ul>
            {commentsJsx}
          </ul>
        </div>
      </div>
    )
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/index-user' }
    } />
  }

  if (commentId) {}
  return (
    <div className="showCommentContainer">
      <ul>
        {commentsJsx}
      </ul>
    </div>
  )
}

export default ShowComments
