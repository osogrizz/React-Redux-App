import React from 'react';
import { connect } from 'react-redux';
import { getSpaceX } from './actions';

import './App.css';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Space X Upcoming Launches</h1>
      <button onClick={() => props.getSpaceX() } >
        Get Launches
      </button>

      {props.error && <div>{props.error}</div>}

      {props.isLoading ? (
        <div>Loading...</div> 
      ) : (
        props.launches.map( (launch, index) => (
          <div key={index}>
            <h2>Flight #{launch.flight_number}</h2>
            <p>Mission Name: {launch.mission_name}</p>
            <p>Launch Site: {launch.launch_site.site_name_long}</p>
            {launch.details && <p>details: {launch.details}</p>}
          </div>  
        ))
      )}

    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    launches: state.launches
    // launch: state.launch
  }
}

export default connect(mapStateToProps, { getSpaceX })(App);
