//-
import { useEffect, useState } from "react"
import NavbarComponent from './NavbarComponent'
import axios from "axios"
import { authenticate, getToken } from "../protectors/authorize"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from "../redux/alertSlice"
import { useSelector } from "react-redux"
import UserPool from "../UserPool"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
// import * as AWS from "@aws-sdk/client-cognito-identity-provider";
// import AWS from 'aws-sdk'
// AWS.config.update({ region: 'us-west-1' });
// AWS.config.update({
//   accessKeyId: 'AKIA33D3AZGQPRO6F77Q',
//   secretAccessKey: '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',
//   region: 'us-west-1',
//   // UserPoolId: 'us-west-1_lmMYcjfH6',
//   // ClientId: '2j1e3apf787h6e1trgao5jak8m'
// });

// const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
//   // accessKeyId: 'AKIA33D3AZGQPRO6F77Q',
//   // secretAccessKey: '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',
//   // region: 'us-west-1'
// });



const LoginComponent = () => {

  const dispath = useDispatch()



  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const { email, password } = state

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })
  }
  const navigate = useNavigate()





  const submitData = (e) => {
    e.preventDefault()
    dispath(showLoading())

    /// Cognito //
    const userData = new CognitoUser({
      Username: email,
      Pool: UserPool
    });

    const authDetail = new AuthenticationDetails({
      Username: email,
      Password: password,
    })

    userData.authenticateUser(authDetail, {
      onSuccess: (result) => {

        authenticate(result.getAccessToken().getJwtToken(), () => navigate('/app'))
        setState({ ...state, email: '', password: '' })
        ///////////////////////////


        // signOutResult = userData.globalSignOut(userId, 'us-west-1_lmMYcjfH6')
        // userData.getSession((err, result) => {
        //   if (result) {
        //     userData.globalSignOut({
        //       onSuccess: (result) => {

        //         authenticate(result.getAccessToken().getJwtToken(), () => navigate('/'))
        //         setState({ ...state, email: '', password: '' })
        //       }
        //     });
        //   }
        // })


        //////////////////////

        // console.log(result.getAccessToken().getJwtToken())
        // authenticate(result.getAccessToken().getJwtToken(), () => navigate('/'))
        // setState({ ...state, email: '', password: '' })
        // const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
        //       apiVersion: '2016-04-18',
        //       region: 'us-west-1'
        //     })
        // var params = {
        //   AccessToken: result.getAccessToken().getJwtToken() /* required */
        // };

        // new Promise((resolve, reject) => {
        //   ///////////////////////////
        //   cognitoidentityserviceprovider.globalSignOut(params, function (err, data) {
        //     if (err) {
        //       console.log('not work')
        //       console.log(err, err.stack)
        //       reject(err)
        //     }
        //     else {

        //       // authenticate(result.getAccessToken().getJwtToken(), () => navigate('/'))
        //       // setState({ ...state, email: '', password: '' })
        //       // console.log(data)
        //       resolve(data)
        //     };
        //   });
        // })
        ////////////////////////////

        // var params = {
        //   UserPoolId: 'us-west-1_lmMYcjfH6', /* required */
        //   Username: email /* required */
        // };
        // cognitoidentityserviceprovider.adminUserGlobalSignOut(params, function (err, data) {
        //   if (err) console.log(err, err.stack); // an error occurred
        //   else {
        //     authenticate(result.getAccessToken().getJwtToken(), () => navigate('/'))
        //       setState({ ...state, email: '', password: '' })
        //       // console.log(data)
        //     console.log('htttt')
        //     console.log(data)
        //   };           // successful response
        // });


        ////////////////////////

        // var signOut = (accessToken) =>
        // new Promise((resolve, reject) => {
        //   var params = {
        //     //UserPoolId: process.env.USER_POOL_ID, /* required */
        //     AccessToken: accessToken /* required */
        //   };
        //   var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
        //     apiVersion: '2016-04-18',
        //     region: 'us-east-1'
        //   })
        //   console.log("Signing out user .. ");
        //   cognitoidentityserviceprovider.globalSignOut(params, function(err, data) {
        //     if (err) {
        //       console.log(err, err.stack); // an error occurred
        //       reject(err)
        //     } else {
        //       console.log(data);
        //       resolve(data)
        //     }
        //   })





        dispath(hideLoading())
      },
      onFailure: (err) => {
        console.log('fontend');
        console.log(err);
      },
      newPasswordRequired: (result) => {
        console.log('new password + ' + result);
      },
    })








  }




  // useEffect(() => {
  //   getToken() && navigate('/')
  //   // eslint-disable-next-line
  // }, [])

  return (
    <div className="">
      <NavbarComponent />
      <div className="flex flex-col justify-center items-center mt-20 ">
        <div className="w-full max-w-md -translate-y-18">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <input value={email} onChange={inputValue('email')} className=" appearance-none border-1 
              border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email Address" />
            </div>

            <div className="mb-2">
              <input value={password} onChange={inputValue('password')} className="appearance-none border-1 border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            </div>

            <label className="text-gray-500 mb-10">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-md">
                Remember me
              </span>
            </label>

            <button onClick={submitData} className="bg-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="submit">
              SIGN IN
            </button>



            <div className="flex items-center justify-between">
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/">
                Forgot Password?
              </a>
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/register">
                Don't have an account? Sign Up
              </a>
            </div>

          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent



// const clearCacheData = () => {
//   caches.keys().then((names) => {
//     names.forEach((name) => {
//       caches.delete(name);
//     });
//   });
//   alert('Complete Cache Cleared')
// };


// function clearCache() {
//   root.innerHTML += 'Cache cleared using location.reload(true)'
//   windows.location.reload(true)
// }