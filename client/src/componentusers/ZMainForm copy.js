
import { useEffect, useState } from "react"
import NavbarComponent from "../accounts/NavbarComponent"

import axios from 'axios'
import Swal from 'sweetalert2'
import { ticketPass } from "../protectors/authorize"
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from "../redux/alertSlice"
import RoomListView from "./ZRoomreview"

const MainForm = () => {

  const dispath = useDispatch()

  const { user } = useSelector(state => state.user)


  const [menus, setMenus] = useState([])

  console.log(menus)
  const [state, setState] = useState({
    catagory: '', food_name: '', description: '', remark: '', price: '',
    vetgeterian: '', vegan: '', gluten_free: '', halal: '',
    option_name_1: '', option_price_1: '',
    option_name_2: '', option_price_2: '',
    option_name_3: '', option_price_3: '',
    option_name_4: '', option_price_4: '',
    option_name_5: '', option_price_5: '',
    option_name_6: '', option_price_6: '',

  })
  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })
  }

  const additem = () => {

  }
  //-
  const getAllMenu = () => {
    dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/getAllMenu`, { userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          // Swal.fire(result.data.message)
          setMenus(result.data.userMenu.menu)
          dispath(hideLoading())
        } else {
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())
        console.log("Can't not connect the server", err)
        // Swal.fire("Can't not connect the server")
      })
  }

  //-
  const submitCatagory = (e) => {

    e.preventDefault();
    dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/create-manu`, { ...state, userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          Swal.fire(result.data.message)
          setMenus(result.data.userMenu.menu)
          setState({
            catagory: '', food_name: '', description: '', remark: '', price: '',
            vetgeterian: '', vegan: '', gluten_free: '', halal: '',
            option_name_1: '', option_price_1: '',
            option_name_2: '', option_price_2: '',
            option_name_3: '', option_price_3: '',
            option_name_4: '', option_price_4: '',
            option_name_5: '', option_price_5: '',
            option_name_6: '', option_price_6: '',

          })
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

  const additem1 = (e) => {

    e.preventDefault();
    // dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/additem`, { ...state, userId: user.userId }, ticketPass)
      .then(result => {
        if (result.data.success) {
          Swal.fire(result.data.message)
          // authenticate(result, () => navigate('/'))
          setMenus(result.data.userMenu.menu)
          setState({
            catagory: '', food_name: '', description: '', remark: '', price: '',
            vetgeterian: '', vegan: '', gluten_free: '', halal: '',
            option_name_1: '', option_price_1: '',
            option_name_2: '', option_price_2: '',
            option_name_3: '', option_price_3: '',
            option_name_4: '', option_price_4: '',
            option_name_5: '', option_price_5: '',
            option_name_6: '', option_price_6: '',

          })
          // dispath(hideLoading())
        } else {
          Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      }).catch(err => {
        // dispath(hideLoading())
        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }


  // menus.forEach(menu => {
  //   menu.list.map(el => {

  //     // (console.log(el.food_name))


  //   })
  // })

  // console.log(user)
  useEffect(() => {
    getAllMenu()
    // eslint-disable-next-line
  }, [user])

  ///////////////////////////////////////////////////////////

  return (
    <div>
      <NavbarComponent />


      <div className="formContainer">
        {/* <div className="mt-6 flex items-center justify-end gap-x-6">
          <button onClick={submitCatagory} type="submit" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">!Save</button>
        </div> */}
        <form className="formMenu">

          <div className="layoutManu">

            <div className="smallFlex">

              <i className="sr-only">!ICON</i>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ADD ICON</button>
              </div>

              <i className="sr-only">!CATAGORY</i>
              <div className="col-span-full">
                <label htmlFor="catagory" className="block text-sm font-medium leading-6 text-gray-900">Catagory</label>
                <div className="mt-2">
                  <input onChange={inputValue('catagory')} value={state.catagory} type="text" name="catagory" id="catagory" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

            </div>

            <i className="sr-only">!Photo</i>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div className="mt-2 flex justify-center rounded-lg border-1 border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            {/* //-/////////////////////////////////////////////////////////// */}
            {
              menus.map(menu => {
                return menu.list.map((el, index) =>
                (<div className="layoutManu0" key={(index)}>
                  <div className="layoutManu1">

                    <i className="sr-only">!FOOD NAME</i>
                    <div className="sm:col-span-3">
                      <label htmlFor="food_name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                      <div className="mt-2">
                        <input onChange={inputValue('food_name')} value={el.food_name} type="text" name="food_name" id="food-name" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <i className="sr-only">!DESCRIPTION</i>
                    <div className="col-span-full">
                      <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                      <div className="mt-2">
                        <textarea onChange={inputValue('description')} value={el.description} id="description" name="description" rows="3" className="xBorder block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                    </div>

                    <i className="sr-only">!REMARK</i>
                    <div className="sm:col-span-3">
                      <label htmlFor="remark" className="block text-sm font-medium leading-6 text-gray-900">Remark</label>
                      <div className="mt-2">
                        <input onChange={inputValue('remark')} value={el.remark} type="text" name="remark" id="remark" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <i className="sr-only">!PRICE</i>
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input onChange={inputValue('price')} value={el.price} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />

                      </div>
                    </div>

                  </div>



                </div>)
                )
              })
            }

            <div className="layoutManu0">
              <div className="layoutManu1">

                <i className="sr-only">!FOOD NAME</i>
                <div className="sm:col-span-3">
                  <label htmlFor="food_name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                  <div className="mt-2">
                    <input onChange={inputValue('food_name')} value={state.food_name} type="text" name="food_name" id="food-name" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <i className="sr-only">!DESCRIPTION</i>
                <div className="col-span-full">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                  <div className="mt-2">
                    <textarea onChange={inputValue('description')} value={state.description} id="description" name="description" rows="3" className="xBorder block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <i className="sr-only">!REMARK</i>
                <div className="sm:col-span-3">
                  <label htmlFor="remark" className="block text-sm font-medium leading-6 text-gray-900">Remark</label>
                  <div className="mt-2">
                    <input onChange={inputValue('remark')} value={state.remark} type="text" name="remark" id="remark" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <i className="sr-only">!PRICE</i>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input onChange={inputValue('price')} value={state.price} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />

                  </div>
                </div>

              </div>

              <div className="layoutManu2">

                <div className="">
                  <i className="sr-only">###1</i>
                  <div className="">
                    <div className="smallFlex">
                      <i className="sr-only">1 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_1" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_1')} value={state.option_name_1} type="text" name="option_name_1" id="option_name_1" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">1 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_1" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_1')} value={state.option_price_1} type="text" name="option_price_1" id="option_price_1" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>


                    </div>


                  </div>


                  <i className="sr-only">###2</i>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">2 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_2" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_2')} value={state.option_name_2} type="text" name="option_name_2" id="option_name_2" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">2 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_2" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_2')} value={state.option_price_2} type="text" name="option_price_2" id="option_price_2" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <i className="sr-only">###3</i>

                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">3 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_3" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_3')} value={state.option_name_3} type="text" name="option_name_3" id="option_name_3" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">3 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_3" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_3')} value={state.option_price_3} type="text" name="option_price_3" id="option_price_3" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">4 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_4" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_4')} value={state.option_name_4} type="text" name="option_name_4" id="option_name_4" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">4 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_4" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_4')} value={state.option_price_4} type="text" name="option_price_4" id="option_price_4" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">5 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_5" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_5')} value={state.option_name_5} type="text" name="option_name_5" id="option_name_5" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">5 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_5" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_5')} value={state.option_price_5} type="text" name="option_price" id="option_price_5" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">6 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_6" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_6')} value={state.option_name_6} type="text" name="option_name_6" id="option_name_6" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">6 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_6" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_6')} value={state.option_price_6} type="text" name="option_price_6" id="option_price_6" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

                <fieldset>
                  <i className="sr-only">!DIETARY</i>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Filter Option</legend>
                  <div className="mt-6 space-y-6">
                    <div className="smallFlex">
                      <div className="smallFlex1">

                        <i className="sr-only">!VEGETARIANT</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('vetgeterian')} value={state.vetgeterian} id="vetgeterian" name="vetgeterian" type="checkbox" className="cursor-pointer  h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="vetgeterian" className="cursor-pointer  font-medium text-gray-900">Vetgeterian</label>
                          </div>
                        </div>

                        <i className="sr-only">!VEGAN</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('vegan')} value={state.vegan} id="vegan" name="vegan" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="vegan" className="cursor-pointer font-medium text-gray-900">Vegan</label>
                          </div>
                        </div>

                      </div>

                      <div className="smallFlex1">

                        <i className="sr-only">!GLUTEN FREE</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('gluten_free')} value={state.gluten_free} id="gluten_free" name="gluten_free" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="gluten_free" className="cursor-pointer  font-medium text-gray-900">Gluten-Free</label>
                          </div>
                        </div>

                        <i className="sr-only">!HALAL</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('halal')} value={state.halal} id="halal" name="halal" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="halal" className="cursor-pointer font-medium text-gray-900">Halal</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </fieldset>

              </div>

            </div>

            {/* ///////////////////////////////////// */}
            {/* {menus.map((el, index) =>
            (<div  className="layoutManu0" key={(index)}>
              <div className="layoutManu1">

                <i className="sr-only">!FOOD NAME</i>
                <div className="sm:col-span-3">
                  <label htmlFor="food_name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                  <div className="mt-2">
                    <input onChange={inputValue('food_name')} value={el.food_name} type="text" name="food_name" id="food-name" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <i className="sr-only">!DESCRIPTION</i>
                <div className="col-span-full">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">About</label>
                  <div className="mt-2">
                    <textarea onChange={inputValue('description')} value={el.description} id="description" name="description" rows="3" className="xBorder block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <i className="sr-only">!REMARK</i>
                <div className="sm:col-span-3">
                  <label htmlFor="remark" className="block text-sm font-medium leading-6 text-gray-900">Remark</label>
                  <div className="mt-2">
                    <input onChange={inputValue('remark')} value={el.remark} type="text" name="remark" id="remark" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <i className="sr-only">!PRICE</i>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input onChange={inputValue('price')} value={el.price} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />

                  </div>
                </div>

              </div>

              <div className="layoutManu2">

                <div className="">
                  <i className="sr-only">###1</i>
                  <div className="">
                    <div className="smallFlex">
                      <i className="sr-only">1 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_1" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_1')} value={el.option_name_1} type="text" name="option_name_1" id="option_name_1" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">1 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_1" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_1')} value={el.option_price_1} type="text" name="option_price_1" id="option_price_1" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>


                    </div>


                  </div>


                  <i className="sr-only">###2</i>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">2 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_2" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_2')} value={el.option_name_2} type="text" name="option_name_2" id="option_name_2" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">2 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_2" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_2')} value={el.option_price_2} type="text" name="option_price_2" id="option_price_2" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <i className="sr-only">###3</i>

                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">3 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_3" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_3')} value={el.option_name_3} type="text" name="option_name_3" id="option_name_3" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">3 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_3" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_3')} value={el.option_price_3} type="text" name="option_price_3" id="option_price_3" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">4 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_4" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_4')} value={el.option_name_4} type="text" name="option_name_4" id="option_name_4" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">4 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_4" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_4')} value={el.option_price_4} type="text" name="option_price_4" id="option_price_4" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">5 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_5" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_5')} value={el.option_name_5} type="text" name="option_name_5" id="option_name_5" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">5 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_5" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_5')} value={el.option_price_5} type="text" name="option_price" id="option_price_5" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={``}>
                    <div className="smallFlex">
                      <i className="sr-only">6 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_6" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_name_6')} value={el.option_name_6} type="text" name="option_name_6" id="option_name_6" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">6 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_6" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValue('option_price_6')} value={el.option_price_6} type="text" name="option_price_6" id="option_price_6" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

                <fieldset>
                  <i className="sr-only">!DIETARY</i>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Filter Option</legend>
                  <div className="mt-6 space-y-6">
                    <div className="smallFlex">
                      <div className="smallFlex1">

                        <i className="sr-only">!VEGETARIANT</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('vetgeterian')} value={el.vetgeterian} id="vetgeterian" name="vetgeterian" type="checkbox" className="cursor-pointer  h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="vetgeterian" className="cursor-pointer  font-medium text-gray-900">Vetgeterian</label>
                          </div>
                        </div>

                        <i className="sr-only">!VEGAN</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('vegan')} value={el.vegan} id="vegan" name="vegan" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="vegan" className="cursor-pointer font-medium text-gray-900">Vegan</label>
                          </div>
                        </div>

                      </div>

                      <div className="smallFlex1">

                        <i className="sr-only">!GLUTEN FREE</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('gluten_free')} value={el.gluten_free} id="gluten_free" name="gluten_free" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="gluten_free" className="cursor-pointer  font-medium text-gray-900">Gluten-Free</label>
                          </div>
                        </div>

                        <i className="sr-only">!HALAL</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('halal')} value={el.halal} id="halal" name="halal" type="checkbox" className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="halal" className="cursor-pointer font-medium text-gray-900">Halal</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>


                </fieldset>

              </div>

            </div>))} */}



            {/* ////////////////////////////////////// */}



            {/* <AddMenu /> */}







            < i className="sr-only" > !ADD FOOD ITEM</i>
            {/* <ButtonAddFood /> */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button onClick={additem} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 
              py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600">SAVE ADD ADD ITEM</button>
            </div>


            <i className="sr-only">!END CATAGORY</i>
          </div>







          <i className="sr-only">!SAVE</i>

          <div className="flex items-center justify-center gap-x-6">
            <button onClick={submitCatagory} type="submit" className="bg-blue rounded-md bg-
            indigo-600 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-indigo-600">SAVE AND EXIT</button>
          </div>

          <i className="sr-only">!END FORM</i>
        </form >

      </div >
    </div >
  )
}

