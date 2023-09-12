import React from 'react'
import { Link } from 'react-router-dom'
export default function SearchItem({data:{name,img,catagory,price,_id}}) {
  return (
    <>

    <div className='flex w-full bg-white mt-4 mr-4 ml-4 rounded-2xl p-4 '>
        <div className="img w-1/4">
            <img className='w-[80%] ' src={`${process.env.REACT_APP_IMG}${img}`} alt="" />
        </div>
        <div className='w-3/4 justify-start'>
    <Link to={`/product/${_id}`}>
        <h1 className='font-bold max-md:text-sm text-xl'>{name}</h1>
        <p className='text-slate-800'>{catagory}</p>
        <p className='font-bold text-2xl mt-4'>${price}</p>
</Link>
</div>
    </div>

    </>
  )
}
