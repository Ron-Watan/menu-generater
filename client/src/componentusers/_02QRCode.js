//-

import axios from "axios"
import { authenticate, getToken, ticketPass } from "../protectors/authorize"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertSlice';
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { QRCodeCanvas } from 'qrcode.react';
import '../style/generate.css'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import QRCodeStyling from "qr-code-styling";
import { HexColorPicker, HexColorInput } from "react-colorful";
import Resizer from 'react-image-file-resizer';
import MBiconBin from '../all-icon/button-icon/MBbin.svg'

import QRm1 from '../all-icon/qricon/reg.svg'
import QRm2 from '../all-icon/qricon/regb.svg'
import QRm3 from '../all-icon/qricon/regxb.svg'
import QRm4 from '../all-icon/qricon/rcb.svg'
import QRm5 from '../all-icon/qricon/rcxb.svg'
import QRm6 from '../all-icon/qricon/cir.svg'
import QRb1 from '../all-icon/qricon/bordreg.svg'
import QRb2 from '../all-icon/qricon/bordregb.svg'
import QRb3 from '../all-icon/qricon/bordcir.svg'
import QRd1 from '../all-icon/qricon/dotreg.svg'
import QRd2 from '../all-icon/qricon/dotcir.svg'
import QRd3 from '../all-icon/qricon/dotdot.svg'


