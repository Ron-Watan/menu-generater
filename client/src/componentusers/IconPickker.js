import React from 'react';
import { style1, style2 } from './IconPicker-Data';

const IconPickker = (prop) => {
  // client/src/componentusers/IconPicker-Data.js

  const getValueIcon = (even) => {
    prop.setState({ ...prop.state, icon_catagory: even.target.src });
  };

  return (
    <div className='iconPickerTable'>
      <div className='iconPickerTitle'>New</div>
      <div className='iconPickerName'>Style</div>
      <div className='iconPickerGridRow'>
        {/* {style1.map((icon, index) => (
          <button className="iconPickerItem" key={index}><img className='iconPickerColor' onClick={getValueIcon} src={require(`../All-iconPicker/style1/${style1[index]}`)} alt="" srcSet="" /></button>
        ))}
        {style2.map((icon, index) => (
          <button className="iconPickerItem" key={index}><img className='iconPickerColor' onClick={getValueIcon} src={require(`../All-iconPicker/style2/${style2[index]}`)} alt="" srcSet="" /></button>
        ))} */}
        <section id='glyphs'>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fast-food'></use>
            </svg>
            <div class='class-name'>#fast-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap'></use>
            </svg>
            <div class='class-name'>#bibimbap</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad'></use>
            </svg>
            <div class='class-name'>#salad</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#diet'></use>
            </svg>
            <div class='class-name'>#diet</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#hamburger'></use>
            </svg>
            <div class='class-name'>#hamburger</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger'></use>
            </svg>
            <div class='class-name'>#burger</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#diet-1'></use>
            </svg>
            <div class='class-name'>#diet-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger-1'></use>
            </svg>
            <div class='class-name'>#burger-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#balanced-diet'></use>
            </svg>
            <div class='class-name'>#balanced-diet</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#hot-pot'></use>
            </svg>
            <div class='class-name'>#hot-pot</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger-2'></use>
            </svg>
            <div class='class-name'>#burger-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-1'></use>
            </svg>
            <div class='class-name'>#salad-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#hamburger-1'></use>
            </svg>
            <div class='class-name'>#hamburger-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza'></use>
            </svg>
            <div class='class-name'>#pizza</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen'></use>
            </svg>
            <div class='class-name'>#ramen</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#vegetable'></use>
            </svg>
            <div class='class-name'>#vegetable</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#donut'></use>
            </svg>
            <div class='class-name'>#donut</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#dish'></use>
            </svg>
            <div class='class-name'>#dish</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#dish-1'></use>
            </svg>
            <div class='class-name'>#dish-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#vegetable-1'></use>
            </svg>
            <div class='class-name'>#vegetable-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger-3'></use>
            </svg>
            <div class='class-name'>#burger-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fast-food-1'></use>
            </svg>
            <div class='class-name'>#fast-food-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food'></use>
            </svg>
            <div class='class-name'>#food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#roasted-chicken'></use>
            </svg>
            <div class='class-name'>#roasted-chicken</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#hot'></use>
            </svg>
            <div class='class-name'>#hot</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-2'></use>
            </svg>
            <div class='class-name'>#salad-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#healthy-eating'></use>
            </svg>
            <div class='class-name'>#healthy-eating</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#tteok'></use>
            </svg>
            <div class='class-name'>#tteok</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-1'></use>
            </svg>
            <div class='class-name'>#bibimbap-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#drink'></use>
            </svg>
            <div class='class-name'>#drink</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#masala-dosa'></use>
            </svg>
            <div class='class-name'>#masala-dosa</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#biryani'></use>
            </svg>
            <div class='class-name'>#biryani</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#french-fries'></use>
            </svg>
            <div class='class-name'>#french-fries</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#vegetables'></use>
            </svg>
            <div class='class-name'>#vegetables</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pasta'></use>
            </svg>
            <div class='class-name'>#pasta</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-1'></use>
            </svg>
            <div class='class-name'>#ramen-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#thai-food'></use>
            </svg>
            <div class='class-name'>#thai-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#spaghetti'></use>
            </svg>
            <div class='class-name'>#spaghetti</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-1'></use>
            </svg>
            <div class='class-name'>#pizza-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-2'></use>
            </svg>
            <div class='class-name'>#pizza-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken'></use>
            </svg>
            <div class='class-name'>#fried-chicken</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#lobster'></use>
            </svg>
            <div class='class-name'>#lobster</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#broccoli'></use>
            </svg>
            <div class='class-name'>#broccoli</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#vegetable-2'></use>
            </svg>
            <div class='class-name'>#vegetable-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-3'></use>
            </svg>
            <div class='class-name'>#salad-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fish'></use>
            </svg>
            <div class='class-name'>#fish</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-safety'></use>
            </svg>
            <div class='class-name'>#food-safety</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-4'></use>
            </svg>
            <div class='class-name'>#salad-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-5'></use>
            </svg>
            <div class='class-name'>#salad-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#paneer'></use>
            </svg>
            <div class='class-name'>#paneer</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-potatoes'></use>
            </svg>
            <div class='class-name'>#fried-potatoes</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#french-fries-1'></use>
            </svg>
            <div class='class-name'>#french-fries-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sushi'></use>
            </svg>
            <div class='class-name'>#sushi</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles'></use>
            </svg>
            <div class='class-name'>#noodles</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pasta-1'></use>
            </svg>
            <div class='class-name'>#pasta-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-2'></use>
            </svg>
            <div class='class-name'>#bibimbap-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#shrimp'></use>
            </svg>
            <div class='class-name'>#shrimp</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#mushroom'></use>
            </svg>
            <div class='class-name'>#mushroom</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#taco'></use>
            </svg>
            <div class='class-name'>#taco</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#biryani-1'></use>
            </svg>
            <div class='class-name'>#biryani-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-2'></use>
            </svg>
            <div class='class-name'>#ramen-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#paella'></use>
            </svg>
            <div class='class-name'>#paella</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-3'></use>
            </svg>
            <div class='class-name'>#bibimbap-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#meal'></use>
            </svg>
            <div class='class-name'>#meal</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fish-1'></use>
            </svg>
            <div class='class-name'>#fish-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-1'></use>
            </svg>
            <div class='class-name'>#food-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#baby'></use>
            </svg>
            <div class='class-name'>#baby</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#healthy-food'></use>
            </svg>
            <div class='class-name'>#healthy-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chinese-food'></use>
            </svg>
            <div class='class-name'>#chinese-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-rice'></use>
            </svg>
            <div class='class-name'>#fried-rice</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#baby-1'></use>
            </svg>
            <div class='class-name'>#baby-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-2'></use>
            </svg>
            <div class='class-name'>#food-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-3'></use>
            </svg>
            <div class='class-name'>#pizza-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#rice'></use>
            </svg>
            <div class='class-name'>#rice</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chili-pepper'></use>
            </svg>
            <div class='class-name'>#chili-pepper</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#tteok-1'></use>
            </svg>
            <div class='class-name'>#tteok-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fish-2'></use>
            </svg>
            <div class='class-name'>#fish-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#lunch-box'></use>
            </svg>
            <div class='class-name'>#lunch-box</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-6'></use>
            </svg>
            <div class='class-name'>#salad-6</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#healthy-eating-1'></use>
            </svg>
            <div class='class-name'>#healthy-eating-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#mango'></use>
            </svg>
            <div class='class-name'>#mango</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#taco-1'></use>
            </svg>
            <div class='class-name'>#taco-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-4'></use>
            </svg>
            <div class='class-name'>#pizza-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cocktail'></use>
            </svg>
            <div class='class-name'>#cocktail</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger-4'></use>
            </svg>
            <div class='class-name'>#burger-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-3'></use>
            </svg>
            <div class='class-name'>#ramen-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-4'></use>
            </svg>
            <div class='class-name'>#bibimbap-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-4'></use>
            </svg>
            <div class='class-name'>#ramen-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#hot-1'></use>
            </svg>
            <div class='class-name'>#hot-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fruits-and-vegetables'></use>
            </svg>
            <div class='class-name'>#fruits-and-vegetables</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chicken-leg'></use>
            </svg>
            <div class='class-name'>#chicken-leg</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#samosa'></use>
            </svg>
            <div class='class-name'>#samosa</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#soda'></use>
            </svg>
            <div class='class-name'>#soda</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#breakfast'></use>
            </svg>
            <div class='class-name'>#breakfast</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger-sandwich'></use>
            </svg>
            <div class='class-name'>#burger-sandwich</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#shawarma'></use>
            </svg>
            <div class='class-name'>#shawarma</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chinese-food-1'></use>
            </svg>
            <div class='class-name'>#chinese-food-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#iftar'></use>
            </svg>
            <div class='class-name'>#iftar</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#nachos'></use>
            </svg>
            <div class='class-name'>#nachos</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-fish'></use>
            </svg>
            <div class='class-name'>#fried-fish</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#budae-jjigae'></use>
            </svg>
            <div class='class-name'>#budae-jjigae</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cooking'></use>
            </svg>
            <div class='class-name'>#cooking</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#hot-soup'></use>
            </svg>
            <div class='class-name'>#hot-soup</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#baby-food'></use>
            </svg>
            <div class='class-name'>#baby-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#spaguetti'></use>
            </svg>
            <div class='class-name'>#spaguetti</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ice-cream'></use>
            </svg>
            <div class='class-name'>#ice-cream</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#meat'></use>
            </svg>
            <div class='class-name'>#meat</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#baby-2'></use>
            </svg>
            <div class='class-name'>#baby-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles-1'></use>
            </svg>
            <div class='class-name'>#noodles-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chicken-leg-1'></use>
            </svg>
            <div class='class-name'>#chicken-leg-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#thai-food-1'></use>
            </svg>
            <div class='class-name'>#thai-food-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#dinner'></use>
            </svg>
            <div class='class-name'>#dinner</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sushi-1'></use>
            </svg>
            <div class='class-name'>#sushi-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#masala-papad'></use>
            </svg>
            <div class='class-name'>#masala-papad</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-7'></use>
            </svg>
            <div class='class-name'>#salad-7</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#spicy-food'></use>
            </svg>
            <div class='class-name'>#spicy-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#mexican-food'></use>
            </svg>
            <div class='class-name'>#mexican-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#christmas-dinner'></use>
            </svg>
            <div class='class-name'>#christmas-dinner</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken-1'></use>
            </svg>
            <div class='class-name'>#fried-chicken-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#lobster-1'></use>
            </svg>
            <div class='class-name'>#lobster-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fish-and-chips'></use>
            </svg>
            <div class='class-name'>#fish-and-chips</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fresh'></use>
            </svg>
            <div class='class-name'>#fresh</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#rice-1'></use>
            </svg>
            <div class='class-name'>#rice-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#korean'></use>
            </svg>
            <div class='class-name'>#korean</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#tom-yum'></use>
            </svg>
            <div class='class-name'>#tom-yum</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles-2'></use>
            </svg>
            <div class='class-name'>#noodles-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#kimbap'></use>
            </svg>
            <div class='class-name'>#kimbap</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken-2'></use>
            </svg>
            <div class='class-name'>#fried-chicken-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#kebab'></use>
            </svg>
            <div class='class-name'>#kebab</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bowl'></use>
            </svg>
            <div class='class-name'>#bowl</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fast-food-2'></use>
            </svg>
            <div class='class-name'>#fast-food-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-5'></use>
            </svg>
            <div class='class-name'>#pizza-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#korean-bbq'></use>
            </svg>
            <div class='class-name'>#korean-bbq</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pad-thai'></use>
            </svg>
            <div class='class-name'>#pad-thai</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#oden'></use>
            </svg>
            <div class='class-name'>#oden</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#tom-yum-goong'></use>
            </svg>
            <div class='class-name'>#tom-yum-goong</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#kebab-1'></use>
            </svg>
            <div class='class-name'>#kebab-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sweet-sour-pork'></use>
            </svg>
            <div class='class-name'>#sweet-sour-pork</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#spicy-food-1'></use>
            </svg>
            <div class='class-name'>#spicy-food-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-5'></use>
            </svg>
            <div class='class-name'>#ramen-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#banh-mi'></use>
            </svg>
            <div class='class-name'>#banh-mi</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sandwich'></use>
            </svg>
            <div class='class-name'>#sandwich</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#goulash'></use>
            </svg>
            <div class='class-name'>#goulash</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#english-breakfast'></use>
            </svg>
            <div class='class-name'>#english-breakfast</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chinese-food-2'></use>
            </svg>
            <div class='class-name'>#chinese-food-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sushi-2'></use>
            </svg>
            <div class='class-name'>#sushi-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pad-thai-1'></use>
            </svg>
            <div class='class-name'>#pad-thai-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chili'></use>
            </svg>
            <div class='class-name'>#chili</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-6'></use>
            </svg>
            <div class='class-name'>#ramen-6</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-5'></use>
            </svg>
            <div class='class-name'>#bibimbap-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#paella-1'></use>
            </svg>
            <div class='class-name'>#paella-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-8'></use>
            </svg>
            <div class='class-name'>#salad-8</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodle'></use>
            </svg>
            <div class='class-name'>#noodle</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chicken-rice'></use>
            </svg>
            <div class='class-name'>#chicken-rice</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-3'></use>
            </svg>
            <div class='class-name'>#food-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#meal-1'></use>
            </svg>
            <div class='class-name'>#meal-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#meat-1'></use>
            </svg>
            <div class='class-name'>#meat-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-6'></use>
            </svg>
            <div class='class-name'>#pizza-6</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cake-slice'></use>
            </svg>
            <div class='class-name'>#cake-slice</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burger-sandwich-1'></use>
            </svg>
            <div class='class-name'>#burger-sandwich-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#good-review'></use>
            </svg>
            <div class='class-name'>#good-review</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#diet-2'></use>
            </svg>
            <div class='class-name'>#diet-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#meat-2'></use>
            </svg>
            <div class='class-name'>#meat-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-7'></use>
            </svg>
            <div class='class-name'>#pizza-7</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken-3'></use>
            </svg>
            <div class='class-name'>#fried-chicken-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bubble-tea'></use>
            </svg>
            <div class='class-name'>#bubble-tea</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-4'></use>
            </svg>
            <div class='class-name'>#food-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken-4'></use>
            </svg>
            <div class='class-name'>#fried-chicken-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#burrito'></use>
            </svg>
            <div class='class-name'>#burrito</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bento'></use>
            </svg>
            <div class='class-name'>#bento</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#stir-fry'></use>
            </svg>
            <div class='class-name'>#stir-fry</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fish-3'></use>
            </svg>
            <div class='class-name'>#fish-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-6'></use>
            </svg>
            <div class='class-name'>#bibimbap-6</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-7'></use>
            </svg>
            <div class='class-name'>#ramen-7</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-8'></use>
            </svg>
            <div class='class-name'>#pizza-8</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fast-food-3'></use>
            </svg>
            <div class='class-name'>#fast-food-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#vegetables-1'></use>
            </svg>
            <div class='class-name'>#vegetables-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#orange-chicken'></use>
            </svg>
            <div class='class-name'>#orange-chicken</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#tendon'></use>
            </svg>
            <div class='class-name'>#tendon</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#healthy-food-1'></use>
            </svg>
            <div class='class-name'>#healthy-food-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#onigiri'></use>
            </svg>
            <div class='class-name'>#onigiri</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-9'></use>
            </svg>
            <div class='class-name'>#pizza-9</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#takoyaki'></use>
            </svg>
            <div class='class-name'>#takoyaki</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-shrimp'></use>
            </svg>
            <div class='class-name'>#fried-shrimp</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cupcake'></use>
            </svg>
            <div class='class-name'>#cupcake</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-9'></use>
            </svg>
            <div class='class-name'>#salad-9</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken-5'></use>
            </svg>
            <div class='class-name'>#fried-chicken-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chinese-food-3'></use>
            </svg>
            <div class='class-name'>#chinese-food-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-tray'></use>
            </svg>
            <div class='class-name'>#food-tray</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#dinner-1'></use>
            </svg>
            <div class='class-name'>#dinner-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#thali'></use>
            </svg>
            <div class='class-name'>#thali</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pretzel'></use>
            </svg>
            <div class='class-name'>#pretzel</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-7'></use>
            </svg>
            <div class='class-name'>#bibimbap-7</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#nachos-1'></use>
            </svg>
            <div class='class-name'>#nachos-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#onigiri-1'></use>
            </svg>
            <div class='class-name'>#onigiri-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#croissant'></use>
            </svg>
            <div class='class-name'>#croissant</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#fried-chicken-6'></use>
            </svg>
            <div class='class-name'>#fried-chicken-6</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-8'></use>
            </svg>
            <div class='class-name'>#ramen-8</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pizza-10'></use>
            </svg>
            <div class='class-name'>#pizza-10</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#spaghetti-1'></use>
            </svg>
            <div class='class-name'>#spaghetti-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#spring-rolls'></use>
            </svg>
            <div class='class-name'>#spring-rolls</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-9'></use>
            </svg>
            <div class='class-name'>#ramen-9</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chicken-rice-1'></use>
            </svg>
            <div class='class-name'>#chicken-rice-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#iftar-1'></use>
            </svg>
            <div class='class-name'>#iftar-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#takoyaki-1'></use>
            </svg>
            <div class='class-name'>#takoyaki-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cherries'></use>
            </svg>
            <div class='class-name'>#cherries</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#bibimbap-8'></use>
            </svg>
            <div class='class-name'>#bibimbap-8</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#salad-10'></use>
            </svg>
            <div class='class-name'>#salad-10</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#tom-kha-gai'></use>
            </svg>
            <div class='class-name'>#tom-kha-gai</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#broccoli-1'></use>
            </svg>
            <div class='class-name'>#broccoli-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#potatoes'></use>
            </svg>
            <div class='class-name'>#potatoes</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#curry'></use>
            </svg>
            <div class='class-name'>#curry</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sweets'></use>
            </svg>
            <div class='class-name'>#sweets</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cake'></use>
            </svg>
            <div class='class-name'>#cake</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#kung-pao-chicken'></use>
            </svg>
            <div class='class-name'>#kung-pao-chicken</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#catering'></use>
            </svg>
            <div class='class-name'>#catering</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#dried-fruits'></use>
            </svg>
            <div class='class-name'>#dried-fruits</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#kebab-2'></use>
            </svg>
            <div class='class-name'>#kebab-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#japanese-food'></use>
            </svg>
            <div class='class-name'>#japanese-food</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#corn'></use>
            </svg>
            <div class='class-name'>#corn</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#lemon'></use>
            </svg>
            <div class='class-name'>#lemon</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#cheese'></use>
            </svg>
            <div class='class-name'>#cheese</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#sushi-3'></use>
            </svg>
            <div class='class-name'>#sushi-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#taco-2'></use>
            </svg>
            <div class='class-name'>#taco-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#food-5'></use>
            </svg>
            <div class='class-name'>#food-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#yakisoba'></use>
            </svg>
            <div class='class-name'>#yakisoba</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#rice-bowl'></use>
            </svg>
            <div class='class-name'>#rice-bowl</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#pad-thai-2'></use>
            </svg>
            <div class='class-name'>#pad-thai-2</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#chinese-food-4'></use>
            </svg>
            <div class='class-name'>#chinese-food-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-10'></use>
            </svg>
            <div class='class-name'>#ramen-10</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles-3'></use>
            </svg>
            <div class='class-name'>#noodles-3</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles-4'></use>
            </svg>
            <div class='class-name'>#noodles-4</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles-5'></use>
            </svg>
            <div class='class-name'>#noodles-5</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodles-6'></use>
            </svg>
            <div class='class-name'>#noodles-6</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#ramen-11'></use>
            </svg>
            <div class='class-name'>#ramen-11</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#lunch-box-1'></use>
            </svg>
            <div class='class-name'>#lunch-box-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#penguin'></use>
            </svg>
            <div class='class-name'>#penguin</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#noodle-1'></use>
            </svg>
            <div class='class-name'>#noodle-1</div>
          </div>
          <div class='glyph'>
            <svg class='icon'>
              <use xlink:href='#lunch-box-2'></use>
            </svg>
            <div class='class-name'>#lunch-box-2</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IconPickker;
