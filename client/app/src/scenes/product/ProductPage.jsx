import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import { useParams } from 'react-router'

export default function ProductPage() {
    const {productId} = useParams()

    const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(false)

const fetchdata = useCallback(
 async () => {
   

        const response = await fetch(`${process.env.REACT_APP_API_URL}home/${productId}`)
  
        const data = await response.json()
        setproducts(data)


  },
  [productId],
)

const handleclick = async()=>{
const response = await fetch(`${process.env.REACT_APP_API_URL}home/cartadd`,{
                     method:'POST',

                     headers: {
                        'Content-Type': 'application/json',
                        'ath_token':localStorage.getItem('ath_token')
                      },
                      body: JSON.stringify({
                        productId:products[0]._id
                      }),
                  });

response.json()

setisLoading(true)

setTimeout(function () {

  setisLoading(false)

}, 2000);


}

   

    useEffect(() => {
     fetchdata()  
    },[fetchdata])
    
  return (
<>
<div className="cont  bg-white">
{products.length > 0 ? (
    <div>
      <img className='w-72 max-md:mt-8 m-auto md:hidden  ml-8 mr-16' src={`${process.env.REACT_APP_IMG}${products[0].img}`} alt="" />
    <div className="main flex mt-16">
      <div className="img">
        <img className='w-72 max-md:hidden  ml-8 mr-16' src={`${process.env.REACT_APP_IMG}${products[0].img}`} alt="" />
      </div>
      <main className='max-md:m-auto w-[60%]'>
      <h1 className=' max-md:w-fit font-extrabold text-2xl'>{products[0].name}</h1>
      <p className='font-bold text-base mt-2'>Category:<span className='text-orange-dark'> {products[0].catagory}</span></p>
      <p className='mt-4'>Description: {products[0].description.slice(0,200)}</p>
    
      <p className='mt-6'><span className='font-extrabold text-4xl text-custom'>${products[0].price}</span></p>

      <button  onClick={handleclick} className='mt-2 orange pl-6 pr-6 pt-3 pb-3 text-base text-white'>Add to card</button>
      
      {isLoading &&
        <h6 className='text-red-600 font-bold'>
Product added to cart.
        </h6>
      }
      
      </main>
      </div>
      <div className="gg mb-10">
        <h2 className='font-extrabold text-2xl mt-4 ml-12 mb-4'>Description:-</h2>
      <p className='ml-12 max-md:mr-20 mr-40'>{products[0].description}</p>

      </div>
    </div>
  ) : (
  <div className='flex justify-center'>
      <p>Loading...</p>
      </div>
      )}
      </div>
</>
  )
}
