import React, { useState } from 'react'
import { colorPalette } from './_22ColorPickerData.js'

import { HexColorPicker, HexColorInput } from "react-colorful";
import MBicon_Tray from '../all-icon/mobile-bar/tray.svg'
import MBicon_Pallete from '../all-icon/mobile-bar/pallete.svg'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'


const _09TsubColorPickerMobile = (prop) => {
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
    prop.setCheckChangeTheme(true)
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

  const getColorTray = (color) => {
    prop.setCheckChangeTheme(true)
    let seeColor = color

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

  const [choosePallete, setChoosePallete] = useState('tray')

  return (
    <div className='MB_AB_FullAgain'>

      <div className={`MB_themeMenuList `}>
        <div onClick={() => setChoosePallete('tray')} className={`MB_menuListBtn ${choosePallete === 'tray' && 'MB_Theme_tabChoose'}`}>
          <img src={MBicon_Tray} alt="" />

        </div>

        <div onClick={() => setChoosePallete('pallete')} className={`MB_menuListBtn ${choosePallete === 'pallete' && 'MB_Theme_tabChoose'}`}>
          <img src={MBicon_Pallete} alt="" />

        </div>



        <button onClick={() => {
          prop.setOnoffColorPicker(false)
        }} className='MB_menuListBtn okColorBtn grisAlignSelf'>
          Ok
        </button>
        <button onClick={() => {
          prop.setOnoffColorPicker(false)
          getColorTray(prop.colorOnClick)
          // }} className=' MB_menuListBtn okColorBtn cancleColorBtn grisAlignSelf marginR'>
        }} className=' cancleColorBtn marginR'>

          <img src={MBiconClose} alt="" />
        </button>



      </div>

      <div className="MB_AB_FullAgain">

        <div className='MB_themeLayout_Grid MB_themeLayout_Full'>


          {choosePallete === 'pallete' && <div className='MB_Container_Sroll ThemePallete_Padding'>

            {/* <div className="colorPickerTitle">New</div> */}
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Slate</div> */}
              {colorPalette.slate.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            {/* <div className="MB_colorPickerGridRow">
        
              {colorPalette.gray.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div> */}

            {/* <div className="MB_colorPickerGridRow">
         
              {colorPalette.zinc.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div> */}

            {/* <div className="MB_colorPickerGridRow">
        
              {colorPalette.neutral.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div> */}

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Stone</div> */}
              {colorPalette.stone.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Red</div> */}
              {colorPalette.red.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Orange</div> */}
              {colorPalette.orange.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Amber</div> */}
              {colorPalette.amber.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Yellow</div> */}
              {colorPalette.yellow.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Lime</div> */}
              {colorPalette.lime.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Green</div> */}
              {colorPalette.green.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Emerald</div> */}
              {colorPalette.emerald.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Teal</div> */}
              {colorPalette.teal.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Cyan</div> */}
              {colorPalette.cyan.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Sky</div> */}
              {colorPalette.sky.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Blue</div> */}
              {colorPalette.blue.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Indigo</div> */}
              {colorPalette.indigo.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>


            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Violet</div> */}
              {colorPalette.violet.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Purple</div> */}
              {colorPalette.purple.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Fuchsia</div> */}
              {colorPalette.fuchsia.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Pink</div> */}
              {colorPalette.pink.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Rose</div> */}
              {colorPalette.rose.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>


          </div >}


          {choosePallete === 'tray' &&
            <div className="MB_tray_position">

              <HexColorPicker color={colorOnTray} onChange={getColorTray} />
              <div className="colorBoxInput">

                <span className="colorBoxTray" style={{ 'backgroundColor': `${colorOnTray}` }} ></span>
                <span># &nbsp;<HexColorInput className="MB_tray_input" color={colorOnTray} onChange={getColorTray} /></span>

              </div>

              {/* <ChromePicker lassName="MB_tray_Size"
                value="ddd" color={colorOnTray} onChange={getColorTray} disableAlpha /> */}
            </div>}


          {/* <div className="MB_flexBTN_Around">
            <button onClick={() => {
              prop.setOnoffColorPicker(false)
            }} className='MB_Sq_Btn MB_Btn_Border for_btn_theme'>
              OK
            </button>
          </div> */}
        </div >
      </div >


    </div >
  )
}

export default _09TsubColorPickerMobile