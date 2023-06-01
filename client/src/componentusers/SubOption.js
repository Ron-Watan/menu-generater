import { useState } from "react"







const SubOption = (prop) => {

  // const [state, setState] = useState({
  // option_name_1: '', option_price_1: '',
  // option_name_2: '', option_price_2: '',
  // option_name_3: '', option_price_3: '',
  // option_name_4: '', option_price_4: '',
  // option_name_5: '', option_price_5: '',
  // option_name_6: '', option_price_6: '',
  // option_name_7: '', option_price_7: '',
  // option_name_8: '', option_price_8: '',
  // option_name_9: '', option_price_9: '',
  // option_name_10: '', option_price_10: '',
  // })


  const [state, setState] = useState({
    option_name: '', option_price: '',
  })

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })

    console.log(state)
  }

  return (
    <div className="layoutManu2">




      <div className="smallFlex">
        <i className="sr-only">!ADD OPTION</i>
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
              <input type="text" name="option_price" id="option_price" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SubOption
{/* <div className="">
                  <i className="sr-only">###1</i>
                  <div className="">
                    <div className="smallFlex">
                      <i className="sr-only">1 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_1" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_1')} value={stateOption.option_name_1} type="text" name="option_name_1" id="option_name_1" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">1 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_1" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_1')} value={stateOption.option_price_1} type="text" name="option_price_1" id="option_price_1" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                      <i className="sr-only">!ADD BTN</i>
                      <div className="smallFlex3 mt-6 flex items-center justify-end ">
                        <button onClick={addOptionBtn} value={stateOption.option_price_1} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
                      </div>
                      <div className="smallFlex3 mt-6 flex items-center justify-end ">
                        <button onClick={removeOptionBtn} value={removeOption.remove_1} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">remove</button>
                      </div>

                    </div>


                  </div>


                  <i className="sr-only">###2</i>
                  <div className={itemOption >= 2 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">2 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_2" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_2')} value={stateOption.option_name_2} type="text" name="option_name_2" id="option_name_2" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">2 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_2" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_2')} value={stateOption.option_price_2} type="text" name="option_price_2" id="option_price_2" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <i className="sr-only">###3</i>

                  <div className={itemOption >= 3 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">3 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_3" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_3')} value={stateOption.option_name_3} type="text" name="option_name_3" id="option_name_3" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">3 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_3" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_3')} value={stateOption.option_price_3} type="text" name="option_price_3" id="option_price_3" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={itemOption >= 4 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">4 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_4" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_4')} value={stateOption.option_name_4} type="text" name="option_name_4" id="option_name_4" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">4 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_4" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_4')} value={stateOption.option_price_4} type="text" name="option_price_4" id="option_price_4" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className={itemOption >= 5 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">5 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_5" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_5')} value={stateOption.option_name_5} type="text" name="option_name_5" id="option_name_5" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">5 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_5" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_5')} value={stateOption.option_price_5} type="text" name="option_price" id="option_price_5" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={itemOption >= 6 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">6 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_6" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_6')} value={stateOption.option_name_6} type="text" name="option_name_6" id="option_name_6" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">6 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_6" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_6')} value={stateOption.option_price_6} type="text" name="option_price_6" id="option_price_6" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={itemOption >= 7 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">7 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_7" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_7')} value={stateOption.option_name_7} type="text" name="option_name_7" id="option_name_7" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">7 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_7" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_7')} value={stateOption.option_price_7} type="text" name="option_price_7" id="option_price_7" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={itemOption >= 8 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">8 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_8" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_8')} value={stateOption.option_name_8} type="text" name="option_name_8" id="option_name_8" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">8 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_8" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_8')} value={stateOption.option_price_8} type="text" name="option_price_8" id="option_price_8" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={itemOption >= 9 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">9 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_9" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_9')} value={stateOption.option_name_9} type="text" name="option_name_9" id="option_name_9" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">9 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_9" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_9')} value={stateOption.option_price_9} type="text" name="option_price_9" id="option_price_9" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={itemOption >= 10 ? 'block' : 'hidden'}>
                    <div className="smallFlex">
                      <i className="sr-only">10 ADD OPTION</i>
                      <div className="smallFlex1">
                        <div className="col-span-1">
                          <label htmlFor="option_name_10" className="block text-sm font-medium leading-6 text-gray-900">Option</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_name_10')} value={stateOption.option_name_10} type="text" name="option_name_10" id="option_name_10" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>

                      <i className="sr-only">10 OPTION PRICE</i>
                      <div className="smallFlex2">
                        <div className="col-span-1">
                          <label htmlFor="option_price_10" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                          <div className="mt-2">
                            <input onChange={inputValueOption('option_price_10')} value={state.option_price_10} type="text" name="option_price_10" id="option_price_10" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  */}


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




  // const ButtonAddFood = () => {
  //   const [inputList, setInputList] = useState([]);
  //   let test = false
  //   const onAddBtnClick = e => {
  //     e.preventDefault()
  //     setInputList(inputList.concat(<SubAddFood key={inputList.length} />));
  
  //   };
  
  //   return (
  //     <div className="">
  
  //       {inputList}
  //       <div className="mt-6 flex items-center justify-end gap-x-6">
  //         <button onClick={onAddBtnClick} type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ADD NEW FOOD</button>
  //       </div>
  //     </div>
  //   );
  // };