export default MainForm







// <div className="">
//                     {listOption.map((el, index) => (
//                       <div className="smallFlex" key={index}>

//                         <i className="sr-only">1 ADD OPTION</i>
//                         <div className="smallFlex1">
//                           <div className="col-span-1">
//                             <label htmlFor="option_name" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
//                             <div className="mt-2">
//                               <input onChange={event => inputOptionValue(index, event)} value={el.option_name} type="text" name="option_name" id="option_name" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                           </div>
//                         </div>

//                         <i className="sr-only">1 OPTION PRICE</i>
//                         <div className="smallFlex2">
//                           <div className="col-span-1">
//                             <label htmlFor="option_price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
//                             <div className="mt-2">
//                               <input onChange={event => inputOptionValue(index, event)} value={el.option_price} type="text" name="option_price" id="option_price" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-6 flex items-center justify-end gap-x-6">
//                           <button onClick={removeOpItem} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 
//                         py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
//                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
//                             focus-visible:outline-indigo-600">REMOVE Opition</button>
//                         </div>
//                       </div>
//                     ))}
//                     <div className="mt-6 flex items-center justify-end gap-x-6">
//                       <button onClick={addOpitem} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 
//                         py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
//                         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
//                         focus-visible:outline-indigo-600">SAVE ADD ADD ITEM</button>
//                     </div>

//                   </div>