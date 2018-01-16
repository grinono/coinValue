import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

// import Widget02 from '../Widgets/Widget02'
import '../components/styles.css'
import CompanyData from '../components/companyData'
import Coin from '../components/coin'
import Theme from '../../common/components/web/theme/combine'


  // <Coin />
  // <CompanyData />
export default class Home extends Component {
  render () {
    return (
      <div>
        <Theme>
          <div className='animated fadeIn'>
            <div className="container-fluid h-100">
              <div className="row">
                <div className="col-4" id="left">
                  <Coin />
                </div>
                <div className="col-8" id="right">
                  <CompanyData />
                </div>
              </div>
            </div>
          </div>
        </Theme>
      </div>

    )
  }
}
