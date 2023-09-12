import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/SearchItem'

export default function Catagorypage() {
 
    const location = useLocation()
  const {search} = location.state




const [Product, setProduct] = useState([])

const fetchdata = useCallback(
    async () => {

        const response = await fetch(`${process.env.REACT_APP_API_URL}home/search `,{
                     method:'POST',
                     headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        search:search
                      }),
                  });
                    
   
           const data = await response.json()
           setProduct(data)
    
   
     },
     [search],
   )
   
   
      
   
       useEffect(() => {
        fetchdata()  
       },[fetchdata])
  return (
    <div>

{Product?.length > 0 ? (
        <div className="">
          {Product.map((images) => (
            <div className=" flex justify-center">
                <SearchItem data={images}/>
                       </div>
          ))}
        </div>
      ) : (
        <div className="">
            <div>
          <p className=''>No movies found</p>
          </div>
        </div>
      )}


    </div>
  )
}
