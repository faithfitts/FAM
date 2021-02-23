import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicTitle">
      <Form.Label style={{ marginTop: '30px', marginBottom: '-20px', fontSize: '20px' }}>Title</Form.Label>
      <Form.Control
        type="text"
        name="title"
        placeholder="Enter Name of Flower"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formBasicPicture">
      <Form.Label style={{ marginBottom: '-20px', fontSize: '20px' }}>Image</Form.Label>
      <Form.Control
        img="true"
        type="text"
        name="imageURL"
        placeholder="Enter Image URL Here"
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="formBasicContent">
      <Form.Label style={{ marginBottom: '-20px', fontSize: '20px' }}>Content</Form.Label>
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
