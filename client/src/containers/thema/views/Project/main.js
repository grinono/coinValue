import React, {Component} from 'react'
import {Bar, Line} from "react-chartjs-2"
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBlock,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from "reactstrap"
import Video from './video'
import ReviewICO from './reviewICO'

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';


// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients'
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews'
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic'
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR'
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate'
  }
];

const sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false,
    }],
    yAxes: [{
      display: false,
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  },
  legend: {
    display: false
  }
};


const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Technology', 'Team', 'Marketing', 'Product', 'Financials', 'Community'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label
      }
    ],
  };
  return () => data;
};


export default class Project extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <Row>
          <Col xs="12" md="8" xl="8">
            <Video />
          </Col>
          <Col xs="12" md="4" xl="4">
            <ReviewICO />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Analytics
              </CardHeader>
              <CardBlock className="card-body">
                <Row>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">New Clients</small>
                          <br/>
                          <strong className="h4">9,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30}/>
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Recurring Clients</small>
                          <br/>
                          <strong className="h4">22,643</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30}/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars">
                      <li>
                        <div className="title">
                          Technology
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="34"/>
                          <Progress className="progress-xs" color="danger" value="78"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Team
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="56"/>
                          <Progress className="progress-xs" color="danger" value="94"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Marketing
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="12"/>
                          <Progress className="progress-xs" color="danger" value="67"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Product
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="43"/>
                          <Progress className="progress-xs" color="danger" value="91"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Financials
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="22"/>
                          <Progress className="progress-xs" color="danger" value="73"/>
                        </div>
                      </li>
                      <li>
                        <div className="title">
                          Community
                        </div>
                        <div className="bars">
                          <Progress className="progress-xs" color="info" value="53"/>
                          <Progress className="progress-xs" color="danger" value="82"/>
                        </div>
                      </li>
                      <li className="legend">
                        <Badge pill color="info"></Badge>
                        <small>First 10 reviews</small>
                        &nbsp; <Badge pill color="danger"></Badge>
                        <small>last 10 reviews</small>
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" md="6" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Pageviews</small>
                          <br/>
                          <strong className="h4">78,623</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30}/>
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">Organic</small>
                          <br/>
                          <strong className="h4">49,123</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30}/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0"/>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="icon-user"></i>
                        <span className="title">Following Roadmap</span>
                        <span className="value">43%</span>
                        <div className="bars">
                          <Progress className="progress-xs" color="warning" value="43"/>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <i className="icon-globe"></i>
                        <span className="title">Organic Search</span>
                        <span className="value">191,235 <span className="text-muted small">(56%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="56"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-facebook"></i>
                        <span className="title">Facebook</span>
                        <span className="value">51,223 <span className="text-muted small">(15%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="15"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-twitter"></i>
                        <span className="title">Twitter</span>
                        <span className="value">37,564 <span className="text-muted small">(11%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="11"/>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-linkedin"></i>
                        <span className="title">LinkedIn</span>
                        <span className="value">27,319 <span className="text-muted small">(8%)</span></span>
                        <div className="bars">
                          <Progress className="progress-xs" color="success" value="8"/>
                        </div>
                      </li>
                      <li className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="" data-original-title="show more"><i className="icon-options"></i></Button>
                      </li>
                    </ul>
                  </Col>
                  <Col xs="12" xl="4">
                    <Row>
                      <Col sm="6">
                        <div className="callout">
                          <small className="text-muted">CTR</small>
                          <br/>
                          <strong className="h4">23%</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(4)} options={sparklineChartOpts} width={100} height={30}/>
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-primary">
                          <small className="text-muted">Bounce Rate</small>
                          <br/>
                          <strong className="h4">5%</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(5, brandPrimary)} options={sparklineChartOpts} width={100} height={30}/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0"/>
                    {/* <ul className="icons-list">
                      <li>
                        <i className="icon-screen-desktop bg-primary"></i>
                        <div className="desc">
                          <div className="title">iMac 4k</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.924</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-info"></i>
                        <div className="desc">
                          <div className="title">Samsung Galaxy Edge</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.224</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-screen-smartphone bg-warning"></i>
                        <div className="desc">
                          <div className="title">iPhone 6S</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>1.163</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-user bg-danger"></i>
                        <div className="desc">
                          <div className="title">Premium accounts</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>928</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-social-spotify bg-success"></i>
                        <div className="desc">
                          <div className="title">Spotify Subscriptions</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Sold this week</div>
                          <strong>893</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-cloud-download bg-danger"></i>
                        <div className="desc">
                          <div className="title">Ebook</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Downloads</div>
                          <strong>121.924</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li>
                        <i className="icon-camera bg-warning"></i>
                        <div className="desc">
                          <div className="title">Photos</div>
                          <small>Lorem ipsum dolor sit amet</small>
                        </div>
                        <div className="value">
                          <div className="small text-muted">Uploaded</div>
                          <strong>12.125</strong>
                        </div>
                        <div className="actions">
                          <Button color="link" className="text-muted"><i className="icon-settings"></i></Button>
                        </div>
                      </li>
                      <li className="divider text-center">
                        <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                                title="show more"><i className="icon-options"></i></Button>
                      </li>
                    </ul> */}
                  </Col>
                </Row>
                <br/>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-default">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>User</th>
                    {/* <th className="text-center">Country</th> */}
                    <th>Total allocated points</th>
                    {/* <th className="text-center">Payment Method</th> */}
                    {/* <th>Activity</th> */}
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      {/* <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                      </td> */}
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>71%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">1 jan, 2018</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="71"/>
                      </td>
                      {/* <td className="text-center">
                        <i className="fa fa-cc-mastercard" style={{fontSize: 24 + 'px'}}></i>
                      </td> */}
                      {/* <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td> */}
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar">
                          <img src={'img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                          <span className="avatar-status badge-success"></span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      {/* <td className="text-center">
                        <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                      </td> */}
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>65%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">1 jan, 2018</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="65"/>
                      </td>
                      {/* <td className="text-center">
                        <i className="fa fa-cc-mastercard" style={{fontSize: 24 + 'px'}}></i>
                      </td> */}
                      {/* <td>
                        <div className="small text-muted">Last login</div>
                        <strong>10 sec ago</strong>
                      </td> */}
                    </tr>
                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}
