import React from "react";
import Navbar from "../comps/Navbar";
import {SlArrowDown} from 'react-icons/sl'
import FilterinCard from "../comps/FilterinCard";
import ProductCard from "../comps/ProductCard";
import { details } from "../data/marketplacedata";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPage } from "../redux/slices/pageSlice";
import topline from '../../public/assets/marketplace/topline.svg'
import botline1 from '../../public/assets/marketplace/botline1.svg'
import botline2 from '../../public/assets/marketplace/botline2.svg'
import botline3 from '../../public/assets/marketplace/botline3.svg'
import elipse from '../../public/assets/MainPageImages/Ellipse 5.png'
import { getProducts } from "../redux/slices/productsSlice";
import Footer from "../comps/footer";
import JobsCard from "../comps/jobsCard";
const Recruiments = () => {
    const products = useSelector(state => state.products.data)
    const disptach = useDispatch()
    useEffect(()=>{
        disptach(getProducts())
    }, [disptach])

    
    useEffect(
        ()=> {disptach(setPage('recruietments'))}
    , [])
    return (
        <>
                <div className="bg-white min-h-screen flex flex-col gap-[70px]">
            <Navbar/>
            <div className=" flex flex-col gap-[80px]">
                <div className="Main-Page-Details-Down Main-Page-Details-Down-market justify-items-start mt-10 px-[147px]">
                {
                    details.map((v,i)=>{return (<div className="flex flex-col gap-1 items-start w-[200px]">
                                                    <img src={v.image} alt="" />
                                                    <h1 className="mt-[30px] font-[500] text-[24px] text-[##403C39]">{v.title}</h1>
                                                    <p className=" font-[400] text-[18px] text-[909090] w-[300px]">{v.description}</p>
                                                </div>)})
                                            }
                </div>
                <div className="relative">
                    <img src={topline} className="absolute -top-[60px]" alt="" />
                    <div className="px-[147px]">
                    <FilterinCard/>
                    </div>
                </div>
                <div className="px-[147px]"><h1 className="text-[48px] font-[700] text-[#403C39]">Experts for You</h1></div>
                <div className="marketplace-product-cards px-[147px]">
                    {
                        products.map((v,i)=>{
                            return <ProductCard id={v.id} title={v.name} location={v.wilaya} price={v.price_per_unit} />
                        })
                    }
                </div>
                <div className="px-[147px]"><h1 className="text-[48px] font-[700] text-[#403C39]">Jobs for You</h1></div>
                <div className="marketplace-Jobs-cards px-[147px]">
                    {
                        products.map((v,i)=>{
                            return <JobsCard id={v.id} title={v.name} location={v.wilaya} price={v.price_per_unit} />
                        })
                    }
                </div>
                <div className="relative flex justify-center mb-[250px]">
                <img src={botline1} className="absolute -top-[120%]" alt="" />
                <img src={botline2} className="absolute -top-[120%]" alt="" />
                <img src={botline3} className="absolute top-[30%]" alt="" />
                    <div className="relative p-5 bg-[#0000006b] rounded-full">
                        <img src={elipse} className="" alt="" />
                        <SlArrowDown className=" absolute top-[40%] right-[36%] z-50 text-[32px]"/>
                        </div>
                </div>
            </div>
            
            <Footer/>
        </div>
        </>
    )
}
export default Recruiments