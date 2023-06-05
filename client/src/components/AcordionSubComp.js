import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import catalog1 from '../img/promotion1.png'
import { Hidden } from '@mui/material';
// import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';



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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
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
  console.log(subListMenu)


  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const elementRef = React.useRef([]);




  React.useEffect(() => {
    // console.dir(elementRef.current[0]);
    // eslint-disable-next-line
  }, [elementRef.current]);


  // console.log(elementRef.current.offsetHeight);
  const drag = () => {
    // console.log("fOCUS === " + elementRef.current[0].clientHeight);

  }
  console.log('Data from Accord :' + Boolean(subListMenu))


  const checkOption = (el) => {
    const checkType = Boolean((el.option_name_1 +
      el.option_name_2 +
      el.option_name_3 +
      el.option_name_4 +
      el.option_name_5 +
      el.option_name_6).trim())
    return checkType
  }


  //accordMoveUp


  return (
    <div id='2' className="mx-auto max-w-7xl">
      <div className="h-40" style={{
        backgroundImage: `url(${catalog1})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover'
      }}>
      </div>
      <ul className="px-2 sm:px-6 lg:px-8">

        {subListMenu.map((el, index) => (
          <div ref={(element) => { elementRef.current[index] = element; }} onClick={drag} className='' key={index}>

            <Accordion expanded={expanded === el.remark} onChange={handleChange(el.remark)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"  >
                <Typography>{el.food_name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {el.description}
                </Typography>


                <div className='grid grid-cols-3 gap-1 justify-start mt-2'>

                  <button className={`${!el.option_name_1 && 'hidden'} border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_1}`}</p><p>{`+$${el.option_price_1}`}</p> </button>

                  <button className={`${!el.option_name_2 && 'hidden'} border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_2}`}</p><p>{`+$${el.option_price_2}`}</p> </button>

                  <button className={`${!el.option_name_3 && 'hidden'} border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_3}`}</p><p>{`+$${el.option_price_3}`}</p> </button>

                  <button className={`${!el.option_name_4 && 'hidden'} border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_4}`}</p><p>{`+$${el.option_price_4}`}</p> </button>

                  <button className={`${!el.option_name_5 && 'hidden'} border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_5}`}</p><p>{`+$${el.option_price_5}`}</p> </button>

                  <button className={`${!el.option_name_6 && 'hidden'} border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2`}>
                    <p>{`${el.option_name_6}`}</p><p>{`+$${el.option_price_6}`}</p> </button>
                  {/* {
                    el.choice.map((el, index) => (
                      <button className=" border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2" key={`sws` + index}
                      > <p>{`${''}`}</p><p>{`+$${el.price}`}</p> </button>
                    ))
                  } */}

                </div>

                <div className={`${!checkOption(el) && 'hidden'} grid grid-cols-3 gap-1 mb-2`}>
                  <div className="col-start-3 col-end-4 text-center">

                    <div className=" flex justify-center gap-x-6">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    <p className='px-1 py-1 text-xs flex flex-row justify-center'>book mark</p>
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
