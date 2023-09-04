//set token and useername to session storage

//Version 1
export const authenticate = (tokenCognito, next) => {
  if (window !== 'undefined') {
    sessionStorage.setItem('tokenName', JSON.stringify(tokenCognito))
    // sessionStorage.setItem('id', JSON.stringify(result.data.userId))
  }
  next()
  window.location.reload(false);
}

//Version 2
// export const authenticate = (tokenCognito, next) => {
//   if (window !== 'undefined') {
//     sessionStorage.setItem('token', JSON.stringify(tokenCognito))
//   }
//   next()
//   window.location.reload(false);
// }



//Version 1
export const getToken = () => {
  const tokenName = JSON.parse(sessionStorage.getItem('tokenName'))
  if (window !== 'undefined') {
    if (sessionStorage.getItem('tokenName')) {
      // return JSON.parse(localStorage.getItem(tokenName))
      return localStorage.getItem(tokenName)

    } else return false
  }
}

//Version 2
// export const getToken = () => {
//   if (window !== 'undefined') {
//     if (sessionStorage.getItem('token')) {
//       return JSON.parse(sessionStorage.getItem('token'))
//     } else return false
//   }
// }




export const logout = (next) => {
  if (window !== 'undefined') {
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('tokenName')
  }
  next()
  window.location.reload(false);
}



export const ticketPass = {
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
}
