import React from 'react'

export default function Icons(props) {
  return (
    <div>
          <div className="1  transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out bg-white p-3 w-fit rounded-xl">
        <img src={props.link} alt="" className="w-14  transform scale-100 hover:scale-110 transition-transform duration-500 ease-in-out " />
          </div>
    </div>
  )
}
