import React, {Component} from 'react'
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2'
import {Row, Col, CardColumns, Card, CardHeader, CardBlock, Progress, Button, ButtonToolbar, ButtonGroup, ButtonDropdown,} from 'reactstrap'

const doughnut = {
  labels: [
    'Good',
    'Bad'
  ],
  datasets: [{
    data: [300, 150],
    backgroundColor: [
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#36A2EB',
      '#FFCE56'
    ]
  }]
}

export default class ChartsHome extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <Row>
          <Col >
            <Card>
              <CardHeader>
                Overall investment rating
              </CardHeader>
              <CardBlock className='card-body'>
                <div className='chart-wrapper'>
                  <Doughnut data={doughnut}/>
                </div>
              </CardBlock>
            </Card>
          </Col>
          <Col >
            <Card>
              <CardBlock className='card-body'>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="icon-user"></i>
                        <span className="title">Technology</span>
                        <span className="value">43%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="43"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Team</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="37"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Marketing</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="India" value="37"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Product</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="danger" value="37"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Financials</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="37"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user-female"></i>
                        <span className="title">Community</span>
                        <span className="value">37%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="37"/>
                        </div>
                      </li>
                    </ul>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
