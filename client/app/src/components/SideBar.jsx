import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="h-auto min-h-screen  max-md:hidden w-[18%] background">
      <div>
        <h4 className="font-bold  bg-grey-light w-fit pl-4 pr-14 py-1 rounded-xl ml-3 mt-4 mb-3 text-orange-dark text-lg">
          Categories
        </h4>
        <ul className="text-white   pl-14">
          <Link state={{ catagory: "laptop" }} to="/catagory">
            <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">Laptop</li>
          </Link>



          <Link state={{ catagory: "phone" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">Phone</li>
          </Link>

          <Link state={{ catagory: "camera" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">camera</li>
          </Link>

          <Link state={{ catagory: "t shirt" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">T-shirt</li>
          </Link>

          <Link state={{ catagory: "cycle" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">cycle</li>
          </Link>


          <Link state={{ catagory: "game" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">game</li>
          </Link>

          <Link state={{ catagory: "watch" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">watch</li>
          </Link>


          <Link state={{ catagory: "books" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">books</li>
          </Link>

          <Link state={{ catagory: "toys" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">toys</li>
          </Link>

          <Link state={{ catagory: "comics" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">comics</li>
          </Link>






          <Link state={{ catagory: "headphone" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">headphone</li>
          </Link>

          <Link state={{ catagory: "music" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">music
          </li>
          </Link>

          <Link state={{ catagory: "movies" }} to="/catagory">
          <li className="mb-2 hover:bg-orange-dark w-fit hover:pl-3
            hover:pb-1 hover:pt-1 transition-all ease-in-out  hover:pr-3 hover:rounded cursor-pointer">movies</li>
          </Link>


        </ul>
      </div>
    </div>
  );
}
