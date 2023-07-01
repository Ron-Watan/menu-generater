

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import catalog1 from '../img/promotion1.png'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import axios from 'axios';
// import { Hidden } from '@mui/material';
// import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const Accordion = styled((props) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

  backgroundColor: `transparent`,

  border: `1px solid ${theme.palette.divider}`,
  borderRight: 0,
  borderBottom: 0,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  paddingLeft: '70px',
  paddingRight: '30px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : '#e1e1e156',
  // : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({

  padding: theme.spacing(2),
  paddingLeft: '80px',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



///////////////////////////////////////////////////////////////////////////
// prop.listMunu
// prop.indexM
// prop.addFavorite
// prop.removeFavorite
// prop.triggerIcon
// prop.setTriggerIcon
// prop.key
// prop.languageSetup
// prop.setLanguage
// prop.language
// prop.themeSetup

const AcordionSubComp = (prop) => {

  const subListMenu = prop.listMunu.listMenu

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // console.log(subListMenu)

  // console.log(elementRef.current.offsetHeight);
  const drag = () => {
    // console.log("fOCUS === " + elementRef.current[0].clientHeight);

  }
  // console.log('Data from Accord :' + Boolean(subListMenu))


  // const checkOption = (el) => {
  //   const checkType = Boolean((el.option_name_1 +
  //     el.option_name_2 +
  //     el.option_name_3 +
  //     el.option_name_4 +
  //     el.option_name_5 +
  //     el.option_name_6).trim())
  //   return checkType
  // }



  subListMenu.map((element, index) => {
    element.panelCode = 'panel' + index
  })

  const [newSubListMenu, setNewSubListMenu] = useState(subListMenu)


  //- Add data for functional


  const addFavorite = (index) => {
    let dataSet = [...newSubListMenu];
    let data = dataSet[index]
    data.favor = true
    prop.addFavorite(index, [...newSubListMenu], prop.listMunu.catagory, prop.indexM)
    setExpanded(false)
  }

  const removeFavorite = (index) => {
    let dataSet = [...newSubListMenu];
    let data = dataSet[index]
    prop.removeFavorite(index, [...newSubListMenu], prop.indexM)
    data.favor = false
  }

  // useEffect(() => {
  // console.dir(elementRef.current[0]);
  // console.log(elementRef.getBoundingClientRect().width)


  // eslint-disable-next-line
  // }, [elementRef.current]);
  // useEffect(() => {
  // prop.favorite(favorList)
  // eslint-disable-next-line
  // }, []);


  // useEffect(() => {


  // }, [])
  const elementRef = useRef([]);

  // const fntest = (el) => {

  //   if (!el) return
  //   console.log(el.getBoundingClientRect());

  // }



  //= setTriggerIcon



  const positionTrigger = 200
  let newData = []
  const acArrayEl = document.querySelectorAll('.acArray')
  window.addEventListener('scroll', () => {

    acArrayEl.forEach((element, index) => {
      if (!element) return
      const point = element.getBoundingClientRect().top
      if (point < positionTrigger) {
        newData[index] = true
        newData[index - 1] = false
        prop.setTriggerIcon(newData)

      }
      else if (point > positionTrigger) {
        newData[index] = (false)

      }
    })

    prop.setTriggerIcon(newData)

  },)


  // console.log(prop.triggerIcon)
  // componentWillUnmount: function() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },

  // const scrollFn = () => (event) {
  //   let scrollTop = event.srcElement.body.scrollTop,
  //     itemTranslate = Math.min(0, scrollTop / 3 - 60);

  //   setState({
  //     transform: itemTranslate
  //   });
  // },
  const [file, setFile] = useState();
  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  const getImage = () => {
    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: prop.listMunu.imgId })
      .then((result) => {
        if (!result.data.images) {
          return setFile('')
          // return dispath(hideLoading());
        }

        const getResult = result.data.images;
        const base64Flag = 'data:image/png;base64,';
        const imageStr = arrayBufferToBase64(getResult.img.data.data);
        const tagImage = base64Flag + imageStr;

        // console.log(tagImage)

        setFile(tagImage);
        // dispath(hideLoading());
        // setTimeout(() => {
        //   dispath(hideLoading());
        // }, 500);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  useEffect(() => {
    getImage();
  }, []);


  // prop.themeSetup.categorySpanColor
  const temp = {
    categoryActiveClass
      :
      "category-Custom-Circle-Active",
    categoryBoxClass
      :
      "category-Custom-CircleSimple ",
    categoryBoxColor
      :
      "#f1f5f9",
    categoryFontColor
      :
      "#fecaca",
    categorySpanClass
      :
      "category-Custom-Circle",
    categorySpanColor
      :
      "#e4e4e7",
  }


  const heartIcon = {
    favor1: 'favor1.svg', favor2: 'favor2.svg',
  }

  //- //- //- //- //- //- //- //- //- //- //- //-

  return (
    <div id={prop.indexM} className={`acArray mx-auto max-w-7xl `}
      style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}` }}
      ref={elementRef}><i className="x">!Theme</i>

      <div className="categoryImg" style={{
        backgroundImage: `url(${file})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className={prop.themeSetup.categoryMotion.categoryBoxClass} style={{ 'backgroundColor': `${prop.themeSetup.categoryMotion.categoryBoxColor}` }}>
          <span className={`category-Custom-Title`} style={{ 'color': `${prop.themeSetup.categoryMotion.categoryFontColor}` }}> {prop.listMunu.catagory}</span>
          <span className={`${prop.themeSetup.categoryMotion.categorySpanClass} ${prop.triggerIcon[prop.indexM] && `${prop.themeSetup.categoryMotion.categoryActiveClass}`}`} style={{ 'backgroundColor': `${prop.themeSetup.categoryMotion.categorySpanColor}` }}></span>
        </div>

      </div>
      {/* <ul className="px-2 sm:px-6 lg:px-8"> */}
      <ul className="">
        <i className="x">!Theme</i>
        {newSubListMenu.map((el, index) => (
          // <div ref={(element) => { elementRef.current[index] = element; }} onClick={drag} className='' key={index}>
          <div onClick={drag} className='accTab' key={index}>
            <button onClick={event => removeFavorite(index, event, el.food_name, el.price)} className={`${!el.favor && 'displayNone'} heartFavor2Box`}>
              <div className={` heartFavor2Box-1 flex justify-center gap-x-6`}>

                <img src={require(`../all-icon/footbar-icon/${heartIcon.favor2}`)} alt="" />
              </div>
            </button>

            <div className="">
              <Accordion expanded={expanded === el.panelCode} onChange={handleChange(el.panelCode)}
                themeSetup={prop.themeSetup} >




                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  {/* <Typography ><span className='test44'>{el.food_name}</span><span>{el.price}</span></Typography> */}
                  <div style={{ 'color': `${prop.themeSetup.body.bodyFonttColor}` }}>
                    {prop.language === 1 && <span>{el.food_name}</span>}
                    {prop.language === 2 && <span>{el.food_name_2}</span>}
                  </div>
                  <div className='flex' style={{ 'color': `${prop.themeSetup.body.bodyFonttColor}` }}>
                    {/* {prop.language === 1 && <span>{el.price}</span>}
                  {prop.language === 2 && <span>{el.price}</span>} */}
                    {prop.language === 1 && <span>{prop.languageSetup.style_1 ?
                      <div ><span>{prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span> <span>{el.price}</span> <span>&nbsp;{!prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span> </div>
                      : <div ><span></span><span>{el.price}</span><span></span></div>}</span>}
                    {prop.language === 2 && <span>{prop.languageSetup.style_2 ?
                      <div ><span>{prop.languageSetup.followed_2 && prop.languageSetup.symbol_2}</span> <span>{el.price}</span> <span>&nbsp;{!prop.languageSetup.followed_2 && prop.languageSetup.symbol_2}</span> </div>
                      : <div ><span></span><span>{el.price}</span><span></span></div>}</span>}
                    {/* 
                  {prop.languageSetup.style_1 ?
                    <div className="ex25"><span>{prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span> <span>el.price</span> <span>&nbsp;{!prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span> </div>
                    : <div className="ex25"><span></span><span>el.price</span><span></span></div>} */}





                  </div>



                </AccordionSummary>


                <AccordionDetails style={{ 'color': `${prop.themeSetup.body.bodyFonttColor}` }}>
                  {prop.language === 1 && <Typography >{el.description}</Typography>}
                  {prop.language === 2 && <Typography>{el.description}</Typography>}
                  {prop.language === 1 && <div>{el.remark}</div>}
                  {prop.language === 2 && <div>{el.remark}</div>}
                  <div className={`heartFavor1Box`}>


                    <button onClick={event => addFavorite(index, event, el.panelCode)} className={`${el.favor && 'opacity-0 transition-all'} `}>
                      <img src={require(`../all-icon/footbar-icon/${heartIcon.favor1}`)} alt="" />
                    </button>



                  </div>


                </AccordionDetails>

              </Accordion>    </div>
          </div>
        ))
        }

      </ul >
    </div >
  );
}

export default AcordionSubComp


// export default function CustomizedAccordions() {
//   return <CustomizedAccordions1 menu={userManuLists} />;
// }



{/* <div className='grid grid-cols-3 gap-1 justify-start mt-2'>
                  <button className={`border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_2}`}</p><p>{`+$${el.option_price_2}`}</p> </button>


                    <button className={`border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_2}`}</p><p>{`+$${el.option_price_2}`}</p> </button>

                    <button className={`border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_3}`}</p><p>{`+$${el.option_price_3}`}</p> </button>

                    <button className={`border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_4}`}</p><p>{`+$${el.option_price_4}`}</p> </button>

                    <button className={`border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_5}`}</p><p>{`+$${el.option_price_5}`}</p> </button>

                    <button className={`border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_6}`}</p><p>{`+$${el.option_price_6}`}</p> </button>
     
                </div> */}