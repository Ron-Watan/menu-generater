

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import catalog1 from '../img/promotion1.png'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import { Hidden } from '@mui/material';
// import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // backgroundColor:'#c5c1c18d',
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
  paddingLeft: '60px',
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
  paddingLeft: '70px',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



///////////////////////////////////////////////////////////////////////////






const AcordionSubComp = (prop) => {

  const subListMenu = prop.listMunu.listMenu

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const elementRef = useRef([]);


  console.log(subListMenu)



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
  // eslint-disable-next-line
  // }, [elementRef.current]);
  // useEffect(() => {
  // prop.favorite(favorList)
  // eslint-disable-next-line
  // }, []);

  //accordMoveUp
  const temmm = {
    en: {
      translation: {
        "text": "hello world",
        "menu1": "wwwwwwwww"
      }
    },
    th: {
      translation: {
        "text": "thai",
        "menu1": "ZXXXXXXX"

      }
    },
  }
  let ttw = {
    en: {
      translation: {
        food_name: [],
        description: [],
        remark: [],
        price: [],
        vetgeterian: [],
        vegan: [],
        gluten_free: [],
        halal: [],
        favor: [],
      }
    },
    th: {
      translation: {
        food_name: [],
        description: [],
        remark: [],

      }
    },
  }



  const [donedata, setDonedata] = useState(ttw)
  console.log(Boolean(donedata))

  const reDataLanguage = () => {

    newSubListMenu.map(el => {
      ttw.en.translation.food_name.push(el.food_name)
      ttw.en.translation.description.push(el.description)
      ttw.en.translation.remark.push(el.remark)
      ttw.en.translation.price.push(el.price)
      ttw.en.translation.vetgeterian.push(el.vetgeterian)
      ttw.en.translation.vegan.push(el.vegan)
      ttw.en.translation.gluten_free.push(el.gluten_free)
      ttw.en.translation.halal.push(el.halal)
      ttw.en.translation.favor.push(el.favor)
      // donedata.push(ttlanf)
      // setDonedata(donedata)
    })

    setDonedata(ttw)
    console.log('5')
  }
  console.log(donedata)



  // const [data, setData] = useState(donedata[0])


  const [language, setLanguage] = useState('en');

  const [lang, setlang] = useState(0);

  const { t } = useTranslation();
  const changeLocale = (lang) => {
    // i18n.changeLanguage(lang);
  }
  function getLanguages(language) {
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
          escapeValue: false // react already safes from xss
        },
        resources: donedata
        // {
        //   en: {
        //     translation: {
        //       "text": "hello world",
        //       "menu1": "wwwwwwwww"
        //     }
        //   },
        //   th: {
        //     translation: {
        //       "text": "thai",
        //       "menu1": "ZXXXXXXX"

        //     }
        //   },
        // }



      })

    i18n.changeLanguage(language)




  }


  useEffect(() => {
    reDataLanguage()
    setLanguage('en')
    getLanguages(language)



  }, [])








  //- //- //- //- //- //- //- //- //- //- //- //-

  return (
    <div id='2' className="mx-auto max-w-7xl">


      <div className="h-40" style={{
        backgroundImage: `url(${catalog1})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover'
      }}>
      </div>
      <ul className="px-2 sm:px-6 lg:px-8">

        {newSubListMenu.map((el, index) => (
          <div ref={(element) => { elementRef.current[index] = element; }} onClick={drag} className='' key={index}>

            <div className="absolute right-0 z-20 ">
              <button onClick={event => removeFavorite(index, event, el.food_name, el.price)} className={`${!el.favor && 'hiddenMe'} flex justify-center gap-x-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>

            <Accordion expanded={expanded === el.panelCode} onChange={handleChange(el.panelCode)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                {/* <Typography ><span className='test44'>{el.food_name}</span><span>{el.price}</span></Typography> */}
                <span className='test44'>{el.food_name}</span>

                <div className='flex'><span>{el.price}</span>


                  {/* <p>{t(`food_name.${index}`)}</p> */}
                </div>

              </AccordionSummary>


              <AccordionDetails>
                <Typography>
                  {el.description}
                </Typography>
                <div className="">{el.remark}</div>


                <div className={` grid grid-cols-3 gap-1 mb-2`}>
                  <div className="col-start-3 col-end-4 text-center">

                    <button onClick={event => addFavorite(index, event, el.panelCode)} className={`${el.favor && 'opacity-0 transition-all'} flex justify-center gap-x-6`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>

                    {/* <button onClick={event => removeFavorite(index, event, el.food_name, el.price)} className={` ${!el.vegan && 'hidden'} flex justify-center gap-x-6`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>


                    </button> */}
                    {/* <p className='px-1 py-1 text-xs flex flex-row justify-center'>book mark</p> */}
                  </div>

                </div>


              </AccordionDetails>

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