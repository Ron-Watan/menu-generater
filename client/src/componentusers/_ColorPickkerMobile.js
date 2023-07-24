import React, { useRef, useState } from 'react'
import { colorPalette } from '../componentusers/ColorPickerData.js'
import { SketchPicker, ChromePicker } from 'react-color';
import { Alpha } from 'react-color/lib/components/common';
import { HexColorPicker, HexColorInput } from "react-colorful";
// var { Alpha } = require('react-color/lib/components/common')
const _ColorPickkerMobile = (prop) => {
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

  const getColorTray = (color) => {
    // let seeColor = color.hex
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
        <div onClick={() => setChoosePallete('tray')} className='MB_menuListBtn'>QT</div>

        <div onClick={() => setChoosePallete('pallete')} className='MB_menuListBtn'>NF</div>

      </div>

      <div className="MB_AB_FullAgain">

        <div className='MB_themeLayout_Grid'>


          {choosePallete === 'pallete' && <div className='MB_Container_Sroll'>

            {/* <div className="colorPickerTitle">New</div> */}
            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Slate</div> */}
              {colorPalette.slate.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Gray</div> */}
              {colorPalette.gray.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Zinc</div> */}
              {colorPalette.zinc.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

            <div className="MB_colorPickerGridRow">
              {/* <div className="colorPickerName">Neutral</div> */}
              {colorPalette.neutral.map((el, index) => (
                <button onClick={getColorPicker} value={el} className="MB_colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
              ))}
            </div>

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
              <div className="colorBoxInput"><span className="colorBoxTray" style={{ 'backgroundColor': `${colorOnTray}` }} ></span><span># &nbsp;<HexColorInput className="MB_tray_input" color={colorOnTray} onChange={getColorTray} /></span> </div>
              {/* <ChromePicker lassName="MB_tray_Size"
                value="ddd" color={colorOnTray} onChange={getColorTray} disableAlpha /> */}
            </div>}


          <div className="MB_flexBTN_Around">
            <button onClick={() => {
              prop.setOnoffColorPicker(false)
            }} className='MB_Sq_Btn MB_Btn_Border for_btn_theme'>
              OK
            </button>
          </div>
        </div >
      </div >


    </div >
  )
}

export default _ColorPickkerMobile