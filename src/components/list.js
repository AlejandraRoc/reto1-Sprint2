import React, { Component } from "react";
import { Container } from "react-bootstrap";
import card from "./card";

export default class list extends Component {
    constructor() {
        super()
        this.state = {
            personajes: []
        }
    }

    componentDidMount() {
        console.log('Se acaba de montar');
        this.getPersonaje()
    }

    getPersonaje = async () => {
        const url = 'https://rickandmortyapi.com/api/character/'
        const resp = await fetch(url)

        // const data = await resp.json()
        // const {results} = data

        const { results } = await resp.json()

        this.setState({
            personajes: results
        })
    }

    render() {
        return (
            <Container>
                <h1 color="white" >Lista de personajes</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        this.state.personajes.map((ricky, index) => (
                            <card ricky={ricky} key={index}
                            />
                        ))
                    }
                </div>

            </Container>
        );
    }
}