import React from 'react'
import Card from 'react-bootstrap/Card'
import Description from '../../components/data/data'

const UnAuthHome = () => {
  const unauthStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 0
  }

  return (
    <Card style={unauthStyles}>
      <h1><img src="https://i.imgur.com/owjt5sE.png" width="350" /></h1>
      <Card.Body id="card-body">
        <Card.Header>{Description.name}</Card.Header>
        <Card.Header>{Description.desciption}</Card.Header>
        <Card.Header style={{ fontSize: '20px' }}>{Description.disclaimer}</Card.Header>
      </Card.Body>
    </Card>
  )
}

export default UnAuthHome
