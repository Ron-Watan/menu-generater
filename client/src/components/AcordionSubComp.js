import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import catalog1 from '../img/promotion1.png'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';


const userManuLists = [
  {
    title: 'Padthai',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    `,
    choice: [
      { type: 'Chicken', price: 2 }, { type: 'Beef', price: 2 }, { type: 'Pork', price: 2 },
      { type: 'Corn', price: 2 }, { type: 'Bird', price: 1 }, { type: 'Rice', price: 2 },
      { type: 'suop', price: 0 },
    ],
    tabCode: 'panel1'

  },
  {
    title: 'Pad See Ew',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi`,
    choice: [
      { type: 'Chicken', price: 2 }, { type: 'Beef', price: 2 }, { type: 'Pork', price: 2 },
      { type: 'Corn', price: 2 }, { type: 'Bird', price: 1 }, { type: 'Rice', price: 2 },
      { type: 'suop', price: 0 },
    ]
    ,
    tabCode: 'panel2'
  },
  {
    title: 'Papaya Salad',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam
     accusantium corruptiquam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos`,
    choice: [
      { type: 'Chicken', price: 2 }, { type: 'Beef', price: 2 }, { type: 'Pork', price: 2 },
      { type: 'Corn', price: 2 }, { type: 'Bird', price: 1 }, { type: 'Rice', price: 2 },
      { type: 'suop', price: 0 },
    ],
    tabCode: 'panel3'
  }
];



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
      : '#ffffff',
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






const AcordionSubComp = () => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="mx-auto max-w-7xl" id='2'>
      <div className="h-40" style={{
        backgroundImage: `url(${catalog1})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover'
      }}>
      </div>
      <ul className="px-2 sm:px-6 lg:px-8">

        {userManuLists.map((el, index) => (
          <div className='' key={index}>
            <Accordion expanded={expanded === el.tabCode} onChange={handleChange(el.tabCode)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>{el.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {el.content}
                </Typography>


                <div className='grid grid-cols-3 gap-1 justify-start mt-2'>
                  {
                    el.choice.map((el, index) => (
                      <button className=" border border-blue text-black text-C_icon rounded-md px-1 py-1 text-sm flex flex-row justify-center gap-x-2" key={index}
                      > <p>{`${el.type}`}</p><p>{`+$${el.price}`}</p> </button>
                    ))

                  }
                </div>

                <div className="grid grid-cols-3 gap-1 mb-2">
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
