

import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';
// import fff from '../../all-icon/footbar-icon'




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
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  paddingLeft: '30px',
  paddingRight: '10px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#e1e1e156'
      : 'rgba(255, 255, 255, .1)',
  // : 'rgba(0, 0, 0, .03)',
  // ? 'rgba(255, 255, 255, .05)'
  // : '#e1e1e156',
  // flexDirection: 'row-reverse',
  // '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //   transform: 'rotate(90deg)',
  // },
  // '& .MuiAccordionSummary-content': {
  //   marginLeft: theme.spacing(1),
  // },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({

  padding: theme.spacing(2),
  paddingLeft: '40px',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



//=
const AcordionSubComp = (prop) => {
  const photoHostName = `${process.env.REACT_APP_API}/user/photos/`

  const subListMenu = prop.listMunu.listMenu

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);

  };

  // const addPanel = () => {
  subListMenu.map((element, index) => {
    element.panelCode = 'panel' + index
  })
  // }


  const [newSubListMenu, setNewSubListMenu] = useState(subListMenu)


  const addFavorite = (index) => {
    let dataSet = [...newSubListMenu];
    let data = dataSet[index]
    data.favor = true
    prop.addFavorite(index, [...newSubListMenu], prop.listMunu.catagory, `${prop.menuTime}${prop.indexM}`)
    setExpanded(false)
  }

  const removeFavorite = (index) => {
    let dataSet = [...newSubListMenu];
    let data = dataSet[index]
    prop.removeFavorite(index, [...newSubListMenu], `${prop.menuTime}${prop.indexM}`)
    data.favor = false
  }


  // document.addEventListener('', () => {

  //   acArrayEl.forEach((element, index) => {
  //     if (!element) return
  //     const point = element.getBoundingClientRect().top

  //     if (point < positionTrigger) {
  //       newData[index] = true
  //       newData[index - 1] = false
  //       prop.setTriggerIcon(newData)

  //     }
  //     else if (point > positionTrigger) {
  //       newData[index] = (false)

  //     }
  //   })

  //   prop.setTriggerIcon(newData)

  // },)
  // useEffect(() => {
  //   addPanel()


  // }, [subListMenu])

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



  const heartIcon = {
    favor1: 'favor1.svg', favor2: 'favor2.svg',
  }





  console.log(prop.listMunu.listMenu[0].redTag)

  // window.addEventListener("load", event => {
  //   // var image = document.querySelector('img');
  //   console.log('www')
  //   var img = document.getElementById(`tesssss`),
  //     style = img.currentStyle || window.getComputedStyle(img, false),
  //     bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");


  //   var isLoaded = img.complete && img.naturalHeight !== 0;
  //   alert(isLoaded);
  // });
  //- //- //- //- //- //- //- //- //- //- //- //-

  return (
    <div id={prop.indexM} className={`acArray mx-auto `}
      style={{ 'backgroundColor': `${prop.bodyStyle.bodyBgColor}` }}>

      <div className="categoryImg" style={{
        // backgroundImage: `url(${photoHostName}${prop.listMunu.imgId})`,
        // backgroundImage: `url(${prop.listMunu.imgId ? `${photoHostName}${prop.listMunu.imgId}?key=${prop.imageKey}` : ''})`,

        backgroundImage: `url(${prop.listMunu.imgId ? `${photoHostName}${prop.listMunu.imgId}?key=${prop.imageKey}` : ''})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: `${prop.categoryMotion.categoryPhotoSize}`
      }}>


        <div className={prop.categoryMotion.categoryBoxClass} style={{ 'backgroundColor': `${prop.categoryMotion.categoryBoxColor}` }}>
          <span className={`category-Custom-Title`} style={{
            'fontFamily': `${prop.bodyStyle?.bodyFontFamily}`,
            'color': `${prop.categoryMotion.categoryFontColor}`,
            'fontSize': `${prop.bodyStyle.bodyFontSize * 1.4}rem`, 'fontWeight': '600'


          }}> {prop.language === 1 ? prop.listMunu.catagory : prop.listMunu.catagory_2}</span>
          <span className={`${prop.categoryMotion.categorySpanClass} ${(prop.triggerIcon[prop.indexM] || prop.categoryActiveTheme) && `${prop.categoryMotion.categoryActiveClass}`}`} style={{ 'backgroundColor': `${prop.categoryMotion.categorySpanColor}` }}></span>
        </div>

      </div>

      {/* <ul className="px-2 sm:px-6 lg:px-8"> */}
      <ul className="">
        <i className="x">!Theme</i>
        {subListMenu.map((el, index) => (

          <div className='accTab' key={index}>

            {prop.onOffSetting.footbar && <button onClick={event => removeFavorite(index, event, el.food_name, el.price)} className={`${!el.favor && 'displayNone'} heartFavor2Box`}>
              {prop.onOffSetting.favoritHeart && <div className={` heartFavor2Box-1`}>

                <img src={require(`../../all-icon/footbar-icon/${heartIcon.favor2}`)} alt="" />
              </div>}
            </button>}

            <i className="x">ON/OFF SlIDE ACCORDIAN </i>

            <i className="x">On Food Name 1 2</i>

            <Accordion expanded={(expanded === el.panelCode || prop.onOffSetting.accordian === false) && true} onChange={handleChange(el.panelCode)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

                <i className="x"> Name 1 2</i>

                <div className={prop.onOffSetting.sideBar ? 'paddingL_40' : ''}
                  style={{
                    'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
                    'color': `${prop.bodyStyle.bodyFonttColor}`,
                    'fontSize': `${prop.bodyStyle.bodyFontSize * 1.05}rem`, 'fontWeight': '500',

                  }}>
                  <span className='posRelative'>{prop.language === 1 ? el.food_name : el.food_name_2}{el.redTag && <span className="redtag">{el.redTag}</span>}</span>
                  
                </div>




                <i className="x"> Price 1 2</i>

                <div className={`flex`}
                  style={{
                    'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,

                    'color': `${prop.bodyStyle.bodyFonttColor}`,
                    'fontSize': `${prop.bodyStyle.bodyFontSize * 1.05}rem`, 'fontWeight': '500'
                  }}>

                  {prop.language === 1 && <span>{prop.languageSetup.style_1 ?
                    <div ><span>{prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span><span>{el.price}</span> <span>{!prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span> </div>
                    : <div ><span></span><span>{el.price}</span><span></span></div>}</span>}
                  {prop.language === 2 && <span>{prop.languageSetup.style_2 ?
                    <div ><span>{prop.languageSetup.followed_2 && prop.languageSetup.symbol_2}</span><span>{el.price_2}</span> <span>{!prop.languageSetup.followed_2 && prop.languageSetup.symbol_2}</span> </div>
                    : <div ><span></span><span>{el.price_2}</span><span></span></div>}</span>}
                </div>

              </AccordionSummary>

              <i className="x"> IF ON DESCRIPTION </i>

              {prop.onOffSetting.description && <AccordionDetails>

                <i className="x"> Descritption 1 2</i>

                <div
                  style={{
                    'paddingLeft': `${prop.onOffSetting.sideBar ? '38px' : '8px'}`,
                    'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
                    'color': `${prop.bodyStyle.bodyFonttColor}`,
                    'fontSize': `${prop.bodyStyle.bodyFontSize * 1}rem`,
                    'fontWeight': '400',
                    'border': 'none',
                    'minHeight': 'unset',
                    'paddingTop': '.8rem',
                    'whiteSpace': 'pre-wrap',
                  }}>

                  {prop.language === 1 ? el.description : el.description_2}
                </div>

                <i className="x">Remark 1 2</i>
                {el.remark &&
                  <div
                    style={{
                      'paddingLeft': `${prop.onOffSetting.sideBar ? '38px' : '8px'}`,
                      'fontFamily': `${prop.bodyStyle.bodyFontFamily}`,
                      'color': `${prop.bodyStyle.bodyFonttColor}`,
                      'fontSize': `${prop.bodyStyle.bodyFontSize * .9}rem`,
                      'fontStyle': 'italic',
                      'fontWeight': '400',
                      'border': 'none',
                      'minHeight': 'unset',
                      'paddingTop': '.8rem',
                      'whiteSpace': 'pre-wrap',

                    }}>

                    {prop.language === 1 ? `${el.remark}` : el.remark_2}
                  </div>
                }

                <div className={`heartFavor1Box`}
                  style={{
                    'height': `${(!prop.onOffSetting.favoritHeart || !prop.onOffSetting.footbar) ? '1.5rem' : ''}`,
                  }}>
                  {(prop.onOffSetting.favoritHeart && prop.onOffSetting.footbar) && <button onClick={event => addFavorite(index, event, el.panelCode)} className={`${el.favor && 'opacity-0 transition-all'} `}>
                    <img src={require(`../../all-icon/footbar-icon/${heartIcon.favor1}`)} alt="" />
                  </button>}
                </div>

              </AccordionDetails>}
            </Accordion>


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