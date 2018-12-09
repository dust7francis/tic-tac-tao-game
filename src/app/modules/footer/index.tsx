import './footer.scss'

import React from 'react'

import { Col, Row } from 'reactstrap'

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p>
          Tic-tac-toe is a paper-and-pencil game for two players, X and O, who
          take turns marking the spaces in a 3×3 grid.
        </p>
        <p>
          The player who succeeds in placing three of their marks in a
          horizontal, vertical, or diagonal row wins the game.
        </p>
      </Col>
    </Row>
  </div>
)

export default Footer
