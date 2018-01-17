import React, {Component} from 'react'
import {Row, Col, CardColumns, Card, CardHeader, CardBlock, Progress, Button, ButtonToolbar, ButtonGroup, ButtonDropdown,} from 'reactstrap'
import { ReactTypeformEmbed } from 'react-typeform-embed';

export default class Rating extends Component {
  render () {
    return (
      <div>
        <ReactTypeformEmbed url={'https://bartel.typeform.com/to/fsgwiI'}/>
      </div>
    )
  }
}
