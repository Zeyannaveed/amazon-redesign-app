import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Account() {
  const dlt = ()=>{
    localStorage.removeItem('ath_token')
  }
const [Account,setAccount] = useState(false)
useEffect(() => {
  if(localStorage.getItem('ath_token')){
    setAccount(true)
  }
}, [])

  return (
    <div className='absolute  right-0 background px-4 rounded-xl max-md:mr-20 py-4 mr-10'>
  
      {!Account ? <span  ><Link to={"/signup"}><h5 className='hover:bg-orange-dark rounded px-2 py-1'>Sign Up</h5></Link><Link to={"/Login"}><h5 className='hover:bg-orange-dark rounded px-2 py-1'>Login in</h5></Link></span>  :  <Link to={"/"}><h5 onClick={dlt} className='hover:bg-orange-dark rounded px-2 py-1'>Logout</h5></Link> }
        
    </div>
  )
}
