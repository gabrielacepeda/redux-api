import React from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Animated } from "react-animated-css";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import store from "../store";

import Quakes from "./Quakes";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Container>
            <Navbar />

            <Row>
              <Col xs="6">
                <Jumbotron>
                  <Animated
                    animationInDelay={100}
                    animationIn="fadeIn"
                    animationOut="fadeOut"
                    isVisible
                  >
                    <div className="ta-c p-h200 t--intro">
                      <br />
                      <br />
                      <br />
                      <br />
                      <>
                        Quakes:
                        <Quakes />
                      </>
                      <br />
                      <br />
                      <br />
                    </div>
                  </Animated>
                </Jumbotron>
              </Col>
            </Row>
            <Footer />
          </Container>
        </Provider>
      </div>
    );
  }
}
