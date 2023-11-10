import React from "react";
import howitworks from '../../public/assets/MainPageImages/howitworks.png'
import elipse from '../../public/assets/MainPageImages/Ellipse 5.png'
import whyus from '../../public/assets/MainPageImages/whyus.png'
import {SlArrowDown} from 'react-icons/sl'
import { whyusdata } from "../data/MainPageData";
const LandinPageDown = () =>{
    return (
        <>
        <div className="mb-[100px] mt-[50px]">
            <div className="lpage-how-it-works z-50">
                <div className="w-[1600px] relative flex flex-col items-center justify-center px-14 py-3 h-[799px] ">
                <img src={howitworks} className=" absolute -z-50 top-0 blur-[8px] " alt="" />
                <div className="absolute opacity-[50%] top-0 bg-black w-full h-[799px] rounded-[105px] -z-40"></div>
                <p className="font-[700] text-[64px] text-white lpage-how-it-works-p-1">How it's work</p>
                <p className="font-[400] text-[40px] text-white lpage-how-it-works-p-2 overflow-hidden"> As a farmer, you can easily sign up and create your profile, showcasing your finest produce and products. Buyers can browse through a diverse selection of offerings and make purchases with ease. Our platform also facilitates seamless communication, allowing farmers and buyers to connect directly for any inquiries or negotiations. With FarmFlow, finding the right equipment or skilled labor is just a click away. Join us today and experience the convenience and efficiency of our streamlined agricultural marketplace.</p>
                <div className=" absolute bottom-[-50px] p-5 bg-[#0000006b] rounded-full"><img src={elipse} className="" alt="" /><SlArrowDown className=" absolute top-[40%] right-[36%] z-50 text-[32px]"/></div>
                </div>
            </div>
            <div className="lpage-why-us flex justify-around mt-[150px] px-24 gap-4  items-center mb-[140px]">
                <div className=" w-[900px]">
                    <div className="font-[700] whyus-h1-info  flex-col flex "><h1 className="px-[60px]">Why <span className="text-[#018383]">Farm</span><span className="text-[#42E6A4]">Flow</span> ?</h1><p className="text-[#949494] font-[600] text-[24px]">Harvesting Innovation that Delights:</p></div>
                    <div className="text-[#949494] text-[24px] lpage-why-us-data">
                        {
                            whyusdata.map((v,i)=> {
                                return (
                                    <div><span className="text-[#42E6A4] font-[600]">{v.title}</span>: <span>{v.description}</span></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <img src={whyus} className="min-w-[300px]" alt="" />
                </div>
            </div>
            <div className="lpage-faq w-full flex justify-center">
        <div id="faq" className="lpage-faq-all shadow-2xl flex flex-col justify-center items-center px-[100px] pb-[60px] pt-[100px] bg-gradient-to-t to-[#02A8A8] from-[#42E6A4] rounded-[100px] text-[white]">
            <div className="lpage-faq-top-all-info flex flex-col justify-center items-center mb-11">
                <h1>FAQ</h1>
                <p>Leave your question here!</p>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-10 lpage-faq-info-ttp mb-[40px]  xl:w-full">
                <input type="text" placeholder="firstname" className="lpage-faq-info-top "/>
                <input type="text" placeholder="lastname" className="lpage-faq-info-top"/>
                <input type="text" placeholder="email" className="lpage-faq-info-top"/>
                <input type="text" placeholder="phonenumber" className="lpage-faq-info-top"/>
            </div>
            <div className="flex flex-col gap-[40px] mb-[60px]">
                <input type="text" placeholder="subject" className="lpage-faq-info-bot" />
                <input type="text" placeholder="your question" className="lpage-faq-info-bot-s" />
            </div>
            <div>
                <button className="bg-[#02a8a8] text-[12px] font-[700] px-11 rounded-[40px] py-4 text-white">SEND To FarmFlow</button>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default LandinPageDown;