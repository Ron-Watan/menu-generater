
import React, { createContext } from 'react'
import Pool from "../UserPool"
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

const AccoutContext = createContext()

const AccountComponent = (prop) => {

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      /// Cognito //
      const userData = new CognitoUser({
        Username,
        Pool
      });

      const authDetail = new AuthenticationDetails({
        Username,
        Password
      })

      userData.authenticateUser(authDetail, {
        onSuccess: (result) => {
          console.log(result);
          resolve(result)
        },
        onFailure: (err) => {
          console.log(err);
          reject(err)
        },
        newPasswordRequired: (result) => {
          console.log('new password + ' + result);
          resolve(result)
        },
      })


      //Promise
    })


  }
  return (
    <AccoutContext.Provider value={{ authenticate }}>
      {prop.children}
    </AccoutContext.Provider>
  )
}

export { AccountComponent, AccoutContext }