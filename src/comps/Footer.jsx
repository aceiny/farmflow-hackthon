import React from "react";
import vector from './vector.svg'
import l from './ll.svg'
import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube,FaInstagram,FaPinterest} from 'react-icons/fa'

const Footer = () => {
    return (
    <div className="footer-div">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <img src={vector} alt="" />
                    </div>
                    <img src={l} alt="" className="vectoor"/>
                    <div className="sb__footer-links-div">
                        <a href="/"><h4>Home</h4></a>
                        <a href="/"><h4>Market</h4></a>
                        <a href="/"><h4>How it Work</h4></a>
                        <a href="/"><h4>FAQ</h4></a>
                        <a href="/"><h4>Contact</h4></a>
                    </div>
                    <img src={l} alt="" className="vectoor"/>
                    <hr className="horo"></hr>
                    <div className="sb__footer-links-div">
                        <a href="/"><h4>FarmFlow</h4></a>
                        <a href="/"><h4>Conditions</h4></a>
                        <a href="/"><h4>Licences</h4></a>
                    </div>
                    <img src={l} alt="" className="vectoor"/>
                    <hr className="horo"></hr>
                    <div className="sb__footer-links-div">
                        <h4>SOCIALIZE WITH FarmFlow</h4>
                        <div className="socialmedia">
                        <a href=""><FaFacebook /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaLinkedin /></a>
                        <a href=""><FaYoutube /></a>
                        <a href=""><FaInstagram /></a>
                        <a href=""><FaPinterest /></a></div>
                    </div>
                </div>
            </div>
                <hr ></hr>
                <div className="sb__footer-below">
                        <p>
                            {new Date().getFullYear()} © FarmFlow - BY estaW3na - ALL RIGHTS RESERVED 
                        </p>
                </div>
        </div>
    )
}

export default Footer;