const _02QRCode = (prop) => {
  const { user } = useSelector(state => state.user)
  const dispath = useDispatch();
  // const [sizeQr, setSizeQr] = useState('8')
  // const [sizeQrPx, setSizeQrPx] = useState('300')
  const [checkQRcodeChange, setCheckQRcodeChange] = useState(false)
  const [logoQr, setLogoQr] = useState('')


  const [qrCodeSetUp, setQrCodeSetUp] = useState({
    levelCode: 'Q', dotOption: '', cornersOption: '', dotCornersOption: '', colorQrCode: '#000', bgQrCode: '#fff',
    sizeQr: 8, sizeQrPx: 300
  })
  const { levelCode, dotOption, cornersOption, dotCornersOption, colorQrCode, bgQrCode, sizeQr, sizeQrPx } = qrCodeSetUp
  const qrCodeSetUpFn = (name, value) => {
    setCheckQRcodeChange(true)
    setQrCodeSetUp({ ...qrCodeSetUp, [name]: value })
  }
  const qrCodeColorFn = (name, color) => {
    setCheckQRcodeChange(true)

    setQrCodeSetUp({ ...qrCodeSetUp, [name]: color })
  }
  const inputSizeQr = (even) => {
    setCheckQRcodeChange(true)

    setQrCodeSetUp({ ...qrCodeSetUp, ['sizeQr']: even.target.value })
  }
  // const inputSizeMemo = (value) => {
  //   setQrCodeSetUp({ ...qrCodeSetUp, ['sizeQr']: value })
  // }
  const sizeQrPxFn = (value) => {
    console.log(value)
    setQrCodeSetUp({ ...qrCodeSetUp, ['sizeQrPx']: value })
  }

  const qrLink = ` http://192.168.1.13:3000/customer/${user.link}`
  // const qrLink = `http://52.53.181.80/customer/${user.link}`
  const qrCode = new QRCodeStyling({
    // width: 300,
    // height: 300,
    width: sizeQrPx,
    height: sizeQrPx,
    data: qrLink,
    margin: 0,
    // image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    image: `${logoQr}`,
    qrOptions: {
      errorCorrectionLevel: `${levelCode}`
    },
    dotsOptions: {
      color: `${colorQrCode}`,
      type: `${dotOption}`
    },
    backgroundOptions: {
      color: `${bgQrCode}`,
    },
    imageOptions: {
      // crossOrigin: "anonymous",
      margin: 0,
      imageSize: .4,
    },
    cornersSquareOptions: {
      type: `${cornersOption}`

    },
    cornersDotOptions: {
      type: `${dotCornersOption}`

    }
  });


  const getQrCode = () => {
    dispath(showLoading())

    axios
      .post(`${process.env.REACT_APP_API}/user/getQrCode`, { userId: user.userId }, ticketPass)
      .then((result) => {
        if (result.data.success) {
          const getReult = result.data.qrCodeSetUp;


          // const getQrCode = getReult.qrCodeSetUp
          setQrCodeSetUp(getReult.qrCodeSetUp)
          dispath(hideLoading())
        } else {
          dispath(hideLoading())
          // Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      })
      .catch((err) => {
        // dispath(hideLoading());
        console.log("QR err", err);

        // Swal.fire("Can't not connect the server")
      });
  };
  const imgId = user.userId + 'qrlogo'
  const getImage = (imgId) => {

    dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/images/preview`, { imgId: imgId })
      .then((result) => {
        if (!result.data.images) {

          return setLogoQr('')
          return dispath(hideLoading());
        }

        const getResult = result.data.images;
        const base64Flag = 'data:image/png;base64,';
        const imageStr = prop.arrayBufferToBase64(getResult.img.data.data);
        const tagImage = base64Flag + imageStr;

        setLogoQr(tagImage);
        // dispath(hideLoading())
      })
      .catch((err) => {
        console.error(err);
      });
  };



  const saveQRCode = () => {

    dispath(showLoading())
    delelteImage(imgId)
    axios
      .post(
        `${process.env.REACT_APP_API}/user/saveQRCode`,
        {
          userId: user.userId,
          qrCodeSetUp: qrCodeSetUp
        },
        ticketPass
      )
      .then((result) => {
        if (result.data.success) {
          logoQr && uploadImage()
          Swal.fire({
            title: 'Saved',
            toast: true,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          }).then(nothinh => {
            setCheckQRcodeChange(false)
            dispath(hideLoading())
          })

        } else {
          Swal.fire(result.data.message);
          dispath(hideLoading())

        }
      })
      .catch((err) => {
        dispath(hideLoading());
        console.log("QR Fail");
        Swal.fire("Can't not connect the server");
      });
  };


  // const [url, setUrl] = useState("http://192.168.1.13:3000/customer/8e468036-undefined");
  // const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  // useEffect(() => {

  //   qrCode.append(ref.current);

  // }, []);


  useEffect(() => {
    qrCode.append(ref.current);
    qrCode.update(ref.current);
  }, [dotOption, cornersOption, dotCornersOption, levelCode, colorQrCode, bgQrCode, logoQr]);



  // const onUrlChange = (event) => {
  //   event.preventDefault();
  //   setUrl(event.target.value);
  // };

  // const onExtensionChange = (event) => {
  //   setFileExt(event.target.value);
  // };
  const [qrLoading, setQrLoading] = useState(false)
  const resizeFile = (file) =>
    new Promise((resolve) => {
      dispath(showLoading())
      Resizer.imageFileResizer(
        file,
        200,
        200,
        'JPG',
        100,
        0,
        (uri) => {

          setLogoQr(uri);
          dispath(hideLoading())

          setCheckQRcodeChange(true)

          setTimeout(() => {
            qrCodeSetUpFn('levelCode', 'L')
          }, 100);
          setTimeout(() => {
            qrCodeSetUpFn('levelCode', 'Q')
          }, 200);
        },
        'base64'
      );
    });


  const uploadImage = () => {

    // dispath(showLoading())

    const newFile = prop.dataURIToBlob(logoQr);
    const formData = new FormData();

    formData.append('avatar', newFile, imgId);
    formData.append('userId', user.userId);
    axios
      .post(`${process.env.REACT_APP_API}/user/images/uplaod`, formData)
      // .post(`${process.env.REACT_APP_API}/user/images`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((result) => {
        // dispath(hideLoading())

      })
      .catch((err) => {

        console.error(err);
      });
  };

  const delelteImage = (imgId) => {

    // dispath(showLoading())
    axios
      .post(`${process.env.REACT_APP_API}/user/images/delete`, { imgId: imgId })
      .then((result) => {
        // dispath(hideLoading())

      })
      .catch((err) => {
        console.error(err);
      });

  };

  const [clickDownLoad, setClickDownLoad] = useState(false)

  const onDownloadClick = () => {
    if (sizeQr >= 1) {
      sizeQrPxFn(sizeQr * (96 / 2.54))
      console.log('rrrr')
      setClickDownLoad(true)
    }
  };


  useEffect(() => {
    if (clickDownLoad) {
      qrCode.download({
        name: "QR-Code",
        extension: 'png'
      });
      setClickDownLoad(false)
      sizeQrPxFn(300)

      // inputSizeMemo(sizeQr)
    }
  }, [sizeQrPx]);

  const checkInputNumber = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    if (e.target.value > 100) {
      e.target.value = 100;
    }

  }

  const [onOffTrayQR, setOnOffTrayQR] = useState(false)
  const [onOffTrayBG, setOnOffTrayBG] = useState(false)
  const [presetColor, setPresetColor] = useState('')

  const setColor = (name) => {
    qrCodeColorFn(name, presetColor)
  }



  const checkQRcodeChangeFn = () => {

    if (checkQRcodeChange) {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#f56e4f',

      }).then((result) => {
        if (result.isConfirmed) {
          saveQRCode();
          setTimeout(() => {
            prop.setOnOffQRCCode_MB(false)
          }, 1500);

        } else if (result.isDenied) {

          prop.setOnOffQRCCode_MB(false)
          setCheckQRcodeChange(false)
          getImage(imgId)
          getQrCode();

        }
      })

    } else {

      prop.setOnOffQRCCode_MB(false)
      setCheckQRcodeChange(false)

    }
  }

  useEffect(() => {
    if (user.userId) getImage(imgId)
  }, [user]);

  useEffect(() => {
    if (user.userId) getQrCode();
  }, [user]);

  return (
    <div className="MB_FullPage_Container">
      <div className={`${qrLoading ? 'showMe' : 'hiddenMe'} allLoading`}>
        <div className="iconLoadingBanner">
          <span className='barOne'></span > <span className='barTwo'></span> <span className='barThree'></span>
        </div>
      </div>
      <div className="topBar_function backdrop_blur">
        <div className="GruopBtn">
          <button
            onClick={() => checkQRcodeChangeFn()}
            className='MB_Btn MB_Btn_Border'>

            <img src={MBiconClose} alt="" />
          </button>
          <span className='MB_textBtn'>Close</span>
        </div>

        <div className="MB_title">QR Code</div>

        <div className="GruopBtn">
          <button className="MB_BtnEmpty ">
          </button>
        </div>

      </div>
      <div className="MB_qrContainer1 ">
        <div className="MB_qrCodeBox ">
          <div className="MB_qrCodeitem" ref={ref} />
        </div>
        <div className="smallInch selectable">{qrLink}</div>
        {(!onOffTrayQR && !onOffTrayBG) && <div className="QR_inputBox_Full">
          <div className="QR_inputBox ">
            <div className="QR_flex">
              <div className="MB_TC_small">Size</div>
              <div className="">
                <div className="">
                  <input type="text" min='3' max='100' maxLength='5'
                    onInput={checkInputNumber}
                    onChange={inputSizeQr} value={sizeQr} className='QR_labelFontR text_selectCenter' /> <span className="MB_TC_small" > cm. x {sizeQr} cm.</span>
                </div>
                {/* <div className="smallInch"><span>{String(sizeQr/2.54).slice(0,4)} in.</span> x <span>{String(sizeQr/2.54).slice(0,4)} in.</span></div> */}
              </div>
            </div>
            <div className="QR_flex2">
              <button onClick={onDownloadClick} className="downloadQR">Download</button>
              <a href={qrLink} target="blank" className="downloadQR QR_link">Link</a>
            </div>
          </div>
        </div>}

      </div>
      {onOffTrayQR && <div className="QR_tray_position">
        <div className="presetColor" style={{ 'backgroundColor': `${presetColor}` }}>   </div>
        <HexColorPicker color={presetColor} onChange={setPresetColor} />
        <div className="colorBoxInput"><span># &nbsp;<HexColorInput className="MB_tray_input MB_tray_input_QR" color={presetColor} onChange={setPresetColor} /></span>

          <span onClick={() => {
            setColor('colorQrCode')
            setOnOffTrayQR(false)

          }} className="QR_btnOk Flex_AllCenter"><span>OK</span></span></div>

      </div>}


      {onOffTrayBG && <div className="QR_tray_position">
        <div className="presetColor" style={{ 'backgroundColor': `${presetColor}` }}>   </div>
        <HexColorPicker color={presetColor} onChange={setPresetColor} />
        <div className="colorBoxInput"><span># &nbsp;<HexColorInput className="MB_tray_input MB_tray_input_QR" color={presetColor} onChange={setPresetColor} /></span>

          <span onClick={() => {
            setColor('bgQrCode')
            setOnOffTrayBG(false)

          }} className="QR_btnOk Flex_AllCenter"><span>OK</span></span></div>

      </div>}

      {(!onOffTrayQR && !onOffTrayBG) && <div className="MB_SetGrid_ForBtn zindexUnderTop">

        <div className="MB_Standard_Section_canScroll  MB_Make_QR MB_Wrap_ForBtn" >

          <div className="MB_qrContainer1 QR_EditSec">
            {/* <div className="MB_qrCodeBox ">
              <div className="MB_qrCodeitem" ref={ref} />
            </div> */}
            <div className="MB_qrContainer2 paddingBottom_20">
              <div className="MB_qrContainer2">
                <label htmlFor="" className='MB_TC_small'>QR Code Level</label>

                <div className='MB_themeRow2'>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'L')}
                    className={`MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count ${levelCode === 'L' && 'QRfocus'}`}>
                    <span>Low</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'M')}
                    className={`MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count ${levelCode === 'M' && 'QRfocus'}`}>
                    <span>Medium</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'Q')}
                    className={`MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count ${levelCode === 'Q' && 'QRfocus'}`}>
                    <span>Quality</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'H')}
                    className={`MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count ${levelCode === 'H' && 'QRfocus'}`}>
                    <span>High-Quality</span>
                  </button>

                </div>

                <div className="QR_Borderset"></div>
                <label htmlFor="" className='MB_TC_small'>Main Style</label>

                <div className='MB_themeRow2'>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'square')}
                    className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotOption === 'square' && 'QRfocus'}`}>
                    <img src={QRm1} alt="" className="qriconSize" />
                  </button>
                  <button onClick={() => qrCodeSetUpFn('dotOption', 'rounded')}
                    className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotOption === 'rounded' && 'QRfocus'}`}>
                    <img src={QRm2} alt="" className="qriconSize" />
                  </button>
                  <button onClick={() => qrCodeSetUpFn('dotOption', 'extra-rounded')}
                    className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotOption === 'extra-rounded' && 'QRfocus'}`}>
                    <img src={QRm3} alt="" className="qriconSize" />
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'classy')}
                    className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotOption === 'classy' && 'QRfocus'}`}>
                    <img src={QRm4} alt="" className="qriconSize" />
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'classy-rounded')}
                    className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotOption === 'classy-rounded' && 'QRfocus'}`}>
                    <img src={QRm5} alt="" className="qriconSize" />
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'dots')}
                    className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotOption === 'dots' && 'QRfocus'}`}>
                    <img src={QRm6} alt="" className="qriconSize" />
                  </button>

                </div>
                <div className="QR_Borderset"></div>

                <div className='MB_themeRow2 gap1Rem'>
                  {/* // const connerOption='dot' 'square' 'extra-rounded' */}
                  <div className="MB_qrContainer3 ">
                    <label htmlFor="" className='MB_TC_small'>Conner Style</label>

                    <div className='MB_themeRow2 '>

                      <button onClick={() => qrCodeSetUpFn('cornersOption', 'square')}
                        className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${cornersOption === 'square' && 'QRfocus'}`}>
                        <img src={QRb1} alt="" className="qriconSize" />
                      </button>
                      <button onClick={() => qrCodeSetUpFn('cornersOption', 'extra-rounded')}
                        className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${cornersOption === 'extra-rounded' && 'QRfocus'}`}>
                        <img src={QRb2} alt="" className="qriconSize" />
                      </button>
                      <button onClick={() => qrCodeSetUpFn('cornersOption', 'dot')}
                        className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${cornersOption === 'dot' && 'QRfocus'}`}>
                        <img src={QRb3} alt="" className="qriconSize" />
                      </button>
                    </div>
                    <div className="QR_Borderset"></div>
                  </div>



                  <div className="MB_qrContainer3">
                    <label htmlFor="" className='MB_TC_small'>Inside-Conner Style</label>
                    <div className='MB_themeRow2'>
                      <button onClick={() => qrCodeSetUpFn('dotCornersOption', 'square')}
                        className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotCornersOption === 'square' && 'QRfocus'}`}>
                        <img src={QRd1} alt="" className="qriconSize" />
                      </button>
                      <button onClick={() => qrCodeSetUpFn('dotCornersOption', 'dot')}
                        className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotCornersOption === 'dot' && 'QRfocus'}`}>
                        <img src={QRd2} alt="" className="qriconSize" />
                      </button>
                      <button onClick={() => qrCodeSetUpFn('dotCornersOption', '')}
                        className={`MB_Sq_Btn QrBtnSize MB_Btn_Count ${dotCornersOption === '' && 'QRfocus'}`}>
                        <img src={QRd3} alt="" className="qriconSize" />
                      </button>
                    </div>
                    <div className="QR_Borderset"></div>
                  </div>

                </div>

                <div className="MB_themeRow2 gap1Rem">
                  <div className="MB_qrContainer3">
                    <label htmlFor="" className='MB_TC_small'>Code Color</label>

                    <div className='MB_themeRow2'>
                      <button onClick={(e) => {
                        setOnOffTrayQR(true)
                        setPresetColor(colorQrCode)
                      }} className="colorPickerItem borderPickC color_PickQr color_PBig-Active" style={{ 'backgroundColor': `${colorQrCode}` }} id='navBarFontColor'></button>
                    </div>
                    <div className="QR_Borderset"></div>

                  </div>

                  <div className="MB_qrContainer3">
                    <label htmlFor="" className='MB_TC_small'>Background Color</label>
                    <div className='MB_themeRow2'>
                      <button onClick={(e) => {
                        setOnOffTrayBG(true)
                        setPresetColor(bgQrCode)
                      }} className="colorPickerItem borderPickC color_PickQr color_PBig-Active" style={{ 'backgroundColor': `${bgQrCode}` }} id='navBarFontColor'></button>
                    </div>
                    <div className="QR_Borderset"></div>

                  </div>




                </div>

                <div className="MB_themeRow2 ">
                  <div className="MB_qrContainer3">

                    <label htmlFor="" className='MB_TC_small'>Logo</label>
                    <div className="MB_themeRow2 gap2rem">
                      <label htmlFor='qr-upload' className='MB_labelPhoto flexStart'>
                        <div className='colorPickerItem borderPickC color_PickQr color_PBig-Active setRelative blueUpload'>
                          <input
                            onChange={(e) => {
                              if (e.target.files.length === 0) return;
                              resizeFile(e.target.files[0]).then((res) => { });
                            }}
                            id='qr-upload'
                            name='file-upload'
                            type='file'
                            className='inputPhoto'

                            onClick={(e) => {
                              e.target.value = ''
                            }}
                          />
                          <span className='QR_uplaodLogo' >Upload</span>
                        </div>

                      </label>
                      {/* <div className="logoSizeBox">
                        <span onClick={() => logoSizeFn(-1)} className="">-</span>
                        <span className=""> Logo Size</span>
                        <span onClick={() => logoSizeFn(+1)} className="">+</span>
                      </div> */}
                      <button onClick={() => {
                        setCheckQRcodeChange(true)
                        setLogoQr('')
                      }} className={`MB_Btn forBinWhite QRBin`}>
                        <img src={MBiconBin} alt="" />
                      </button>
                    </div>

                    <div className="smallLogoQR selectable">*Adjust QR code level for logo size </div>


                  </div>

                </div>
                <div className="QR_Borderset"></div>

              </div>


              <div className="MB_Positon_Bottom_btn color_white">
                <div className="MB_Frid_3Btn">

                  {/* SAVE BUTTON */}

                  <button
                    onClick={() => {
                      saveQRCode()
                      // setTimeValue(code);
                      // setTimePicker([...timePickerData]);
                    }}
                    className='MB_Sq_Btn SaveBtnSize MB_Btn_Color  MB_G2'>

                    <span>Save</span>
                  </button>

                  {/* CANCEL BUTTON */}
                  {/* <button onClick={() => {
                        getTimeFromProp()
                      setCheckTimeChange(false)
                    }}
                                    className='MB_Sq_Btn CancelPadding MB_Btn_Border MB_G3'>


                              <span>Cancel</span>
                                      </button> */}

                </div>
              </div>
              {/* 
              <div className='extraSpace'
              // style={{ 'height': `${themeSetup.navAndFootBar.navBarColor}` }}

              ></div> */}

            </div>

          </div>

        </div>

      </div >}
    </div >

  )
}
export default _02QRCode




