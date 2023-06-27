import React from 'react'
import { style1, style2 } from './IconPicker-Data'


const IconPickker = (prop) => {

  // client/src/componentusers/IconPicker-Data.js

  const getValueIcon = (even) => {

    prop.setState({ ...prop.state, icon_catagory: even.target.src })
  }



  return (
    <div className='iconPickerTable'>
      <div className="iconPickerTitle">New</div>
      <div className="iconPickerName">Style</div>
      <div className="iconPickerGridRow">

        {style1.map((icon, index) => (
          <button className="iconPickerItem" key={index}><img className='iconPickerColor' onClick={getValueIcon} src={require(`../All-iconPicker/style1/${style1[index]}`)} alt="" srcSet="" /></button>
        ))}
        {style2.map((icon, index) => (
          <button className="iconPickerItem" key={index}><img className='iconPickerColor' onClick={getValueIcon} src={require(`../All-iconPicker/style2/${style2[index]}`)} alt="" srcSet="" /></button>
        ))}

      </div>



    </div>
  )
}

export default IconPickker