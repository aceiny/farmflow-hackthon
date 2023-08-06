import React, { useState, useRef, useEffect } from 'react';
import { FaBars , FaUser , FaShoppingBag} from 'react-icons/fa';
import { links} from '../data/NavBarData';
import logo from '../../public/assets/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { typelogin,typesignup } from '../redux/slices/authtypeslice';
import {LiaShoppingBagSolid} from 'react-icons/lia'
import {TfiSearch} from 'react-icons/tfi'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import './comps.css'
const Navbar = () => {
    const [opensearch,setOpensearch] = useState(false)
    const handlesearchinput = () =>{
        setOpensearch(!opensearch)
    }
    const activePage = useSelector(state => state.currentPage.currentPage)
    const isAuth = useSelector(state => state.auth.isLogged)
    const [MainSearch,setMainSearch] = useState('')
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
    setShowLinks(!showLinks);
    };
    useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
        linksContainerRef.current.style.height = '0px';
    }
    }, [showLinks]);
    if (!isAuth){return (
        <nav>
        <div className='nav-center pb-5' >
        <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' />
            {/* <h3>FarmFlow</h3> */}
            <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
            </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
            {links.map((link) => {
                const { id, url, text } = link;
                return (
                <li key={id} className={text.toLowerCase() == activePage ? "bar-is-active" : ""}>
                    <Link to={url}><span className={text.toLowerCase() == activePage ? "bar-is-active" : ""}>{text}</span></Link>
                </li>
                );
            })}
            </ul>
        </div>
            <ul className='btns'>
                <li onClick={() => dispatch(typelogin())}><Link to='/auth' className='log-btn flex items-center justify-center'>Sign in</Link></li>
                <li onClick={() => dispatch(typesignup())}><Link to='/auth' className='reg-btn'>Sign up</Link></li>
            </ul>
        </div>
    </nav>
    )}else {
        return (
            <nav>
            <div className='nav-center pb-5' >
            <div className='nav-header'>
                <img src={logo} className='logo' alt='logo' />
                {/* <h3>FarmFlow</h3> */}
                <button className='nav-toggle' onClick={toggleLinks}>
                <FaBars />
                </button>
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                        <li key={id} className='text-[160px]'>
                        <Link to={url}><span className={text.toLowerCase() == activePage ? "bar-is-active" : ""}>{text}</span></Link>
                    </li>
                    );
                })}
                </ul>
            </div>
            <div className='flex justify-center'>
                <ul className='nav-btns-auth w-fit'>
                    <li className='pr-[15px]'><i class="fa-solid fa-bag-shopping"></i></li>
                    <li className='flex items-center gap-5'><i class="fa-solid fa-magnifying-glass" onClick={handlesearchinput}></i><div  className={opensearch?"Navbar-open-search":"Navbar-close-search"}><input type="text" className={opensearch?"search-bar":"search-bar-off"}/></div></li>
                    <li className=''><i class="fa-regular fa-heart"></i></li>
                    <Link to='/profile'><li className='pl-[15px]'><i class="fa-regular fa-user"></i></li></Link>
                </ul>
            </div>
            </div>
        </nav>
        )
    }
};

export default Navbar