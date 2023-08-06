import React, { useState } from "react";
import Navbar from "../comps/Navbar";
import { details } from "../data/MainPageData";
import {BiSearch} from 'react-icons/bi'
import {AiFillCheckCircle} from  'react-icons/ai'
import rect from '../../public/assets/MainPageImages/rectangle.png'
import rect2 from '../../public/assets/MainPageImages/rectangle2.png'
import farmer from '../../public/assets/MainPageImages/farmer.png'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPage } from "../redux/slices/pageSlice";
import Footer from "../comps/footer";
import LandinPageDown from "../comps/Landinpagedown";
const Main = () =>  {
    // set current page to this page 
    const disptach = useDispatch()
    useEffect(
        ()=> {disptach(setPage('home'))}
    , [])
    //end set current page 
    const [MainSearch,setMainSearch] = useState('')
    const handelsearchchange = (e) => {
        setMainSearch(e.target.value)
    }
    const handlesearchclick = (e) => {
        axios.get('')
    }
    return (
        <div className="bg-white">
        <Navbar/>
        <div className="Main-Page px-[150px] flex flex-col justify-center items-center bg-[white]">
            <div className="Main-Page-top flex items-center justify-between">
                <div className="Main-Page-More flex flex-col gap-4">
                    <h1 className="text-[#403C39] font-[700] max-w-[762px] leading-[97.52px]">Farming Made Smarter, <span className="text-[#42E6A4]">Together!</span></h1>
                    <div className="Main-Page-search-form flex items-center">
                        <input type="text" onChange={handelsearchchange} className=" rounded-l-lg text-[#949494] px-5 py-[10.5px] text-[18px] font-[400] w-[512px]" placeholder="Search here"/>
                        <button className="rounded-r-xl"><BiSearch className=" text-[white] text-[22px]"/></button>
                    </div>
                    <div className="Main-Page-Our-Features mt-2">
                        <div><AiFillCheckCircle className="text-[#42E6A4] text-[28px]"/><span className="text-[#949494] font-[400]">Text to change</span></div>
                        <div><AiFillCheckCircle className="text-[#42E6A4] text-[28px]"/><span className="text-[#949494] font-[400]">Text to change</span></div>
                        <div><AiFillCheckCircle className="text-[#42E6A4] text-[28px]"/><span className="text-[#949494] font-[400]">Text to change</span></div>
                        <div><AiFillCheckCircle className="text-[#42E6A4] text-[28px]"/><span className="text-[#949494] font-[400]">Text to change</span></div>
                    </div>
                </div>
                <div className="Main-page-farmer-image relative">
                    <img src={rect} className="Main-page-farmer-image-1 absolute z-10 left-[17%] bottom-[10%]"/>
                    <img src={rect2} className="Main-page-farmer-image-1 absolute z-10 right-0 bottom-0"/>
                    <img src={farmer} alt="" className="relative z-50"/>
                </div>
            </div>
            <div className="Main-Page-Details-Down mt-10">
                {
                    details.map((v,i)=>{return (<div className="flex flex-col gap-1 items-start w-[200px]">
                                                    <img src={v.image} alt="" />
                                                    <h1 className="mt-[30px] font-[500] text-[24px] text-[##403C39]">{v.title}</h1>
                                                    <p className=" font-[400] text-[18px] text-[909090] w-[300px]">{v.description}</p>
                                                </div>)})
                                            }
            </div>
        </div>
        <LandinPageDown/>
        <Footer/>
        </div>
    )
}
export default Main