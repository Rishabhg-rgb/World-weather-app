import React, { useContext } from 'react';
import weather from './Context';
import Spinner from './Spinner';


export const Content = ({ city }) => {
  
  const { data , loading } = useContext(weather)

  return <div className='content'>
    {loading && <Spinner/>}
    <div className="upper">
    {data?<img src={data.current.condition.icon} alt="" /> :""}
    </div>
    <div className="middle">
      <div className="left">
        <div className="temp">
      {!data?"":data.current.temp_c}
      </div>
      <div className="weathertype">
      {!data?"":data.current.condition.text}
      </div>
      </div>
      <div className="right">
        <div className="time">
      <h3>{!data?"":data.location.localtime}</h3>
      </div>
      </div>
    </div>
    <div className="lower">
      <div className="pressure">
      &ensp;{!data?"":data.current.pressure_mb} <br />  
      <h6>Pressure</h6>
      </div>
      <div className="humidity">
      &ensp;{!data?"":data.current.humidity} <br />
      <h6>Humidity</h6>
      </div>
      <div className="speed">
      &ensp;{!data?"":data.current.wind_kph} <br />
      <h6>Speed</h6>
      </div>
    </div>
      </div>;
};
