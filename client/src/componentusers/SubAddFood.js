import { useState } from "react"


const SubAddFood = () => {
  const [state, setState] = useState({
    food_name: '', description: '', remark: '', price: ''
    , option_name: '', option_price: '', vetgeterian: '', vegan: '', gluten_free: '', halal: ''
  })

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })

  }

  return (
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
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="bg-blue rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Delete</button>
        </div>

      </div>

    </div>
  )
}

export default SubAddFood

