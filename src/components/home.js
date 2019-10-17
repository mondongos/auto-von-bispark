import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Plant from './plant'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <Plant/>
            </Container>
        )
    }
}