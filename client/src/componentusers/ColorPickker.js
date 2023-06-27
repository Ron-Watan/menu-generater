import React from 'react'
import { colorPalette } from '../componentusers/ColorPickerData.js'
const ColorPickker = (prop) => {
  const getColorPicker = (e) => {
    prop.setThemeSetup(e.target.value)
  }

  return (
    <div className='colorPickerTable'>

      <div className="colorPickerTitle">New</div>
      <div className="colorPickerGridRow">
        <div className="colorPickerName">Slate</div>
        {colorPalette.slate.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Gray</div>
        {colorPalette.gray.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Zinc</div>
        {colorPalette.zinc.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Neutral</div>
        {colorPalette.neutral.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Stone</div>
        {colorPalette.stone.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Red</div>
        {colorPalette.red.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Orange</div>
        {colorPalette.orange.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Amber</div>
        {colorPalette.amber.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>
      <div className="colorPickerGridRow">
        <div className="colorPickerName">Yellow</div>
        {colorPalette.yellow.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Lime</div>
        {colorPalette.lime.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Green</div>
        {colorPalette.green.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Emerald</div>
        {colorPalette.emerald.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Teal</div>
        {colorPalette.teal.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Cyan</div>
        {colorPalette.cyan.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Sky</div>
        {colorPalette.sky.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>
      <div className="colorPickerGridRow">
        <div className="colorPickerName">Blue</div>
        {colorPalette.blue.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>
      <div className="colorPickerGridRow">
        <div className="colorPickerName">Indigo</div>
        {colorPalette.indigo.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>


      <div className="colorPickerGridRow">
        <div className="colorPickerName">Violet</div>
        {colorPalette.violet.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Purple</div>
        {colorPalette.purple.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>

      <div className="colorPickerGridRow">
        <div className="colorPickerName">Fuchsia</div>
        {colorPalette.fuchsia.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>
      <div className="colorPickerGridRow">
        <div className="colorPickerName">Pink</div>
        {colorPalette.pink.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>
      <div className="colorPickerGridRow">
        <div className="colorPickerName">Rose</div>
        {colorPalette.rose.map((el, index) => (
          <button onClick={getColorPicker} value={el} className="colorPickerItem" style={{ 'backgroundColor': `${el}` }} key={index}></button>
        ))}
      </div>





    </div >
  )
}

export default ColorPickker