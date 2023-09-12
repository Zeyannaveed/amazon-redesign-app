import React from "react";
import amazonLogo from "../amazon logo.png";
import searchicon from "../searchicon.png";
import cartimg from "../cartimg.png";
import accountimg from "../accountimg.png";
import Account from "./Account";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


// import { BrowserRouter as Router,Link } from 'react-router-dom'

export default function Navbar() {
  const [display, setdisplay] = useState(false);
  const [inputdata, setinputdata] = useState('');
  function displayit() {
    setdisplay(true);
  }
  function notdisplayit() {
    setdisplay(false);
  }
  let navigate = useNavigate()

  const searchfunc = (e)=>{
if(e.key==="Enter"){
navigate("/search",{state:{search:inputdata}})
}

  }



  return (
    <>
     <div>
  <header className="text-white background body-font">
    <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
      <a
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        href="/"
      >
        <img src={amazonLogo} className="w-28 -ml-8" alt="" />
        <span className="ml-3 text-xl"></span>
      </a>
      <div className="">
      <div className="ml-28  flex">
        <input
          value={inputdata}
          onChange={(e) => {
            setinputdata(e.target.value);
          }}
          onKeyPress={searchfunc}
          type="text"
          size=""
          className="input max-md:-ml-20 h-10 rounded-tl-lg rounded-bl-lg p-2 text-base border text-white "
          placeholder="Search..."
        />
        <span className="orange cursor-pointer rounded-tr-lg rounded-br-lg">
          <Link state={{ search: inputdata }} to="/search">
            
            <img
              src={searchicon}
              onClick={searchfunc}
              className="w-10"
              alt=""
            />
          </Link>
        </span>
      </div>
      </div>
<div className="md:ml-auto flex">
      <div className="ml-auto justify-center  flex items-center">
        <Link to='/cart'>
        <img
          src={cartimg}
          className="w-10 p-2 orange justify-center rounded-lg"
          alt=""
        />
      </Link>
        <img
          onMouseLeave={notdisplayit}
          onMouseEnter={displayit}
          src={accountimg}
          className="w-9 justify-center ml-2"
          alt=""
        />
      </div>
    </div>
    <div onMouseLeave={notdisplayit} onMouseEnter={displayit}>
      {display && <Account />}
    </div>
    </div>
  </header>
</div>

    </>
  );
}
