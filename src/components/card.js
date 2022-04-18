import React, { Component } from "react";
import { Card} from "react-bootstrap";

export default class Cards extends Component {
    render() {
        const { itemStart, role, level, languages, Img,tools} = this.props.Empleo

        return (
          
            <div>
              
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Img} />
                <Card.Body>
                  <Card.Title>{role}</Card.Title>
                  <Card.Text>
                    {itemStart}
                  </Card.Text>
                  <Card.Text>
                    {level}
                  </Card.Text>
                  <Card.Text>
                    {languages}
                  </Card.Text>
                  <Card.Text>
                    {tools}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        );
    }
}