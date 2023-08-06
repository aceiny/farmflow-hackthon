import React, { useState } from "react";
import logo from '../../public/assets/logo.svg'
import signimg from '../../public/assets/AuthPages/signinpage.png'
import signupimg from '../../public/assets/AuthPages/signupimg.png'
import nextimg from '../../public/assets/AuthPages/nextform.png'
import {BiSolidHide} from 'react-icons/bi'
import Fade from 'react-reveal/Fade'
import { typelogin, typesignup } from "../redux/slices/authtypeslice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { setPage } from "../redux/slices/pageSlice";
import nextsignupline from "../../public/assets/AuthPages/nextsignupline.svg"
import signupline from "../../public/assets/AuthPages/signupline.svg"
import signinline from "../../public/assets/AuthPages/signinline.svg"
import { sendUser, signupUser } from "../redux/slices/authSlice";
import { ToastContainer , toast } from "react-toastify";
const AuthPage = () => {
    const waittoastlogin = () => {
        toast.info('Just a Sec!', {
            position: "top-left",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const waittoastsignup = () => {
        toast.info('Just a Sec!', {
            position: "top-left",
            autoClose: 6000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
        // set current page to this page 
        const disptach = useDispatch()
        useEffect(
            ()=> {disptach(setPage('auth'))}
        , [])
        //end set current page 
    const authmethod = useSelector(state => state.authtype.authtype)
    const dispatch = useDispatch()
    //
    const [showloginpassword,setshowloginpassword] = useState(false)
    const [showsignuppassword,setshowsignuppassword] = useState(false)
    //
    const hanldeshowloginpassword = () => setshowloginpassword(!showloginpassword)
    const hanldeshowsignuppassword = () => setshowsignuppassword(!showsignuppassword)
    const [next, setNext] = useState(false)
    const [loginuser,setloginuser] = useState('')
    const [loginpassword,setloginpassword] = useState('')
    const [signupuser,setsignupuser] = useState('')
    const [signupemail,setsignupemail] = useState('')
    const [signupnumber,setsignupnumber] = useState('')
    const [signuppassword,setsignuppassword] = useState('')
    //
    const handleloginuser = (e) => {setloginuser(e.target.value)}
    const handleloginpassword = (e) => {setloginpassword(e.target.value)}
    const handlesignupuser = (e) => {setsignupuser(e.target.value)}
    const handlesignupemail = (e) => {setsignupemail(e.target.value)}
    const handlesignupnumber = (e) => {setsignupnumber(e.target.value)}
    const handlesignuppassword = (e) => {setsignuppassword(e.target.value)}

    const handleloginusercheck = (e) => {
        e.preventDefault();
        const userl={
            "username" : loginuser,
            "password" : loginpassword
        }
        dispatch(sendUser(userl))
        waittoastlogin()
    }
    const handlesignupnew = async (e) => {
        e.preventDefault();
        const users={
            "username" : signupuser,
            "password" : signuppassword,
            "email" : signupemail
        }
        try {
            waittoastsignup()
            const response = await dispatch(signupUser(users));
            // Handle successful sign-up response if needed
            console.log(response); // This will contain the data returned from the server after successful sign-up
            setNext(false)
            dispatch(typelogin())
          } catch (error) {
            // Handle sign-up error if needed
            console.log(error); // This will contain any errors encountered during sign-up
          }
    }
    const handlelogin = (e) => {
        e.preventDefault()
    }
    
    const handleloginform = (e) => {
        e.preventDefault()
        setNext(false)
        dispatch(typelogin())
    }
    const handlesignupform = (e) => {
        e.preventDefault()
        dispatch(typesignup())
    }
    const handlnextform = (e) => {
        e.preventDefault()
        setNext(!next)
    }
    if(next){return(
        <div className="bg-white min-h-screen min-w-screen relative">
            <ToastContainer
                position="top-left"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <img src={nextsignupline} className="absolute top-0 right-0" alt="" />
    <div className="auth-page-logo flex justify-start py-8 mb-7 px-[120px]">
        <img src={logo} alt="" className=" min-w-[179px]"/>
    </div>

        <div className="Singupnext auth-page-all flex items-center justify-around  pl-[250px] pr-[320px] gap-12">
            <div className="auth-page-form w-[600px] flex flex-col justify-center items-center gap-6">
            <Fade right><h1 className="text-[16px] font-[500] min-w-[210px]">Welcome to farmflow</h1>
                <div className="flex w-full justify-center">
                    <div className="flex auth-page-type items-center justify-between p-4 py-3 gap-5 rounded-[100px] text-white bg-[#DAFAFA]">
                        <div className="py-4 text-[#02A8A8] text-[16px] font-[400] auth-page-type-inactive px-20">
                            <button onClick={handleloginform}>Sign in</button>
                        </div>
                        <div className="bg-[#02A8A8] rounded-[100px] py-4 w-[194px] min-w-[150px] text-center text-[16px] font-[400]">
                            <button onClick={handlesignupform}>Signup</button>
                        </div>
                    </div>
                </div>
                <p className="text-[#5B5B5B] text-[16px] font-[400]">Welcome back to FarmFlow! Explore our user-friendly platform to showcase your produce, connect with buyers, and enjoy smooth transactions. Join us and experience agricultural success!</p>
                <form action="/login" method="POST" className="auth-form flex flex-col w-full gap-10">
                    <div className="flex flex-col gap-4"><label htmlFor="pnumber">Password</label><div className="auth-page-form-input text-[#ACACAC] text-[15px] font-[300] flex items-center w-full"><input type={!showsignuppassword?'password':'text'} name="pass" placeholder="Entre your password" className=" border-none outline-none w-full" /><BiSolidHide onClick={hanldeshowsignuppassword} className="text-[25px]"/></div></div>
                    <div className="flex flex-col gap-4"><label htmlFor="pass">Confirme Password</label><div className="auth-page-form-input text-[#ACACAC] text-[15px] font-[300] flex items-center w-full"><input type={!showsignuppassword?'password':'text'} name="pass" placeholder="Entre your password" className=" border-none outline-none w-full" onChange={handlesignuppassword}/><BiSolidHide onClick={hanldeshowsignuppassword} className="text-[25px]"/></div></div>
                    <div className="flex justify-between w-full items-start">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" className="w-[10px]"/>
                            <span className="text-[12px] font-[300] text-black">Remembre me</span>

                        </div>
                        <div>
                            <p className="text-[12px] font-[300] text-black">Forget Password?</p>
                        </div>
                    </div>
                    <div className="auth-page-form-button self-end bg-[#02A8A8] px-28 py-5 text-white rounded-[100px]"><button onClick={handlesignupnew}>Sign up</button></div>
                </form></Fade>
            </div>
            <div>
            <Fade left><img src={nextimg} alt="" className="min-w-[500px]"/></Fade>
            </div>
        </div>
        </div>
    )}
    else {
        if(authmethod == "login"){
            return (
                <div className="bg-white min-h-screen min-w-screen overflow-hidden">
                    <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                    <img src={signinline} className="absolute bottom-0 left-0" alt="" />
                    
    <div className="auth-page-logo flex justify-start py-8 mb-7 px-[120px]">
        <img src={logo} alt="" className=" min-w-[179px]"/>
    </div>
            <div className="Login auth-page-all flex items-center justify-around  pl-[250px] pr-[320px] gap-12">
            <Fade left><div>
                <img src={signimg} alt="" className="min-w-[500px]"/>
            </div></Fade>
            <div className="auth-page-form w-[600px] flex flex-col justify-center items-center gap-6">
            <Fade right><h1 className="text-[16px] font-[500] min-w-[210px]">Welcome to farmflow</h1>
                <div className="flex w-full justify-center">
                    <div className="flex auth-page-type items-center justify-between p-4 py-3 gap-5 rounded-[100px] text-white bg-[#DAFAFA]">
                        <div className="bg-[#02A8A8] rounded-[100px] py-4 w-[194px] min-w-[150px] text-center text-[16px] font-[400]">
                            <button onClick={handleloginform}>Sign in</button>
                        </div>
                        <div className="auth-page-type-inactive px-20 py-4 text-[#02A8A8] text-[16px] font-[400]">
                            <button onClick={handlesignupform}>Signup</button>
                        </div>
                    </div>
                </div>
                <p className="text-[#5B5B5B] text-[16px] font-[400]">Welcome back to FarmFlow! Explore our user-friendly platform to showcase your produce, connect with buyers, and enjoy smooth transactions. Join us and experience agricultural success!</p>
                <form action="/login" method="POST" className="auth-form flex flex-col w-full gap-10">
                    <div className="flex flex-col gap-4"><label htmlFor="user">Username</label><input type="text" name="user" onChange={handleloginuser} placeholder="Entre your User name" className="auth-page-form-input text-[#ACACAC] text-[15px] font-[300] outline-none"/></div>
                    <div className="flex flex-col gap-4"><label htmlFor="pass">Password</label><div className="auth-page-form-input text-[#ACACAC] text-[15px] font-[300] flex items-center w-full"><input type={!showloginpassword? 'password' : 'text'} onChange={handleloginpassword} name="pass" placeholder="Entre your password" className=" border-none outline-none w-full"/><BiSolidHide onClick={hanldeshowloginpassword} className="text-[25px]"/></div></div>
                    <div className="flex justify-between w-full items-start">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" className="w-[10px]"/>
                            <span className="text-[12px] font-[300] text-black">Remembre me</span>
        
                        </div>
                        <div>
                            <p className="text-[12px] font-[300] text-black">Forget Password?</p>
                        </div>
                    </div>
                    <div className="auth-page-form-button self-end bg-[#02A8A8] px-28 py-5 text-white rounded-[100px]"><button onClick={handleloginusercheck}>Signin</button></div>
                </form></Fade>
            </div>
        </div>
        </div>)
        }
        else{
            return(
                <div className="bg-white min-h-screen min-w-screen">
                    <img src={signupline} className="absolute bottom-0 -left-[11.5%]" alt="" />
    <div className="auth-page-logo flex justify-start py-8 mb-7 px-[120px]">
        <img src={logo} alt="" className=" z-50 min-w-[179px]"/>
    </div>
                <div className="Singin auth-page-all flex items-center justify-around  pl-[250px] pr-[320px] gap-12">
    <div>
    <Fade left><img src={signupimg} alt="" className="min-w-[500px]"/></Fade>
    </div>
    <Fade right><div className="auth-page-form w-[600px] flex flex-col justify-center items-center gap-6">
    <h1 className="text-[16px] font-[500] min-w-[210px]">Welcome to farmflow</h1>
        <div className="flex w-full justify-center">
            <div className="flex auth-page-type items-center justify-between p-4 py-3 gap-5 rounded-[100px] text-white bg-[#DAFAFA]">
                <div className="py-4 text-[#02A8A8] text-[16px] font-[400] auth-page-type-inactive px-20">
                    <button onClick={handleloginform}>Sign in</button>
                </div>
                <div className="bg-[#02A8A8] rounded-[100px] py-4 w-[194px] min-w-[150px] text-center text-[16px] font-[400]">
                    <button onClick={handlesignupform}>Signup</button>
                </div>
            </div>
        </div>
        <p className="text-[#5B5B5B] text-[16px] font-[400]">Welcome back to FarmFlow! Explore our user-friendly platform to showcase your produce, connect with buyers, and enjoy smooth transactions. Join us and experience agricultural success!</p>
        <form action="/login" method="POST" className="auth-form flex flex-col w-full gap-10">
            <div className="flex flex-col gap-4"><label htmlFor="user">Username</label><input type="text" onChange={handlesignupuser} name="user" placeholder="Entre your User name" className="auth-page-form-input text-[#ACACAC] text-[15px] font-[300] outline-none"/></div>
            <div className="flex flex-col gap-4"><label htmlFor="user">email</label><input type="email" onChange={handlesignupemail}  name="user" placeholder="Entre your User name" className="auth-page-form-input text-[#ACACAC] text-[15px] font-[300] outline-none"/></div>
            <div className="flex justify-between w-full items-start">
                <div className="flex items-center gap-1">
                    <input type="checkbox" className="w-[10px]"/>
                    <span className="text-[12px] font-[300] text-black">Remembre me</span>

                </div>
                <div>
                    <p className="text-[12px] font-[300] text-black">Forget Password?</p>
                </div>
            </div>
            <div className="auth-page-form-button self-end bg-[#02A8A8] px-28 py-5 text-white rounded-[100px]"><button onClick={handlnextform}>Next</button></div>
        </form>
    </div></Fade>
</div></div>
            )
        }
    }
}
export default AuthPage