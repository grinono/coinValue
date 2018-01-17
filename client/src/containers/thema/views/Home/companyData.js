import React, {Component} from 'react'
import Chart from './chart.js'
import {Row, Col, Card, CardHeader, CardFooter, CardBlock} from 'reactstrap'
import Widget01 from '../Widgets/Widget01'

export default class MainCompanyData extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <Chart />
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Widget01 color="primary" variant="inverse" header="Project phase" mainText='2 phase' smallText='benchmark between same phases' />
          </Col>
        </Row>
      </div>
    )
  }
}
