import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';


const drawerBleeding = 55;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function ListFavoriteSubComp( props,) {



  const { window } = props;
  const [open, setOpen] = React.useState(false);

  // console.log(window)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    // setOpen(!open);
  };
  const btnDrawer = () => {
    setOpen(!open)
  }
  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            // height: `calc(50% - ${drawerBleeding}px)`,
            height: `min-content`,
            overflow: 'visible',
            maxWidth: 512,

          },
        }}
      />
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}></Button>
      </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        onClick={toggleDrawer(btnDrawer)}>

        <div>
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              border: 1,
              borderColor: 'grey.300',
              visibility: 'visible',
              right: 0,
              left: 0


            }}
          >






            <div className="flex justify-center item-center">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>

            </div>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: '100%',
              overflow: 'none',
            }}
          >

            <div className="">
              <div className="">2eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">3eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">4eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">5eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">6eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">7eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">8eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">9eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">23eeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">e23eeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddd</div>
              <div className="">222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddd</div>
              <div className="">e221e1eeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddd</div>
              <div className="">ee112313eeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddd</div>
            </div>




            <Skeleton variant="rectangular" height="100%" />

          </StyledBox>
        </div>



      </SwipeableDrawer>

    </Root>
  );
}

ListFavoriteSubComp.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ListFavoriteSubComp;
