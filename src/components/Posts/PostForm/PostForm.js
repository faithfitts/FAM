import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        name="title"
        placeholder="Enter Name of Flower"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formBasicPicture">
      <Form.Label>Image</Form.Label>
      <Form.Control
        img="true"
        type="text"
        name="imageURL"
        placeholder="Enter Image URL Here"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formBasicContent">
      <Form.Label>Content</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        name="content"
        placeholder="Description"
        onChange={handleChange}
      />
    </Form.Group>

    <Button
      variant="primary"
      type="submit"
    >
      Submit
    </Button>
  </Form>
)
export default PostForm
