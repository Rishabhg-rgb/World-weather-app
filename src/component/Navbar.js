import React, { useContext, useState } from 'react';
import weather from './Context';

const Navbar = ({ setCity }) => {
    const [value, setValue] = useState("");
    const context = useContext(weather)
    const { fetchNews } = context

    const onChange = (e) => {
        setValue(e.target.value)

    }




    const onClick = () => {
        setCity(value)
        fetchNews(value)
    }
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light my-4 ">
            <div className="container-md" style={{ display: "flex", justifyContent: "center" }}>
                <input className='search' value={value} type="search" onChange={onChange} placeholder='Enter the City you want to know' />
                <button className='btnsearch' onClick={onClick} >Search</button>
            </div>
        </nav>
    </div>;
};

export default Navbar;

