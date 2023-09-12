import React from "react"
import { useState,useRef } from "react"


  
export default function Dashboard() {
  const nameref = useRef()
const descriptionref = useRef()
const categoryref = useRef()
const priceref = useRef()

const [img,setimg] = useState(null)

const handleclick = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('name', nameref.current.value);
  formData.append('description', descriptionref.current.value);
  formData.append('category', categoryref.current.value);
  formData.append('price', priceref.current.value);
  formData.append('picture', img);

console.log(formData)
await fetch(`${process.env.REACT_APP_API_URL}pic`, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
};

  
  return (
    <div><div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Name 
        </label>
        <input  ref={nameref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Description 
        </label>
        <input ref={descriptionref}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        price
        </label>
        <input  ref={priceref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        category 
        </label>
        <input  ref={categoryref} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Image 
        </label>
        <input onChange={(e)=>{setimg(e.target.files[0])}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="file"/>
      </div>
   <div className="flex items-center justify-between">
        <button onClick={handleclick}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Add Product
        </button>
      </div>
    </form>

  </div>
  </div>
  )
}
