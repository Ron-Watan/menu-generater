import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import RegisterComponent from "./accounts/RegisterComponent"
import LoginComponent from "./accounts/LoginComponent"
import _00AppMain from "./componentusers/_00AppMain"
import ProtectRoute from "./protectors/ProtectRoute"
import _MenuComponent from "./components/_MenuComponent"

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

        <Route Component={ProtectRoute}>
          {/* <Route path="/generatemenu" exact Component={GenerateMenu} /> */}

          {/* <Route path="/" exact Component={App} /> */}
          {/* <Route path="/xx" exact Component={GenerateMenu} /> */}


          {/* <Route Component={ProtectRoute}> */}
          {/* </Route> */}
          <Route path="/" exact Component={_00AppMain} />
          {/* <Route path="/mainform" exact Component={MainForm} /> */}
          {/* mainform */}


        </Route>


        <Route path="/login" exact Component={LoginComponent} />
        <Route path="/register" exact Component={RegisterComponent} />
        <Route path="/:link" exact Component={_MenuComponent} />

      </Routes>
    </BrowserRouter >
  )
}
export default AllRoute