//set token and useername to session storage


// export const authenticate = (tokenCognito, next) => {

//   if (window !== 'undefined') {
//     sessionStorage.setItem('token', JSON.stringify(tokenCognito))
//     // sessionStorage.setItem('id', JSON.stringify(result.data.userId))
//   }
//   next()
//   window.location.reload(false);

// }
export const authenticate = (tokenCognito, next) => {

  if (window !== 'undefined') {
    sessionStorage.setItem('tokenName', JSON.stringify(tokenCognito))
    // sessionStorage.setItem('id', JSON.stringify(result.data.userId))

  }
  next()
  window.location.reload(false);

}
// export const authenticate = (result, next) => {

//   if (window !== 'undefined') {
//     sessionStorage.setItem('token', JSON.stringify(result.data.token))
//     // sessionStorage.setItem('id', JSON.stringify(result.data.userId))
//   }
//   next()
//   window.location.reload(false);

// }

// function refreshPage() {
//   window.location.reload(false);
// }



// get data
// export const getToken = () => {
//   if (window !== 'undefined') {
//     if (sessionStorage.getItem('token')) {
//       return JSON.parse(sessionStorage.getItem('token'))
//     } else return false
//   }
// }


export const getToken = () => {

  const tokenName = JSON.parse(sessionStorage.getItem('tokenName'))
  if (window !== 'undefined') {
    if (sessionStorage.getItem('tokenName')) {
      // return JSON.parse(localStorage.getItem(tokenName))
      return localStorage.getItem(tokenName)

    } else return false
  }
}



//get id
// export const getId = () => {
//   if (window !== 'undefined') {
//     if (sessionStorage.getItem('id')) {
//       return JSON.parse(sessionStorage.getItem('id'))
//     } else return false
//   } else return false
// }



//logout / delete id an token


export const logout = (next) => {
  if (window !== 'undefined') {
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('token')

  }
  next()
  window.location.reload(false);
}



export const ticketPass = {
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
}
