
import { useState } from "react"

import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authenticate, ticketPass } from "../protectors/authorize"

// import { useDispatch, useSelector } from 'react-redux'
// import { hideLoading, showLoading } from '../redux/alertSlice'




const MainForm = () => {

  const { user } = useSelector(state => state.user)
  console.log(user.userId)
  const [state, setState] = useState({
    catagory: '', food_name: '', description: '', remark: '', price: ''
    , option_name: '', option_price: '', vetgeterian: '', vegan: '', gluten_free: '', halal: ''
  })

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })

  }

  // const [value, setValue] = useState({
  //   startDate: new Date(),
  //   endDate: new Date().setMonth(11)
  // });

  // const handleValueChange = (newValue) => {
  //   setValue(newValue);
  // }

  const navigate = useNavigate()
  // const dispath = useDispatch()
  // const submitCatagory = () => {
  //   console.log("Heloooooooooooffdfdfooooooooooo")
  // }

  const submitCatagory = (e) => {
    e.preventDefault()

    // dispath(showLoading())
    axios.post(`${process.env.REACT_APP_API}/user/create-manu`, { ...state, userId: user.userId }, ticketPass)

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
      })
  }


  return (
    <div>
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

                <i className="sr-only">!ADD OPTION</i>

                <div className="smallFlex">
                  <div className="smallFlex1">
                    <div className="col-span-1">
                      <label htmlFor="option_name" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                      <div className="mt-2">
                        <input onChange={inputValue('option_name')} value={state.option_name} type="text" name="option_name" id="option_name" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                  </div>

                  <i className="sr-only">!OPTION PRICE</i>
                  <div className="smallFlex2">
                    <div className="col-span-1">
                      <label htmlFor="option_price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                      <div className="mt-2">
                        <input onChange={inputValue('option_price')} value={state.option_price} type="text" name="option_price" id="option_price" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="smallFlex">

                </div>


                <i className="sr-only">!ADD BTN</i>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
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
                            <input onChange={inputValue('vetgeterian')} value={state.vetgeterian} id="vetgeterian" name="vetgeterian" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="vetgeterian" className="font-medium text-gray-900">Vetgeterian</label>
                          </div>
                        </div>

                        <i className="sr-only">!VEGAN</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('vegan')} value={state.vegan} id="vegan" name="vegan" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="vegan" className="font-medium text-gray-900">Vegan</label>
                          </div>
                        </div>

                      </div>

                      <div className="smallFlex1">

                        <i className="sr-only">!GLUTEN FREE</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('gluten_free')} value={state.gluten_free} id="gluten_free" name="gluten_free" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="gluten_free" className="font-medium text-gray-900">Gluten-Free</label>
                          </div>
                        </div>

                        <i className="sr-only">!HALAL</i>
                        <div className="relative flex gap-x-3">
                          <div className="flex h-6 items-center">
                            <input onChange={inputValue('halal')} value={state.halal} id="halal" name="halal" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          </div>
                          <div className="text-sm leading-6">
                            <label htmlFor="halal" className="font-medium text-gray-900">Halal</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </fieldset>

              </div>

            </div>

            <i className="sr-only">!ADD FOOD ITEM</i>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ADD NEW FOOD</button>
            </div>


            <i className="sr-only">!END CATAGORY</i>
          </div>







          <i className="sr-only">!SAVE</i>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick={submitCatagory} type="submit" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">!Save</button>
          </div>

          <i className="sr-only">!END FORM</i>
        </form >

      </div >
    </div >
  )
}

export default MainForm







  // < div className = "smallFlex smallFlexEnd" >
  //   <div className="relative mt-2 rounded-md shadow-sm currency">
  //     <div className=" inset-y-0 right-0 flex items-center">
  //       <label htmlFor="currency" className="sr-only">Currency</label>
  //       <select id="currency" name="currency" className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
  //         <option>USD</option>
  //         <option>CAD</option>
  //         <option>EUR</option>
  //       </select>
  //     </div>
  //   </div>
  // </div>