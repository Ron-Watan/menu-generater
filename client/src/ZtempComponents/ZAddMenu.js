
import { useEffect, useState } from "react"

import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authenticate, ticketPass } from "../protectors/authorize"
import SubAddFood from "./ZSubAddFood"
import SubOption from "./SubOption"
import SubOptionTest from "./SubOption"

// import { useDispatch, useSelector } from 'react-redux'
// import { hideLoading, showLoading } from '../redux/alertSlice'

const AddMenu = () => {

  const { user } = useSelector(state => state.user)

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




  const navigate = useNavigate()
  // const dispath = useDispatch()
  // const submitCatagory = () => {
  //   console.log("Heloooooooooooffdfdfooooooooooo")
  // }

  //-
  const submitCatagory = (e) => {
    e.preventDefault();
    // dispath(showLoading())
    (axios.post(`${process.env.REACT_APP_API}/user/create-manu`, { ...state, userId: user.userId }, ticketPass)

      .then(result => {
        if (result.data.succes) {
          Swal.fire(result.data.message)
          // authenticate(result, () => navigate('/'))

          // dispath(hideLoading())
        } else {
          Swal.fire(result.data.message)
          // dispath(hideLoading())
        }
      }).catch(err => {
        // dispath(hideLoading())
        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      }))
  }


  ///////////////////////////////////////////////////////////

  return (
    <div>






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

           
    </div >
  )
}

export default AddMenu







