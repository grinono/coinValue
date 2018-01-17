import React, {Component} from 'react'
import Widget02 from '../Widgets/Widget02'
import './styles.css'
import CompanyData from './companyData'
import { Link } from 'react-router-dom'
import {Row, Col, CardColumns, Card, CardHeader, CardBlock, Progress, Button, ButtonToolbar, ButtonGroup, ButtonDropdown,} from 'reactstrap'

export default class Coin extends Component {

  goProjectPage() {
    console.log('click')
    return (
      <Link to="/about">About</Link>
    )
  }

  render () {
    return (
      <div className=''>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Etherium' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
        <Link to="/project/bitcoin">
          <Col xs='12' sm='12' lg='12'>
            <Widget02 header='Bitcoin' mainText='Income' icon='fa fa-cogs' color='primary'/>
          </Col>
        </Link>
       </div>
    )
  }
}
