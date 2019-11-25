import React from 'react'

import './launches.scss';

const Launch = (props) => {
  return (
    <div className="launch-card">
      <h2>Flight #{props.launch.flight_number}</h2>
      <p><span>Mission Name: </span>{props.launch.mission_name}</p>
      <p><span>Launch Site: </span>{props.launch.launch_site.site_name_long}</p>
      {props.launch.details && <p><span>details: </span>{props.launch.details}</p>}
    </div>  
  )
}

export default Launch
