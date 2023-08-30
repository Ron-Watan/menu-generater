import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import _01Home from "./componenthome/_01Home"
import _05TermCondition from './componenthome/_05TermCondition'

import RegisterComponent from "./accounts/RegisterComponent"
import LoginComponent from "./accounts/LoginComponent"
import ForgotPassword from "./accounts/ForgotPassword"

import Subscription from "./accounts/Subscription"


import _00AppMain from "./componentusers/_00AppMain"
import _MenuComponent from "./components/_MenuComponent"
import ProtectRoute from "./protectors/ProtectRoute"

const AllRoute = () => {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <BrowserRouter >
      <div className={`${loading && 'Full_Transparent_Loading'} `}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>



      <Routes>


        <Route path="/" exact Component={_01Home} />
        <Route path="/termCondition" exact Component={_05TermCondition} />
        <Route path="/login" exact Component={LoginComponent} />
        <Route path="/register" exact Component={RegisterComponent} />
        <Route path="/forgotPassword" exact Component={ForgotPassword} />

        <Route path="/:link" exact Component={_MenuComponent} />

        <Route Component={ProtectRoute}>
          <Route path="/subscription" exact Component={Subscription} />
          <Route path="/app" exact Component={_00AppMain} />
        </Route>




      </Routes>
    </BrowserRouter >
  )
}
export default AllRoute