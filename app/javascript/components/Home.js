import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AddApt from './AddApt'
import Listings from './Listings'

class Home extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <React.Fragment>
        
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        
        <h1>home w/ some general about stuff</h1>
        
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/listings">Listings</Link>
                </li>
                <li>
                  <Link to="/addapt">Add New</Link>
                </li>
              </ul>
            </nav>
            
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/addapt" component={AddApt} />
          </div>
        </Router>

      </React.Fragment>
    );
  }
}

export default Home
