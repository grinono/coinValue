import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import Header from './header/header'

export default class Theme extends Component {
  render () {
    return (
      <div className='app'>
        <Header />
        <div className='app-body'>
          {/* <Sidebar {...this.props}/> */}
          <main className='main'>
            {/* <Breadcrumb /> */}
            <div style={{marginTop:40}}></div>
              {this.props.children}
          </main>
          {/* <Aside /> */}
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
