import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, CardColumns, Card, CardHeader, CardBlock, Progress, Button, ButtonToolbar, ButtonGroup, ButtonDropdown,} from 'reactstrap'

export default class reviewICO extends Component {
  render () {
    return (
      <Card>
        <CardHeader>
          Your imput
        </CardHeader>
        <CardBlock className='card-body'>
          <Link to="/review">
            <Button color="secondary" size="lg" block>Review this ICO</Button>
          </Link>
        </CardBlock>
      </Card>
    )
  }
}
