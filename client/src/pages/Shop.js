import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import TypeBar from "../components/TypeBar"

function Shop() {
  return (
    <div>
      <Container>
        <Row className="mt-2">
          <Col md={3}>
            <TypeBar />
          </Col>
          <Col md={9}>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Shop
