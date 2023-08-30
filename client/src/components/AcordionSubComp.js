

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import {useState } from 'react';


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
  paddingLeft: '30px',
  paddingRight: '10px',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#e1e1e156'
      : 'rgba(255, 255, 255, .1)',
  // : 'rgba(0, 0, 0, .03)',
  // ? 'rgba(255, 255, 255, .05)'
  // : '#e1e1e156',
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
  paddingLeft: '40px',
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
  const photoHostName = `${process.env.REACT_APP_API}/user/photos/`
  const subListMenu = prop.listMunu.listMenu

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);

  };


  subListMenu.forEach((element, index) => {
    element.panelCode = 'panel' + index
  })
 // eslint-disable-next-line
  const [newSubListMenu, setNewSubListMenu] = useState(subListMenu)


  const addFavorite = (index) => {
    // console.log(index)
    let dataSet = [...newSubListMenu];
    let data = dataSet[index]
    data.favor = true
    prop.addFavorite(index, [...newSubListMenu], prop.listMunu.catagory, `${prop.menuTime}${prop.indexM}`)
    setExpanded(false)
  }
  // console.log(newSubListMenu)
  const removeFavorite = (index) => {
    let dataSet = [...newSubListMenu];
    let data = dataSet[index]
    prop.removeFavorite(index, [...newSubListMenu], `${prop.menuTime}${prop.indexM}`)
    data.favor = false
  }




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
  // const [file, setFile] = useState('');

  // function arrayBufferToBase64(buffer) {
  //   var binary = '';
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return window.btoa(binary);
  // }
  // const getImage = () => {
  //   // dispath(showLoading())
  //   axios
  //     .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: prop.listMunu.imgId })
  //     .then((result) => {

  //       if (!result.data.images) {
  //         return setFile('')
  //         // return dispath(hideLoading());
  //       }

  //       const getResult = result.data.images;

  //       const base64Flag = 'data:image/png;base64,';
  //       const imageStr = arrayBufferToBase64(getResult.img.data.data);
  //       const tagImage = base64Flag + imageStr;

  //       // console.log(tagImage)

  //       setFile(tagImage);
  //       // dispath(hideLoading());
  //       // setTimeout(() => {
  //       //   dispath(hideLoading());
  //       // }, 500);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };


  // useEffect(() => {
  //   getImage();
  // }, []);


  const heartIcon = {
    favor1: 'favor1.svg', favor2: 'favor2.svg',
  }

             

  return (
    <div id={prop.indexM} className={`acArray mx-auto max-w-7xl unselectable`}
      style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}` }}>

      <div className="categoryImg" style={{
        // backgroundImage: `url(${photoHostName}${prop.listMunu.imgId})`,
        backgroundImage: `url(${prop.listMunu.imgId ? photoHostName + prop.listMunu.imgId : ''})`,

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: `${prop.themeSetup.categoryMotion.categoryPhotoSize}`
      }}>


        <div className={prop.themeSetup.categoryMotion.categoryBoxClass} style={{ 'backgroundColor': `${prop.themeSetup.categoryMotion.categoryBoxColor}` }}>
          <span className={`category-Custom-Title`} style={{
            'color': `${prop.themeSetup.categoryMotion.categoryFontColor}`,
            'fontSize': `${prop.themeSetup.body.bodyFontSize * 1.4}rem`, 'fontWeight': '600'


          }}> {prop.language === 1 ? prop.listMunu.catagory : prop.listMunu.catagory_2}</span>
          <span className={`${prop.themeSetup.categoryMotion.categorySpanClass} ${prop.triggerIcon[prop.indexM] && `${prop.themeSetup.categoryMotion.categoryActiveClass}`}`} style={{ 'backgroundColor': `${prop.themeSetup.categoryMotion.categorySpanColor}` }}></span>
        </div>

      </div>

      {/* <ul className="px-2 sm:px-6 lg:px-8"> */}
      <ul className="">
        <i className="x">!Theme</i>
        {newSubListMenu.map((el, index) => (

          <div className='accTab' key={index}>
            {prop.footbar && <button onClick={event => removeFavorite(index, event, el.food_name, el.price)} className={`${!el.favor && 'displayNone'} heartFavor2Box`}>
              {prop.favoritHeart && <div className={` heartFavor2Box-1`}>

                <img src={require(`../all-icon/footbar-icon/${heartIcon.favor2}`)} alt="" />
              </div>}
            </button>}


            <i className="x">ON/OFF SlIDE ACCORDIAN </i>

            <i className="x"> On Food Name 1 2</i>

            <Accordion expanded={(expanded === el.panelCode || prop.accordian === false) && true} onChange={handleChange(el.panelCode)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

                <i className="x"> Name 1 2</i>

                <div className={prop.sideBar ? 'paddingL_40' : ''}
                  style={{
                    'color': `${prop.themeSetup.body.bodyFonttColor}`,
                    'fontSize': `${prop.themeSetup.body.bodyFontSize * 1.05}rem`, 'fontWeight': '500'
                  }}>
                  <span>{prop.language === 1 ? el.food_name : el.food_name_2}</span>
                </div>
                <i className="x"> Price 1 2</i>

                <div className={`flex`}
                  style={{
                    'color': `${prop.themeSetup.body.bodyFonttColor}`,
                    'fontSize': `${prop.themeSetup.body.bodyFontSize * 1.05}rem`,
                    'fontWeight': '500',


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

              {prop.description && <AccordionDetails>

                <i className="x"> Descritption 1 2</i>

                <div
                  style={{
                    'paddingLeft': `${prop.sideBar ? '38px' : '8px'}`,
                    'fontFamily': `${prop.themeSetup.body.bodyFontFamily}`,
                    'color': `${prop.themeSetup.body.bodyFonttColor}`,
                    'fontSize': `${prop.themeSetup.body.bodyFontSize * 1}rem`,
                    'fontWeight': '400',
                    'border': 'none',
                    'minHeight': 'unset',
                    'paddingTop': '.8rem',
                    'whiteSpace': 'pre-wrap',
                  }}>

                  {(prop.language === 1) ? el.description : el.description_2}
                </div>

                <i className="x"> Remark 1 2</i>
                {el.remark &&
                  <div
                    style={{
                      'paddingLeft': `${prop.sideBar ? '38px' : '8px'}`,
                      'fontFamily': `${prop.themeSetup.body.bodyFontFamily} !important`,
                      'color': `${prop.themeSetup.body.bodyFonttColor}`,
                      'fontSize': `${prop.themeSetup.body.bodyFontSize * .9}rem`,
                      'fontStyle': 'italic',
                      'fontWeight': '400',
                      'border': 'none',
                      'minHeight': 'unset',
                      'paddingTop': '.8rem',
                      'whiteSpace': 'pre-wrap',

                    }}>
                    {prop.language === 1 ? el.remark : el.remark_2}
                  </div>
                }
                <div className={`heartFavor1Box`}
                  style={{
                    'height': `${(!prop.favoritHeart || !prop.footbar) ? '1.5rem' : ''}`,
                  }}>
                  {(prop.favoritHeart && prop.footbar) && <button onClick={event => addFavorite(index, event, el.panelCode)} className={`${el.favor && 'opacity-0 transition-all'} `}>
                    <img src={require(`../all-icon/footbar-icon/${heartIcon.favor1}`)} alt="" />
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
