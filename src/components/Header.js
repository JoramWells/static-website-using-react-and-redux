import React from 'react'
import './index.css'
import logo from './logo.png'

export default function Header (){
    return(

        <div className="nv">
                        <h1 >Justice and Peace Center</h1>

            <div className="col-sm-12">
            <hr />
            </div>

            <nav className="navbar1">
                <div className="brand">
                    <img src={logo} alt="Justice and Peace Center logo" style={{width:"70px", height:"70px", borderRadius:"90px"}} />
                </div>
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