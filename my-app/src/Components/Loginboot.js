import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
function Loginboot() {
  return (
    <div
      style={{
        display: "center",
        placeContent: "center",
        marginTop: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "10%",

        border: "1px solid gray",
        padding: "10px",
        width: "500px",
        height: "300px",
      }}
    >
      <Container>
        <Row>
          <Col lg={8}>
            {/* // lg={5} md={8} sm={10}> */}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Loginboot;
