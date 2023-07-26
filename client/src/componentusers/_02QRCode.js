//-

import axios from "axios"
import { authenticate, getToken, ticketPass } from "../protectors/authorize"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from "../redux/alertSlice"
import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { QRCodeCanvas } from 'qrcode.react';
import '../style/generate.css'
import MBiconClose from '../all-icon/button-icon/MBclose.svg'
import QRCodeStyling from "qr-code-styling";
import { HexColorPicker, HexColorInput } from "react-colorful";
import Resizer from 'react-image-file-resizer';
import MBiconBin from '../all-icon/button-icon/MBbin.svg'

const _02QRCode = (prop) => {
  const { user } = useSelector(state => state.user)

  const [sizeQr, setSizeQr] = useState('8')
  const [sizeQrPx, setSizeQrPx] = useState('300')
  const [logoSize, setLogoSize] = useState(.4)
  const [logoQr, setLogoQr] = useState('')


  const [qrCodeSetUp, setQrCodeSetUp] = useState({
    levelCode: 'L', dotOption: '', cornersOption: '', dotCornersOption: '', colorQrCode: '#000', bgQrCode: '#fff'

  })
  const { levelCode, dotOption, cornersOption, dotCornersOption, colorQrCode, bgQrCode } = qrCodeSetUp
  const qrCodeSetUpFn = (name, value) => {
    setQrCodeSetUp({ ...qrCodeSetUp, [name]: value })
  }
  const qrCodeColorFn = (name, color) => {
    setQrCodeSetUp({ ...qrCodeSetUp, [name]: color })
  }
  const inputSizeQr = (even) => {
    setSizeQr(even.target.value)

  }
  const qrLink = "http://192.168.1.13:3000/customer/8e468036-undefined"

  const qrCode = new QRCodeStyling({
    width: `${sizeQrPx}`,
    height: `${sizeQrPx}`,
    data: qrLink,
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
      crossOrigin: "anonymous",
      margin: `${sizeQrPx / 60}`,
      imageSize: .4,
    },
    cornersSquareOptions: {
      type: `${cornersOption}`

    },
    cornersDotOptions: {
      type: `${dotCornersOption}`

    }
  });

  // const [url, setUrl] = useState("http://192.168.1.13:3000/customer/8e468036-undefined");
  // const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    setQrLoading(true)
    qrCode.append(ref.current);
    setQrLoading(false)
  }, [dotOption, cornersOption, dotCornersOption, levelCode, colorQrCode, bgQrCode, logoQr, logoSize]);



  useEffect(() => {
    qrCode.update(ref.current);
  }, [dotOption, cornersOption, dotCornersOption, levelCode, colorQrCode, bgQrCode, logoQr, logoSize]);

  // useEffect(() => {
  //   qrCode.update({
  //     data: url
  //   });
  // }, [url]);

  // const onUrlChange = (event) => {
  //   event.preventDefault();
  //   setUrl(event.target.value);
  // };

  // const onExtensionChange = (event) => {
  //   setFileExt(event.target.value);
  // };

  const resizeFile = (file) =>
    new Promise((resolve) => {


      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPG',
        100,
        0,
        (uri) => {
          setLogoQr(uri);
          qrCode.update(ref.current)

        },
        'base64'
      );
    });


  const [clickDownLoad, setClickDownLoad] = useState(false)
  const onDownloadClick = () => {
    if (sizeQr >= 8) {
      setSizeQrPx(sizeQr * (96 / 2.56))
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
      setSizeQrPx(300)
      setSizeQr(sizeQr)
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
  const [qrLoading, setQrLoading] = useState(false)
  // qrCode.append(document.getElementById("canvas"));
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
            onClick={() => prop.setOnOffQRCCode_MB(false)}
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
        <div className="QR_inputBox_Full">
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
        </div>

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
      <div className="MB_SetGrid_ForBtn zindexUnderTop">

        <div className="MB_Standard_Section_canScroll  MB_Make_QR MB_Wrap_ForBtn" >

          <div className="MB_qrContainer1 QR_EditSec">
            {/* <div className="MB_qrCodeBox ">
              <div className="MB_qrCodeitem" ref={ref} />
            </div> */}
            <div className="MB_qrContainer2 ">
              {(!onOffTrayQR && !onOffTrayBG) && <div className="MB_qrContainer2">
                <label htmlFor="" className='MB_TC_small'>QR Code Level</label>

                <div className='MB_themeRow2'>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'L')}
                    className='MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count '>
                    <span>Low</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'M')}
                    className='MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count '>
                    <span>Medium</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'Q')}
                    className='MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count '>
                    <span>Quality</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('levelCode', 'H')}
                    className='MB_Sq_Btn QrBtnSizeLevel MB_Btn_Count '>
                    <span>High-Quality</span>
                  </button>

                </div>

                <div className="QR_Borderset"></div>
                <label htmlFor="" className='MB_TC_small'>Main Style</label>

                <div className='MB_themeRow2'>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'square')}
                    className='MB_Sq_Btn QrBtnSize MB_Btn_Count'>
                    <span>5</span>
                  </button>
                  <button onClick={() => qrCodeSetUpFn('dotOption', 'classy')}
                    className='MB_Sq_Btn QrBtnSize MB_Btn_Count'>
                    <span>3</span>
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'classy-rounded')}
                    className='MB_Sq_Btn QrBtnSize MB_Btn_Count'>
                    <span>4</span>
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'extra-rounded')}
                    className='MB_Sq_Btn QrBtnSize MB_Btn_Count'>
                    <span>6</span>
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'rounded')}
                    className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                    <span>1</span>
                  </button>

                  <button onClick={() => qrCodeSetUpFn('dotOption', 'dots')}
                    className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                    <span>2</span>
                  </button>

                </div>
                <div className="QR_Borderset"></div>

                <div className='MB_themeRow2 gap1Rem'>
                  {/* // const connerOption='dot' 'square' 'extra-rounded' */}
                  <div className="MB_qrContainer3 ">
                    <label htmlFor="" className='MB_TC_small'>Conner Style</label>

                    <div className='MB_themeRow2 '>

                      <button onClick={() => qrCodeSetUpFn('cornersOption', 'square')}
                        className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                        <span>1</span>
                      </button>
                      <button onClick={() => qrCodeSetUpFn('cornersOption', 'extra-rounded')}
                        className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                        <span>1</span>
                      </button>
                      <button onClick={() => qrCodeSetUpFn('cornersOption', 'dot')}
                        className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                        <span>1</span>
                      </button>
                    </div>
                    <div className="QR_Borderset"></div>
                  </div>



                  <div className="MB_qrContainer3">
                    <label htmlFor="" className='MB_TC_small'>Inside-Conner Style</label>
                    <div className='MB_themeRow2'>
                      <button onClick={() => qrCodeSetUpFn('dotCornersOption', 'square')}
                        className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                        <span>1</span>
                      </button>
                      <button onClick={() => qrCodeSetUpFn('dotCornersOption', 'dot')}
                        className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                        <span>1</span>
                      </button>
                      <button onClick={() => qrCodeSetUpFn('dotCornersOption', '')}
                        className='MB_Sq_Btn QrBtnSize MB_Btn_Count '>
                        <span>1</span>
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
                      }} className="colorPickerItem borderPickC color_PickQr color_PBig-Active" style={{ 'backgroundColor': `${colorQrCode}` }} id='navBarFontColor'></button>
                    </div>
                    <div className="QR_Borderset"></div>

                  </div>

                  <div className="MB_qrContainer3">
                    <label htmlFor="" className='MB_TC_small'>Background Color</label>
                    <div className='MB_themeRow2'>
                      <button onClick={(e) => {
                        setOnOffTrayBG(true)
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
                          />
                          <span className='QR_uplaodLogo' >Upload</span>
                        </div>

                      </label>
                      {/* <div className="logoSizeBox">
                        <span onClick={() => logoSizeFn(-1)} className="">-</span>
                        <span className=""> Logo Size</span>
                        <span onClick={() => logoSizeFn(+1)} className="">+</span>
                      </div> */}
                      <button onClick={() => { setLogoQr('') }} className={`MB_Btn forBinWhite QRBin`}>
                        <img src={MBiconBin} alt="" />
                      </button>
                    </div>

                    <div className="smallLogoQR selectable">* Logo size depend on QR Code Level</div>


                  </div>

                </div>
                <div className="QR_Borderset"></div>

              </div>}












              <div className='extraSpace'
              // style={{ 'height': `${themeSetup.navAndFootBar.navBarColor}` }}

              ></div>
            </div>

          </div>

        </div>
        <div className="MB_Positon_Bottom_btn">
          <div className="MB_Frid_3Btn">

            {/* SAVE BUTTON */}

            <button
              onClick={() => {
                // setWindowConfirmFn()
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
      </div >
    </div >

  )
}
export default _02QRCode




