import React, {Component} from 'react'
import {Row, Col, CardColumns, Card, CardHeader, CardBlock, Progress, Button, ButtonToolbar, ButtonGroup, ButtonDropdown,} from 'reactstrap'

export default class Coin extends Component {
  render () {
    return (
            <Card>
              <CardHeader>
                Intro
              </CardHeader>
              <CardBlock className='card-body'>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/S0oNO3mbBE8" allowFullScreen></iframe>
                </div>
              </CardBlock>
            </Card>
    )
  }
}
