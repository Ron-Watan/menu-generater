

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
import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
import {
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';

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
  paddingRight: '0px',
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

  const subListMenu = prop.listMunu.listMenu

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);

  };


  subListMenu.map((element, index) => {
    element.panelCode = 'panel' + index
  })

  const [newSubListMenu, setNewSubListMenu] = useState(subListMenu)


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
  const [filea, setFile] = useState('');
  const file='https://world-client-image.s3.us-west-1.amazonaws.com/img/43dae682-3eb9-4212-aca0-099db567fbe5?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMSJGMEQCICk3eWChI198DdBlkigJMG3nTtTfaNv3IkGtG0natLAgAiBsUHOxb7jP4437aMbwAM2c4e6Bvt5NA5WAoy0K509vAirtAgjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDgxNDE1NDMwMzkwNCIMiBDaxYcHP6qXOrEWKsECJGdVO7xJnPhK3Q3ApQPcWg57qGdMHdgXhmszDTBePr4UJLeUJymoEVV9I7m0acVpXJn4ryrbmhZ6O2zfC11oEOyBhFDWXMW8Ux7%2BgrI7qb0Nl%2BqFVJmw%2B3YUmYKKJnEJRNN3pVl%2F59%2F5lOPfdYfLTnViFuBEJFTTjA8a7x0ucdmCsL9VJEp9i5SS91g%2FQaADQdkgIwVCPPurCdDjq9UrJ2pXxgd9JPeppdERYPUF0O7u0U3%2Bq65EI0j%2FOpyZIK9j%2Bh9i11Z76hiB7t%2B5ipwtgUn%2Bke4LOHTIzWeHncN6r%2BGlT7PNPg30qSKElnOXgCo5QLKwuRKpo2yvn8%2BeljrIj0IDVnUxHviKB%2FihL8xXbKa%2B%2F3ViR4EQcpoenyqqvACo9MDHCCQBZVdXXn0NC5FqWUbFhs8IqVUdejnmly319PKwMP2KoKYGOrQCIav4K7KzavKxykXDWCuNpkdOYJ7RnVK6B%2Fhi9Afxk1JznxdkTo2908iXEFG6INFCTKSUKR1MHFdi4IR6ejHPjy7CYoZ6GqiGXLqBp7a3F0vJu7U5wYhwFU6dzRTFgyY5A0sgjFAqgh%2BrnEUHgnFx9dMV7MxRLJ6amf7rhhoGqTF%2FMTHPl%2ByiySkRymsjF%2BRiQQaMFvcka2%2BB0QWaRLD1d1fK1hfA2pKvdtg0SFFexjCSoxIRTSBU82%2FFMedHOwi3sQIoju0puEeDQ5C5nPzXBpSWMz%2B75g%2FIWBkdcUoblLZKk%2BhiICSbhPJUB1r%2BcmMRDh4sNNIJGYQiglWomUHndPPS1Ghv4KkJ5QFWfci65F6dqLe2Dd08tEFRIbRjhcRe6Ae8TZFFPx1rAMHCS%2B6tPdnGqcs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230801T023111Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA33D3AZGQGR5LOIEB%2F20230801%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=05cae05cf3c61b794ff656fffa5b3cdff7f1bdcd07eff655d97b73ec62b0cf3e'
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


  const heartIcon = {
    favor1: 'favor1.svg', favor2: 'favor2.svg',
  }

  //- //- //- //- //- //- //- //- //- //- //- //-

  return (
    <div id={prop.indexM} className={`acArray mx-auto max-w-7xl `}
      style={{ 'backgroundColor': `${prop.themeSetup.body.bodyBgColor}` }}>

      <div className="categoryImg" style={{
        backgroundImage: `url(${file})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: `${prop.themeSetup.categoryMotion.categoryPhotoSize}`
      }}>


        <div className={prop.themeSetup.categoryMotion.categoryBoxClass} style={{ 'backgroundColor': `${prop.themeSetup.categoryMotion.categoryBoxColor}` }}>
          <span className={`category-Custom-Title`} style={{
            'color': `${prop.themeSetup.categoryMotion.categoryFontColor}`,
            'fontSize': `${prop.themeSetup.body.bodyFontSize * 1.5}rem`, 'fontWeight': '500'


          }}> {prop.listMunu.catagory}</span>
          <span className={`${prop.themeSetup.categoryMotion.categorySpanClass} ${prop.triggerIcon[prop.indexM] && `${prop.themeSetup.categoryMotion.categoryActiveClass}`}`} style={{ 'backgroundColor': `${prop.themeSetup.categoryMotion.categorySpanColor}` }}></span>
        </div>

      </div>

      {/* <ul className="px-2 sm:px-6 lg:px-8"> */}
      <ul className="">
        <i className="x">!Theme</i>
        {newSubListMenu.map((el, index) => (

          <div className='accTab' key={index}>
            {prop.footbar && <button onClick={event => removeFavorite(index, event, el.food_name, el.price)} className={`${!el.favor && 'displayNone'} heartFavor2Box`}>
              {prop.favoritHeart && <div className={` heartFavor2Box-1 flex justify-center gap-x-6`}>

                <img src={require(`../all-icon/footbar-icon/${heartIcon.favor2}`)} alt="" />
              </div>}
            </button>}


            <i className="x">//=ON/OFF SlIDE ACCORDIAN </i>

            <i className="x">//- On Food Name 1 2</i>

            <Accordion expanded={(expanded === el.panelCode || prop.accordian === false) && true} onChange={handleChange(el.panelCode)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

                <i className="x">//- Name 1 2</i>

                <div className={prop.sideBar ? 'paddingL_40' : ''}
                  style={{
                    'color': `${prop.themeSetup.body.bodyFonttColor}`,
                    'fontSize': `${prop.themeSetup.body.bodyFontSize * 1.05}rem`, 'fontWeight': '500'
                  }}>
                  <span>{prop.language === 1 ? el.food_name : el.food_name_2}</span>
                </div>
                <i className="x">//- Price 1 2</i>

                <div className={`flex`}
                  style={{
                    'color': `${prop.themeSetup.body.bodyFonttColor}`,
                    'fontSize': `${prop.themeSetup.body.bodyFontSize * 1.05}rem`, 'fontWeight': '500'
                  }}>
                  {prop.language === 1 && <span>{prop.languageSetup.style_1 ?
                    <div ><span>{prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span><span>{el.price}</span> <span>&nbsp;{!prop.languageSetup.followed_1 && prop.languageSetup.symbol_1}</span> </div>
                    : <div ><span></span><span>{el.price}</span><span></span></div>}</span>}
                  {prop.language === 2 && <span>{prop.languageSetup.style_2 ?
                    <div ><span>{prop.languageSetup.followed_2 && prop.languageSetup.symbol_2}</span><span>{el.price_2}</span> <span>&nbsp;{!prop.languageSetup.followed_2 && prop.languageSetup.symbol_2}</span> </div>
                    : <div ><span></span><span>{el.price_2}</span><span></span></div>}</span>}
                </div>

              </AccordionSummary>

              <i className="x">//= IF ON DESCRIPTION </i>

              {prop.description && <AccordionDetails>

                <i className="x">//- Descritption 1 2</i>
                <EditorProvider>
                  <Editor readOnly disabled={true} value={prop.language === 1 ? el.description : el.description_2}
                    containerProps={{
                      style: {
                        paddingLeft: `${prop.sideBar ? '30px' : ''}`,
                        fontFamily: `${prop.themeSetup.body.bodyFontFamily}`,
                        color: `${prop.themeSetup.body.bodyFonttColor}`,
                        fontSize: `${prop.themeSetup.body.bodyFontSize * 1}rem`,
                        fontWeight: '400',

                        border: 'none',
                        minHeight: 'unset',
                        paddingTop: '0',
                      }
                    }}
                  >
                  </Editor>
                </EditorProvider>

                <i className="x">//- Remark 1 2</i>
                <EditorProvider>
                  <Editor readOnly disabled={true} value={prop.language === 1 ? el.remark : el.remark_2}
                    containerProps={{
                      style: {
                        paddingLeft: `${prop.sideBar ? '30px' : ''}`,
                        fontFamily: `${prop.themeSetup.body.bodyFontFamily} !important`,
                        color: `${prop.themeSetup.body.bodyFonttColor}`,
                        fontSize: `${prop.themeSetup.body.bodyFontSize * .9}rem`,

                        fontStyle: 'italic',
                        fontWeight: '400',
                        border: 'none',
                        minHeight: 'unset',
                        paddingTop: '0',
                      }
                    }}
                  >
                  </Editor>
                </EditorProvider>

                <div className={`heartFavor1Box`}>

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