
import { useEffect, useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { ticketPass } from "../protectors/authorize"
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from "../redux/alertSlice"
import { setUser } from "../redux/userSlice"
import NavbarComponent from "./NavbarComponent"
import "../style/mainForm.css"
import "../style/sideForm.css"
// import MenuComponent from "../components/MenuComponent"
// import {theme} from "../components/MenuComponent"
// import { useForm } from 'react-hook-form';
// import { createTheme, ThemeProvider } from '@mui/material'





const MainForm = () => {

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])



  // const ref = useRef()
  const dispath = useDispatch()
  const { user } = useSelector(state => state.user)
  const [categoryList, setCategoryList] = useState([])
  const [menuId, setMenuId] = useState('')
  // const [menuIdVar, setMenuIdVar] = useState('')

  const [state, setState] = useState({ catagory: '' })

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })

  }

  let listMenuModel = {
    food_name: '', description: '', remark: '', price: '',
    vetgeterian: '', vegan: '', gluten_free: '', halal: '',

  }
  const [listMenu, setListMenu] = useState([listMenuModel])


  const inputListValue = (index, event) => {
    let dataSet = [...listMenu];
    let data = dataSet[index];
    data[event.target.name] = event.target.value;
    if (event.target.name === 'price') data['original_price'] = event.target.value
    setListMenu(dataSet);
  }
  const additem = () => {
    let newListMenu = listMenuModel
    setListMenu([...listMenu, newListMenu])
  }

  const removeItem = (index) => {
    let data = [...listMenu];
    data.splice(index, 1)
    setListMenu(data)
  }

  ////////////////////////////////
  // console.log(state)


  const chooseMenu = (oneMennu) => {
    setState(oneMennu)
    setListMenu(oneMennu.listMenu)
    setMenuId(oneMennu.menuId)
    console.log(oneMennu)
  }


  const componentDidMount = () => {
    window.scrollTo(0, 0)
  }
  //-
  const getAllMenu = () => {
    // dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          setCategoryList(result.data.userMenu.menu)
          // dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())
        console.log("Can't not connect the server", err)
        // Swal.fire("Can't not connect the server")
      })
  }




  const submitCatagory = (e) => {
    e.preventDefault();
    console.log(e.target)
    componentDidMount()
    if (!state.catagory.trim()) return

    // dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/create-manu`,
      { catagory: state.catagory, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
      .then(result => {
        if (result.data.success) {
          getAllMenu()
          dispath(setUser(result.data.userMenu));
          actionDelay()
          // Swal.fire(result.data.message)
          setState({
            catagory: '',
          })

          dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())
        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }


  //-
  const saveEditMenu = (e) => {
    if (!menuId) return
    e.preventDefault();
    dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/saveEditMenu`,
      { menuId: menuId, catagory: state.catagory, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
      .then(result => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          dispath(setUser(result.data.userMenu));
          actionDelay()
          dispath(hideLoading())
        } else {
          Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())
        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }


  //- ////////////////////////////////////////////////////////


  const findOneMenu = (e) => {
    e.preventDefault();
    setStart(true)
    const menuId = e.target.name
    setMenuId(menuId)
    componentDidMount()
    // dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/findOneMenu`, { menuId: menuId, userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          // console.log(result.data.userMenu)
          // setMenus(result.data.userMenu.menu)
          // dispath(hideLoading())
          chooseMenu(result.data.userMenu)
          actionDelay()
        } else {
          Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      }).catch(err => {
        // dispath(hideLoading())
        console.log("Can't not connect the server", err)
        Swal.fire("Can't not connect the server")
      })
  }


  // const [switchAction, setSwitAction] = useState(false)




  const deleteMenu = (e) => {
    const menuId = e.target.value
    dispath(showLoading())
    e.preventDefault();
    componentDidMount()
    axios.post(`${process.env.REACT_APP_API}/user/deleteMenu`,
      { menuId: menuId, listMenu: [...listMenu], userId: user.userId, link: user.link }, ticketPass)
      .then(result => {
        if (result.data.success) {

          dispath(setUser(result.data.userMenu));
          setMenuId('')
          setState({ catagory: '' })
          setListMenu([listMenuModel])

          // Swal.fire(result.data.message)
          dispath(hideLoading())
        } else {
          Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())
        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }
  // menus.forEach(menu => {
  //   menu.list.map(el => {

  //     // (console.log(el.food_name))

  //   })
  // })

  function actionDelay() {
    setTimeout(() => {
      getAllMenu()
      console.log('ss')
    }, 1000);
  }
  const [deleteBtn, setDeleteBtn] = useState(false)
  function showDeleteBtn() {

  }
  const [valuePhoto, setvaluePhoto] = useState('No file Chosen')
  const valuePhotoFn = (e) => {
    setvaluePhoto(e.target.value)
  }

  const [start, setStart] = useState(false)
  const startCreate = () => {

    setMenuId('')
  }


  const reloadPage = () => {
    setStart(true)
    setMenuId('')
    setListMenu([listMenuModel])
    setState({ catagory: '' })
    // window.location.reload(false)

  }


  useEffect(() => {
    getAllMenu()
    // eslint-disable-next-line
  }, [user])



  //-///-///-///-///-///-///-///-///-///-///-

  return (
    <div>
      {/* <NavbarComponent/> */}
      <div className="decorBar"></div>
      <div className="monitor ">

        <NavbarComponent />

        <div className="monitor1">
          {/* <MenuComponent /> */}
          {/* <a href="/generatemenu">generatemenu</a> */}
        </div>

        <div onClick={() => setDeleteBtn(false)} className="monitor2 formContainer ">

          <form id='foodForm' className={`formMenu ${start ? 'show' : 'hiddenMe'}`} onSubmit={submitCatagory} >
            <div className="stickyBox1"></div>
            <div className="stickyBox">
              <div className="gridCat">
                <button onClick={() => {
                  setStart(false)
                  setMenuId('')
                }} className="closeBtn">CLOSE</button>
                <div className="flexIcoCat">

                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>
                  </div>

                  <div className="boxInputText">
                    <input onChange={inputValue('catagory')} value={state.catagory}
                      placeholder="Catagory" type="text" name="catagory" id="catagory"
                      autoComplete="off" className="inputText fontCat" />
                  </div>
                </div>

                <i className="sr-only">!Photo</i>
                <div className="flexPhoto">
                  <div className="">
                    <label htmlFor="file-upload" className="labelPhoto">
                      <input onChange={valuePhotoFn} id="file-upload" name="file-upload" type="file" className="inputPhoto" />

                      <div name='photo' className="photoFlex">
                        <svg className="mx-auto h-12 w-12 text-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                        </svg>
                        <div className="">
                          <div className="">{valuePhoto}</div>

                        </div>
                      </div>
                    </label>
                    <p className="remarkPhoto">Upload a file PNG, JPG, GIF up to 10MB</p   >
                  </div>
                </div>
              </div>

            </div>

            <div className="layoutManu">

              {
                listMenu.map((el, index) =>
                (<div className={`layoutManu0 ${index % 2 !== 0 ? "" : "light-grey"}`} key={index}>
                  <div className="layoutManu1">

                    <i className="sr-only">!FOOD NAME</i>
                    <div className="flex">
                      <span className="item">{index + 1}</span>
                      <div className=" ">
                        <input onChange={event => inputListValue(index, event)} value={el.food_name}
                          type="text" name="food_name" id="food-name" autoComplete="off"
                          className="inputTextFood fontNormal" placeholder="Food name" />
                      </div>
                    </div>

                    <i className="sr-only">!DESCRIPTION</i>
                    <div className="">
                      <div className="">
                        <textarea onChange={event => inputListValue(index, event)} value={el.description}
                          id="description" name="description" rows="2"
                          className="inputText fontSmall testAreaD" placeholder="Description"></textarea>
                      </div>
                    </div>

                    <i className="sr-only">!REMARK</i>
                    <div className="">
                      <div className="">
                        <textarea onChange={event => inputListValue(index, event)} value={el.remark}
                          name="remark" rows="1" id="remark"
                          className="inputText fontSmall italic testAreaR" placeholder="Remark (optional)" />
                      </div>
                    </div>

                    <i className="sr-only">!PRICE</i>

                    <div className="flex">
                      <label htmlFor="price" className="labelPrice">Price</label>
                      <div className=" ">
                        <input onChange={event => inputListValue(index, event)} value={el.price}
                          type="text" name="price" id="price" autoComplete="off"
                          className="inputTextFood fontCat" placeholder="0" />
                      </div>
                    </div>


                  </div>

                  <div className="layoutManu2">

                    <fieldset>
                      <i className="sr-only">!DIETARY</i>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">Filter Option</legend>
                      <div className="mt-6 space-y-6">
                        <div className="smallFlex">
                          <div className="smallFlex1">

                            <i className="sr-only">!VEGETARIANT</i>
                            <div className="relative flex gap-x-3">
                              <div className="flex h-6 items-center">
                                <input onChange={inputValue('vetgeterian')} value={el.vetgeterian} id={`vetgeterian_${index}`} name="vetgeterian" type="checkbox" className="cursor-pointer  h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor={`vetgeterian_${index}`} className="cursor-pointer  font-medium text-gray-900">Vetgeterian</label>
                              </div>
                            </div>

                            <i className="sr-only">!VEGAN</i>
                            <div className="relative flex gap-x-3">
                              <div className="flex h-6 items-center">
                                <input onChange={inputValue('vegan')} value={el.vegan} id={`vegan${index}`} name="vegan" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor={`vegan${index}`} className="cursor-pointer font-medium text-gray-900">Vegan</label>
                              </div>
                            </div>

                          </div>

                          <div className="smallFlex1">

                            <i className="sr-only">!GLUTEN FREE</i>
                            <div className="relative flex gap-x-3">
                              <div className="flex h-6 items-center">
                                <input onChange={inputValue('gluten_free')} value={el.gluten_free} id={`gluten_free${index}`} name="gluten_free" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor={`gluten_free${index}`} className="cursor-pointer  font-medium text-gray-900">Gluten-Free</label>
                              </div>
                            </div>

                            <i className="sr-only">!HALAL</i>
                            <div className="relative flex gap-x-3">
                              <div className="flex h-6 items-center">
                                <input onChange={inputValue('halal')} value={el.halal} id={`halal${index}`} name="halal" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor={`halal${index}`} className="cursor-pointer font-medium text-gray-900">Halal</label>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>


                      <div className={`mt-6 flex items-center justify-start gap-x-6 `}>
                        <button onClick={removeItem} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 
                        py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                        focus-visible:outline-indigo-600">Remove ITEM</button>
                      </div>
                    </fieldset>

                  </div>
                </div>)
                )

              }



              < i className="sr-only" > !ADD FOOD ITEM</i>
              {/* <ButtonAddFood /> */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={additem} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 
              py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600">ADD ITEM</button>
              </div>





            </div> <i className="sr-only">!END CATAGORY</i>





            <i className="sr-only">!END FORM</i>
          </form >


          {/* ${!start ? 'show' : 'hiddenMe'} ${menuId ? 'hiddenMe' : 'show'} */}
          {/* ${!menuId ? 'hiddenMe' : 'show'} */}

        </div >

        <div onClick={() => setDeleteBtn(false)} className="monitorSpace ">
          <div className="newCatBox">
            <div className={``}>
              <button onClick={reloadPage} type="button" form='foodForm' className="newCatBtn">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
                <span>NEW CATEGORY</span>
              </button>
            </div>
          </div>

          <i className="sr-only">!SAVE</i>
          <div className="saveBtnBox">

            <div className={`${menuId ? 'hiddenMe' : 'show'} ${start ? 'show' : 'hiddenMe'}`}>
              <button type="submit" form='foodForm' className="saveBtn">SAVE NEW CATEGORY</button>
            </div>

            <div className={` ${!menuId ? 'hiddenMe' : 'show'}`}>
              <button onClick={saveEditMenu} type="" className="saveBtn">SAVE</button>
            </div>
          </div>
        </div>

        <div className="monitorSpace"></div>



        <i className="sr-only">!SIDE CATEGORY</i>

        <div className="moitor3">
          <div className="sectionSideCat"  >
            <div className="headCat">
              <div>CATEGORY</div>

              <div onClick={() => setDeleteBtn(!deleteBtn)} className="iconCat">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

              </div>

            </div>


            {categoryList.map((el, index) => (
              <div onClick={findOneMenu} key={index} className={`tabCat ${menuId === el.menuId ? 'chooseCat' : "mini"}`} >
                <button name={el.menuId} onClick={findOneMenu} className={`itemCat  ${menuId === el.menuId ? 'itemCatChoose' : ""}`}>{index + 1}</button>
                <button name={el.menuId} className="btnCat">{el.catagory}</button>
                <div className={`${deleteBtn ? 'dispBox' : 'dispNone'} deleteBox`}>
                  <button onClick={deleteMenu} value={el.menuId} type="submit" className="deleteBtn">X</button>
                </div>
              </div>
            ))}



          </div>
        </div >

      </div>
    </div >
  )
}

export default MainForm








  //-
  // const getAllMenu = () => {
  //   dispath(showLoading())
  //   axios.post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
  //     .then(result => {
  //       if (result.data.success) {
  //         // Swal.fire(result.data.message)
  //         setMenus(result.data.userMenu.menu)
  //         dispath(hideLoading())
  //       } else {
  //         // Swal.fire(result.data.message)
  //         dispath(hideLoading())
  //       }
  //     }).catch(err => {
  //       dispath(hideLoading())
  //       console.log("Can't not connect the server", err)
  //       // Swal.fire("Can't not connect the server")
  //     })
  // }