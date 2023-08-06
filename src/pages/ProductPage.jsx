import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../comps/Navbar";
import '../comps/comps.css'
import { useState } from "react";
import {CiDeliveryTruck} from 'react-icons/ci'
import {MdLocationPin} from 'react-icons/md'
import {PiTagBold} from 'react-icons/pi'
import p1 from '../../public/assets/productPage/p1.svg'
import p2 from '../../public/assets/productPage/p2.svg'
import p3 from '../../public/assets/productPage/p3.svg'
import p4 from '../../public/assets/productPage/p4.svg'
import p5 from '../../public/assets/productPage/p5.svg'
import line from '../../public/assets/productPage/line.svg'
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/slices/productsSlice";
const ProductPage = () =>  {
    const id = useParams().productID
    const data = useSelector(state => state.products.data)
    const product = data.find((v) => {
        return v.id == id;
      });
    const params = useParams()
    console.log(id , product)
    const dispatch = useDispatch()
    //fetch data
    useEffect(()=> {
        dispatch(getProductById(params.productID))
    },[dispatch])
    //end fetch
    const [activeimg,setActiveimg] = useState(p1)
    const handleactiveimage = (img) => {
        setActiveimg(img)
    }
    const [counter,setCount] = useState(0)
    const increasCount = () => {
        setCount(counter + 1)
    }
    const decreaseCount = () => {
        setCount(counter - 1 )
    }
    return (
        <div className="bg-white">
            <img src={line} className="absolute -bottom-[11%] -left-[1%]" alt="" />
            <Navbar/>
            <div className="product-page-main flex w-full justify-center gap-[80px] mt-[60px]">
                <div className="product-details flex flex-col items-start w-[570px]  z-50">
                    <div className="product-first-details flex flex-col pt-0">
                        <span className=" capitalize font-[700] text-[36px] text-[#403c39]">{product.name}</span>
                        <span className="font-[500] text-[16px] text-[#949494]">{product.desciption}</span>
                        <img src="" alt="" />
                    </div>
                    <div className="product-second-details flex flex-col">
                    <span className=" capitalize font-[700] text-[32px] text-[#5b5b5b]">{product.price_per_unit}DA</span>
                        <span className="font-[500] text-[14px] text-[#949494]">{product.selling_status}</span>
                    </div>
                    <div className="product-third-details flex items-start gap-[80px]">
                        <div className="flex flex-col"><span className="font-[700] text-[24px] text-[#5b5b5b]">Location</span><span className="font-[500] text-[20px] text-[#acacac] flex items-center"><MdLocationPin/>{product.wilaya}</span></div>
                        <div className="flex flex-col"><span className="font-[700] text-[24px] text-[#5b5b5b]">Status</span><span className="font-[500] text-[20px] text-[#acacac] flex items-center gap-1"><PiTagBold/>{product.status}</span></div>
                    </div>
                    <div className="product-last-details flex flex-col gap-[40px] mt-[80px]">
                        <div className="product-page-count flex items-center justify-start gap-[40px]">
                            <div className="flex gap-8 bg-[#C4C4C433] rounded-[100px] justify-center items-center h-[56px] w-[189px]">
                                <span onClick={decreaseCount} className=" cursor-pointer text-[32px] text-[#42e6a4] font-[700]">-</span>
                                <span className="text-[20px] text-[#42e6a4] font-[700]">{counter}</span>
                                <span onClick={increasCount} className=" cursor-pointer text-[32px] text-[#42e6a4] font-[700]">+</span>
                            </div>
                            <div className="w-[140px]"><span className="text-[16px] font-[500] text-[#5B5B5B]">only <span className="text-[#42E6A4]">{product.quaitity}</span> items left dont miss it</span></div>
                        </div>
                        <div className="product-page-buttons flex justify-start items-center gap-[30px]">
                            <button className="w-[262px] h-[65px] text-white bg-[#42E6A4] rounded-[100px] text-[20px] font-[700]">Buy Now</button>
                            <button className="product-page-buttons-add w-[262px] h-[65px] text-[#5B5B5B] text-[20px] font-[700] bg-white rounded-[100px]">Add to Cart</button>
                        </div>
                        <div className="product-page-delivery flex flex-col items-start px-6 pt-4 pb-3 gap-10">
                            <div className="product-page-dilevery-one-div flex items-start gap-2">
                                <div className=" pt-1 text-[#42E6A4] text-[28px] ">
                                    <CiDeliveryTruck/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-[700] text-[20px] text[#5b5b5b]">Free Delivery</span>
                                    <span className=" underline text-[16px] font-[500] text-[#5b5b5b]">Enter your current location for Deliver Availbility</span>
                                </div>
                            </div>
                            <div className="product-page-dilevery-one-div flex items-start gap-2">
                                <div className=" pt-1 text-[#42E6A4] text-[28px] ">
                                    <CiDeliveryTruck/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-[700] text-[20px] text[#5b5b5b]">Free Delivery</span>
                                    <span className="text-[16px] font-[500] text-[#5b5b5b]">Price determined by your location . <span className=" underline">Details</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-images flex flex-col items-start gap-[25px] -order-1  z-50">
                    <div>
                        <img src={activeimg} alt="" className="w-[722px] rounded-[50px]"/>
                    </div>
                    <div className="flex gap-[32px]">
                        <img src={p2} onClick={()=> handleactiveimage(p2)} alt="" className=" w-[138px]  rounded-[20px]"/>
                        <img src={p3} onClick={()=> handleactiveimage(p3)} alt="" className=" w-[138px]  rounded-[20px]"/>
                        <img src={p4} onClick={()=> handleactiveimage(p4)} alt="" className=" w-[138px]  rounded-[20px]"/>
                        <img src={p5} onClick={()=> handleactiveimage(p5)} alt="" className=" w-[138px]  rounded-[20px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage