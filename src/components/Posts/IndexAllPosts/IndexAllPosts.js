import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import { postIndexAll } from './../../../api/posts'

const cardContainerLayout = {
  display: 'inline-flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
  marginLeft: -600,
  marginRight: -600,
  marginTop: -150,
  padding: 200
}

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
      <Card key={post._id} className='content-bg' style={{ border: '5px solid #2e0854', margin: '5px', padding: '5px', width: '17%', marginTop: '10px' }}>
        <Card.Img src={post.imageURL} style={{ height: '18rem' }} />
        <Card.Body>
          <Card.Title style={{ fontSize: '33px' }}>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Card.Link className='content-sm' href={`#posts/${post._id}`}> Click Here To Learn More!</Card.Link>
        </Card.Body>
      </Card>
    ))

    return (
      <div className='content-md' style={cardContainerLayout}>
        { postsJsx }
      </div>
    )
  }
}

export default PostIndexAll
