import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

// import Widget02 from '../Widgets/Widget02'
import './styles.css'
import CompanyData from './companyData'
import Coin from './coin'

export default class Home extends Component {
  render () {
    return (
      <div className='animated fadeIn'>
        <Row>
            <Coin />
             <div className='col-8 fixed'>
               <div className="sticky-top" style={{marginTop:0}}>
                 <CompanyData />
               </div>
             </div>
          </Row>
      </div>
    )
  }
}
