import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Cards({ item }) {
  return (

<Link to= {`restaurant/${item.id}`}>
  
      <Card className="my-3 p-3 rounded cards" >
        <Card.Img variant="top" src={item.photograph} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <p>
              <strong>Cuisine Type :</strong> {item.cuisine_type}
  
            </p>
          </Card.Text>
          <Card.Text>
            {item.neighborhood}
          </Card.Text>
  
  
        </Card.Body>
      </Card>

</Link>    )
}

export default Cards