import React, { useState } from 'react';
import weather from './Context';
const Fetch = (props) => {
    const [data, setData] = useState();
    const [loading , setLoading] = useState(false)
  const fetchNews = async(city)=>{
    setLoading(true)
    const url = `http://api.weatherapi.com/v1/current.json?key=39afc63c64b0405dafa180237222901&q=${city}&aqi=yes`
    const news =  await fetch(url)        
    const parsedData = await news.json()
    setData(parsedData)
    setLoading(false)
    }
  return <div>
      <weather.Provider value={{data,fetchNews,loading}}>
        {props.children}
      </weather.Provider>
  </div>;
};

export default Fetch;
