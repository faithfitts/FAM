import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import { postIndexAll } from './../../../api/posts'

class PostIndexAll extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: null
    }
  }
  componentDidMount () {
    const { msgAlert, user } = this.props

    postIndexAll(user)
      .then(res => {
        this.setState({ posts: res.data.post })
      })
      .then(() => msgAlert({
        heading: 'Welcome To The Home Page',
        message: 'Click A Flower To See Details',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Can Not Load Flowers',
          message: `could not load posts: ${error.message}`,
          variant: 'danger'
        })
      })
  }

  render () {
    const { posts } = this.state
    if (!posts) {
      return 'Loading...'
    }

    const postsJsx = posts.map(post => (
      <Card key={post._id} className='content-bg' style={{ border: '1px solid #FFFF00', margin: '10px', padding: '10px', width: '25%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><img src={post.imageURL} /></Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
          <Card.Link href={`#posts/${post._id}`}>View Comments</Card.Link>
        </Card.Body>
      </Card>
    ))

    return (
      <div>
        <h2>Welcome</h2>
        <ul>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {postsJsx.reverse()}
          </div>
        </ul>
      </div>
    )
  }
}

export default PostIndexAll
