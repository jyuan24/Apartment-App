import React from "react"
import PropTypes from "prop-types"
import {getListings} from '../api'
import {BrowserRouter as Link} from 'react-router-dom'


class Listings extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        listings: [],
        errors: null
      }
      this.loadListings()
  }
  
  loadListings = () => {
    getListings()
    .then((response)=>{
      if(response.error){
        // some error
      }else{
        this.setState({listings: response})
      }
    })
  }
  
  render () {
    const{errors, listings} = this.state
    return (
      <React.Fragment>
        <h1>check out my cribs</h1>
        
        {errors &&
        <div>
          <h3>There is a problem</h3>
          <ul>
            {errors.map((error) => <li>error</li>)}
          </ul>
        </div>
        }
        <ul>
          {listings.map((listing, index)=>{
            return(
            <div key={index}>
              <li>
                <Link to = {`/${listing.id}`}>Adress: {listing.address}</Link>
              </li>
            </div>
            )
          })}
        </ul>
        
      </React.Fragment>
    );
  }
}

export default Listings
