import React, { useRef, useState } from 'react'
import { colorPalette } from './ColorPickerData.js'
import { SketchPicker, ChromePicker } from 'react-color';
import { Alpha } from 'react-color/lib/components/common';
import { HexColorPicker } from "react-colorful";
// var { Alpha } = require('react-color/lib/components/common')
const _ColorTrayMobile = (prop) => {
  // prop.noSetTheme
  //prop.nameTheme
  // prop.navAndFootBar
  // prop.setNavAndFootBar
  // prop.themeIconNoBD
  // prop.setThemeIconNoBD
  //prop.setThemeIconColorBorder
  //prop.categoryMotion
  //prop.setCategoryMotion

  const getColorPicker = (e) => {
    let color = e.target.value
    if (prop.noSetTheme === 1) {
      prop.setNavAndFootBar({ ...prop.navAndFootBar, [prop.nameTheme]: color })
    }
    else if (prop.noSetTheme === 2) {
      prop.setBodyStyle({ ...prop.bodyStyle, [prop.nameTheme]: color })
    }
    else if (prop.noSetTheme === 3) {
      prop.setThemeIconNoBD({ ...prop.themeIconNoBD, [prop.nameTheme]: color })
    } else if (prop.noSetTheme === 31) {
      prop.setThemeIconColorBorder(color)
    }
    else if (prop.noSetTheme === 4) {
      prop.setCategoryMotion({ ...prop.categoryMotion, [prop.nameTheme]: color })
    }
  }


  const [colorOnTray, setColorOnTray] = useState(prop.colorOnClick)

  const getColorTray = (color, event) => {
    let seeColor = color.hex
    setColorOnTray(color)
    if (prop.noSetTheme === 1) {
      prop.setNavAndFootBar({ ...prop.navAndFootBar, [prop.nameTheme]: seeColor })
    }
    else if (prop.noSetTheme === 2) {
      prop.setBodyStyle({ ...prop.bodyStyle, [prop.nameTheme]: seeColor })
    }
    else if (prop.noSetTheme === 3) {
      prop.setThemeIconNoBD({ ...prop.themeIconNoBD, [prop.nameTheme]: seeColor })
    } else if (prop.noSetTheme === 31) {
      prop.setThemeIconColorBorder(seeColor)
    }
    else if (prop.noSetTheme === 4) {
      prop.setCategoryMotion({ ...prop.categoryMotion, [prop.nameTheme]: seeColor })
    }
  }
  const [color, setColor] = useState("#aabbcc");
  // return <HexColorPicker color={color} onChange={setColor} />;
  return (
    <div className='MB_colorPickerTable'>
      <HexColorPicker color={color} onChange={setColor} />
      <ChromePicker
        value="ddd" color={colorOnTray} onChange={getColorTray} disableAlpha />



    </div >
  )
}

export default _ColorTrayMobile 