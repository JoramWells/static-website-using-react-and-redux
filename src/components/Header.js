import React from 'react'
import './index.css'

export default function Header (){
    return(

        <div className="nv">
            <nav className="navbar1">
                <div className="brand">JPC-Kitale</div>
                <a href="#" className="toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>

                <div className="navl">
                    <ul>
                         <div className="btnL" ><li><a href="#home">Home</a> </li></div>
                         <div className="btnL" ><li><a href="#Location">Location</a> </li></div> 
                         <div className="btnL" ><li><a href="#Donation">Donation</a> </li></div> 
                         <div className="btnL" ><li><a href="#Work">Work</a> </li></div> 


                    </ul>
                </div>
            </nav>
        </div>
        

    );
}