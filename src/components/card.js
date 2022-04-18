import React, { Component } from "react";
import { Card} from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { name, status, species, gender, image} = this.props.Empleo

        return (
          
            <div>
              
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {status}
                  </Card.Text>
                  <Card.Text>
                    {species}
                  </Card.Text>
                  <Card.Text>
                    {gender}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        );
    }
}