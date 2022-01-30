
import './App.css';
import Navbar from './component/Navbar';
import { Content } from './component/Content';
import { useState } from 'react';
import Fetch from './component/Fetch';

function App() {
  
  const [city, setCity] = useState();
  
  
  return (
    <>
    <Fetch >
    <div className="container">
    <Navbar setCity={setCity}  />
    <Content  city={city}/>
    </div>
    </Fetch>
    </>
    );
}

export default App;
