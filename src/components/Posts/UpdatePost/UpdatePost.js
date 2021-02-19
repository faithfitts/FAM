import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { updatePost, showPost } from '../../../api/posts'

class UpdatePost extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        title: '',
        imageURL: '',
        content: '',
        liked: false,
        comments: []
      },
      createId: null,
      updated: false
    }
  }

  handleClose = (event) => {
    const { history } = this.props
    history.push(`/posts/${this.props.match.params.id}`)
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return {
        post: { ...state.post, [event.target.name]: event.target.value }
      }
    })
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    const id = match.params.id
    showPost(id, user)
      .then(res => this.setState({ post: res.data.post }))
      .then(() => {
        msgAlert({
          heading: 'Show Success',
          message: 'Edit Post',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Show Failed',
          message: `Couldn't Show Because: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { post } = this.state

    const id = match.params.id

    updatePost(id, post, user)
      .then(res => {
        this.setState({ updated: true })
        return res
      })
      .then(res => msgAlert({
        heading: 'Updated Post Successfully',
        message: 'Update Successful',
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Failed to Post',
        message: `Failed to Post with error: ${error.message}`,
        variant: 'danger'
      }))
  }

  render () {
    const { updated } = this.state

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <h3>Update Your Post</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPicture">
            <Form.Label>Image</Form.Label>
            <Form.Control
              img="true"
              type="text"
              name="imageURL"
              placeholder="Enter Image URL Here"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Content"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>

      </div>
    )
  }
}

export default withRouter(UpdatePost)
