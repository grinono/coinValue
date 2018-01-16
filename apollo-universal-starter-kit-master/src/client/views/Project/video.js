import React, { Component } from 'react';
import {
  Row,
  Col,
  CardColumns,
  Card,
  CardHeader,
  CardBlock,
  Progress,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown
} from 'reactstrap';

export default class Coin extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-6">
            <Card>
              <CardHeader>Intro</CardHeader>
              <CardBlock className="card-body">
                <iframe
                  width="auto"
                  height="auto"
                  src="https://www.youtube.com/embed/S0oNO3mbBE8"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                >
                  {' '}
                </iframe>
              </CardBlock>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
