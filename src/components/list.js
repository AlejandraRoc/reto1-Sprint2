import React, { Component } from "react";
import { Container,Navbar} from "react-bootstrap";
import Card from "./Card";

export default class List extends Component {
    constructor() {
        super()
            this.state = {
                jobs: []
            }
    }

    componentDidMount() {
        console.log('Se acaba de montar');
        this.getEmpleo()
    }

    getEmpleo = async () => {
        const url = 'https://rickandmortyapi.com/api/character/'
        const resp = await fetch(url)

        // const data = await resp.json()
        // const {results} = data

        const { results } = await resp.json()

        this.setState({
            jobs: results
        })
    }

    render() {
        return (
            
            <Container>
               <Navbar expand="xl" variant="dark" bg="hsl(180, 29%, 50%)">Navbar</Navbar>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        this.state.jobs.map((Empleo, index) => (
                            <Card Empleo={Empleo} key={index}
                            />
                        ))
                    }
                </div>

            </Container>
        );
    }
}