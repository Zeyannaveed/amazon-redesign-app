import React, { useEffect,useState } from "react";
import mainheader from"../../mainhader.png";
import Icons from "../../components/Icons";
import laptop from"../../laptop.png";
import bicycle from"../../bicycle.png";
import camera from"../../camera.png";
import console from"../../console.png";
import headphones from"../../headphones.png";
import wristwatch from"../../wristwatch.png";
import tshirt from"../../tshirt.png";
import books from"../../books.png";
import smartphone from"../../smartphone.png";
import film from"../../video.png";
import teddy from"../../teddy.png";
import Hotproducts from "../../components/Hotproducts";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [Product, setProduct] = useState([])

  const fetchdata = async ()=>{
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}home`);
      
      const gg = await response.json();
      setProduct(gg)
    } catch (error) {

    }
  }
useEffect( () => {
fetchdata()
 
}, [])

  return (
    <>
      <div className="pl-3">
        <img src={mainheader} className='w-[95%] max-md:hidden' alt="" />
        <h3 className="font-bold max-md:hidden mb-5 text-2xl">Popular categories</h3>
        <div className="icons flex gap-4 max-md:hidden">
        <Link state={{ catagory: "laptop" }} to="/catagory">
        <Icons link={laptop}/>
        </Link>
        <Link state={{ catagory: "game" }} to="/catagory">
        <Icons link={console}/>
        </Link>
        <Link state={{ catagory: "camera" }} to="/catagory">
        <Icons link={camera}/></Link>
        <Link state={{ catagory: "headphone" }} to="/catagory">

        <Icons link={headphones}/></Link>
        <Link state={{ catagory: "cycle" }} to="/catagory">
        <Icons link={bicycle}/></Link>
        <Link state={{ catagory: "watch" }} to="/catagory">
        <Icons link={wristwatch}/></Link>
        <Link state={{ catagory: "t shirt" }} to="/catagory">
        <Icons link={tshirt}/></Link>
        <Link state={{ catagory: "phone" }} to="/catagory">
        <Icons link={smartphone}/></Link>
        <Link state={{ catagory: "books" }} to="/catagory">
        <Icons link={books}/></Link>
        
        <Link state={{ catagory: "film" }} to="/catagory">
        <Icons link={film}/></Link>
        <Link state={{ catagory: "teddy" }} to="/catagory">
        <Icons link={teddy}/></Link>
        </div>
        <div><h3 className="font-bold mt-5 text-3xl">Hot Deals 🔥</h3></div>

        {Product?.length > 0 ? (
        <div className="">
          {Product.map((images) => (
            <div className="max-md:flex max-md:ml-auto max-md:mr-auto max-md:justify-center max-md:flex-col flex justify-center">
           { images.products.map( (df) =>(
              <Hotproducts key={df._id} product={df} />
            )
            )}
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      </div>
    </>
  );
}
