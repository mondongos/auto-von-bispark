import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default class SoilPH extends React.Component {
    render() {
        return (
            <Container className="soilph-container">
                <Row>
                    <Col className="soilph-level" xs={6}>
                        {this.props.soilPH}
                    </Col>
                    <Col xs={6}>
                        <Image src="/Users/maxwellvanaken/Projects/gangs-of-seaton-plant-machine/public/drop-silhouette.png" thumbnail/>
                    </Col>
                </Row>
            </Container>
        )
    }
}