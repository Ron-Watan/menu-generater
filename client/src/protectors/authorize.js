//set token and useername to session storage


export const authenticate = (result, next) => {

  if (window !== 'undefined') {
    sessionStorage.setItem('token', JSON.stringify(result.data.token))
    // sessionStorage.setItem('id', JSON.stringify(result.data.userId))
  }
  next()
  window.location.reload(false);

}
// function refreshPage() {
//   window.location.reload(false);
// }



// get data
export const getToken = () => {
  if (window !== 'undefined') {
    if (sessionStorage.getItem('token')) {
      return JSON.parse(sessionStorage.getItem('token'))
    } else return false
  }
}


//get id
export const getId = () => {
  if (window !== 'undefined') {
    if (sessionStorage.getItem('id')) {
      return JSON.parse(sessionStorage.getItem('id'))
    } else return false
  } else return false
}

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
