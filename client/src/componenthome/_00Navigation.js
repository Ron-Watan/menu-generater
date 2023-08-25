import React from 'react'
import logo from '../componenthome/img/logo.png'
import { Link } from "react-router-dom";
function _00Navigation() {
  return (
    <div className="H-header">
      <div className="H-top-navigation">
      </div>
      <div className="H-headerInner">
        <div className="H-container--large">

          <div className="H_mainnavigation">
            <div className="H-leftSideHeader">
              <Link to='/termCondition' className="H_btnLogin H_btnLogin_Loging">Term</Link>
            </div>
            {/* <a href="#" className="H-logoWrapper">
        
            </a> */}

            <div className="H_mainnavigation_ab">
              <a href='#secFT' className="H-center-navigation">
                <img src={logo} alt="" />
              </a>
            </div>

            <div className="H-rightSideHeader">
              {/* <span className="HisearchBar">
                  <img src="" className="searchIcon" alt="search icon" />
                </span> */}

              <Link to='/login' className="H_btnLogin H_btnLogin_Loging">Login</Link>
            </div>
          </div>

        </div>





      </div>
    </div>
  )
}

export default _00Navigation