import React, { Component } from 'react';
import Widget02 from '../Widgets/Widget02';
import './styles.css';
import CompanyData from './companyData';
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
      <div className="col-3 scrollit">
        <Col xs="12" sm="12" lg="12">
          <Widget02 header="Bitcoin" mainText="Income" icon="fa fa-cogs" color="primary" />
        </Col>
        <Col xs="12" sm="12" lg="12">
          <Widget02 header="Litecoin" mainText="Income" icon="fa fa-laptop" color="primary" />
        </Col>
        <Col xs="12" sm="12" lg="12">
          <Widget02 header="Etherium" mainText="Income" icon="fa fa-moon-o" color="primary" />
        </Col>
        <Col xs="12" sm="12" lg="12">
          <Widget02 header="Ripple" mainText="Income" icon="fa fa-bell" color="primary" />
        </Col>
        <Col xs="12" sm="12" lg="12">
          <Widget02 header="Dash" mainText="Income" icon="fa fa-bell" color="primary" />
        </Col>
        <Col xs="12" sm="12" lg="12">
          <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-bell" color="primary" />
        </Col>
      </div>
    );
  }
}
