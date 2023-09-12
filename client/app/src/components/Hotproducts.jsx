import React from 'react'
import {Link} from 'react-router-dom'

export default function Hotproducts({product:{_id,img,name,price,catagory},}) {

  return (

    <>
    <div key={_id} className='bg-white p-4 rounded-xl w-80 m-3'>
        <img src={`${process.env.REACT_APP_IMG}${img}`} className="h-60" alt="" />
    <Link to={`/product/${_id}`}>
        <h1 className='font-semibold text-xl mt-2'>
 {name}
        </h1>
        <h6 className="text-sm -mt-1 ">{catagory}</h6>
        <h6 className="font-bold text-lg mt-2">${price}</h6>
    </Link>
    </div>
    </>
  )
}
