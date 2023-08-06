import React from "react";
import Navbar from "../comps/Navbar";
import pic from './profilepic.svg'
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../redux/slices/authSlice";
const Profile = () => {
    const user = useSelector((state)=> state.auth.data)
    const disptach = useDispatch()
    const handlesignuout = () => {
        disptach(signout())
    }
    console.log(user)
    return (
        <>
        <Navbar/>
        <div className="w-full flex justify-center mt-[50px]">
            <div className="flex w-[80%] rounded-[48px] bg-white pt-[33px] pl-[33px]">
                <div className="profile-left-side">
                    <ul className="text-black text-[20px] font-[500] flex flex-col items-start gap-[24px]">
                        <li className="profile-active-nav">My Profile</li>
                        <li>Settings</li>
                        <li>Billing</li>
                        <li>Help</li>
                        <li className="text-[#FF5353] mt-[48px] cursor-pointer" onClick={handlesignuout}>Sign Out</li>
                    </ul>
                </div>
                <div className="profile-all-data w-full flex flex-col gap-[64px] pl-[49px]">
                    <div><span className="text-[24px] font-[600]">My Profile</span></div>

                    <div className="profile-data-section flex justify-between items-center">
                        <div className="flex gap-[32px] items-center">                       
                                <div>
                                <img src={pic} alt="" className=" w-[100px] rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[20px] text-black font-[500]">{user.user}</span>
                                <span className="text-[16px] text-[#403C39] font-[500] mt-[12px]">Type</span>
                                <span className="text-[##5B5B5B] text-[16px] fony-[400] mt-[4px]">Location</span>
                            </div>
                            </div>
                        <div>
                            <span className="profile-edit">Edit</span>
                        </div>
                    </div>


                    <div className="profile-data-section flex justify-between items-center">
                        <div className="flex flex-col items-start w-full">
                            <div className="mb-[12px]">
                                <span className="text-[20px] text-black font-[500]">Personal Information</span>
                            </div>

                            <div className="flex justify-between w-full items-start">
                                <div className="flex flex-col">                        
                                    <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">First Name</span>
                                    <span className="text-[##5B5B5B] text-[16px] fony-[400] mb-[12px]">Raouf</span>
                                    <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">Email Adress</span>
                                    <span className="text-[##5B5B5B] text-[16px] fony-[400] mb-[12px]">a_zeraibi@estin.dz</span>
                                    <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">Role</span>
                                    <span className="text-[##5B5B5B] text-[16px] fony-[400]">Client</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="mb-[4px]">Last Name</span>
                                    <span className="mb-[12px]">Zerkhef</span>
                                    <span className="mb-[4px]">Phone</span>
                                    <span className="mb-[12px]">0679338166</span>
                                </div>
                                <div>
                                    <span className="profile-edit">Edit</span>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="profile-data-section flex justify-between items-center">
                        <div className="flex flex-col items-start w-full">
                            <div className="">
                                <span className="text-[20px] text-black font-[500]">Adress</span>
                            </div>
                            <div className="flex justify-between w-full items-start">
                                <div className="flex flex-col">                        
                                <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">State</span>
                                <span className="text-[##5B5B5B] text-[16px] fony-[400] mb-[12px]">Algiers</span>
                                <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">Postal Code</span>
                                <span className="text-[##5B5B5B] text-[16px] fony-[400] mb-[12px]">16201</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">City</span>
                                    <span className="text-[##5B5B5B] text-[16px] fony-[400] mb-[12px]">Sidi Abdellah</span>
                                    <span className="text-[16px] text-[#403C39] font-[500] mb-[4px]">Grow With Us</span>
                                    <button className="w-[166px] h-[65px] text-white bg-[#42E6A4] rounded-[100px] text-[16px] font-[500]" >Become a Seller</button>
                                </div>
                                <div>
                                <span className="profile-edit">Edit</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Profile