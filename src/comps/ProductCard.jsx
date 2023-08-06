import React from "react";
import { Link } from "react-router-dom";
import farmer from '../../public/assets/MainPageImages/farmer.png'
import pcsvg from './productcardimg.svg'
import prate from './prate.svg'
import {MdLocationPin} from 'react-icons/md'
const ProductCard = ({id,title,location,price,status}) =>  {
    const d = "/marketplace/"+id

    return (
        <div className="one-product-card-market w-[360px] rounded-[100px] flex flex-col gap-[10px]">
            <div className="w-full relative rounded-[50px]">
            <Link to={d}><img src={pcsvg} alt="" /></Link>
                <div className="w-[40px] rounded-full bg-white h-[40px] absolute top-[12px] left-[299px] flex justify-center items-center text-[20px]"><i class="fa-regular fa-heart "></i></div>
            </div>
            <div className="one-product-card-market-info flex flex-col gap-1">
                <div className="flex justify-between w-full">
                    <span className="font-[700] text-[20px] text-[#403C39] capitalize">{title}</span>
                    <span className="text-[#5B5B5B] text-[14px] font-[700]">{price}DA</span>
                </div>
                <span className="one-product-card-market-info-down pl-[2px] capitalize flex items-center gap-1"><MdLocationPin className="text-[16px]"/>{location}</span>
                <span className="one-product-card-market-info-down pl-[6px] capitalize">this is description</span>
                <img src={prate} alt="" className="pl-[6px]"/>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductCard