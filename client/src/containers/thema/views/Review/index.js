import React, {Component} from 'react'
import {Row, Col, CardColumns, Card, CardHeader, CardBlock, Progress, Button, ButtonToolbar, ButtonGroup, ButtonDropdown,} from 'reactstrap'
import { ReactTypeformEmbed } from 'react-typeform-embed';

export default class Rating extends Component {
  render () {
    return (
      <div style={{width: '100%', height: 500, marginTop:100}}>
        {/* <p>sdfsd</p> */}
        <ReactTypeformEmbed opacity={'100%'} buttonText={'start'}  url={'https://bartel.typeform.com/to/fsgwiI'}/>
      </div>
    )
  }
}
