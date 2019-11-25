import React from 'react'
import { connect } from 'react-redux';
import { getSpaceX } from '../actions';
import Launch from './Launch';

import './launches.scss';

const Launches = (props) => {
  return (
    <div>
      <button onClick={() => props.getSpaceX() } className="Btn" >
        Get Launches
      </button>
      <div className="launch-container">
        {props.error && <div>{props.error}</div>}

        {props.isLoading ? (
          <div>Loading...</div> 
        ) : (
          props.launches.map( (launch, index) => (
            <Launch key={index} launch={launch} />
          ))
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    launches: state.launches
  }
}

export default connect(mapStateToProps, { getSpaceX })(Launches)
