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

const _02QRCode = (prop) => {
  const { user } = useSelector(state => state.user)

  // const [qrValue, setQrValue] = useState("")

  // const [qrCodeText, setQRCodeText] = useState('');

  const downloadQRCode = () => {
    const canvas = document.getElementById("qrGenerate");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${user.restaurentName}-QRcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  //= New
  // const dotOption ='rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded'
  // const connerOption='dot' 'square' 'extra-rounded'
  // const connerDot ='dot' 'square'
  const qrCode = new QRCodeStyling({
    width: 1500,
    height: 1500,
    data: "http://192.168.1.13:3000/customer/8e468036-undefined",
    // image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    image: '',

    dotsOptions: {
      color: "#4267b2",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#e9ebee",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5
    },
    cornersSquareOptions: {
      type: "extra-rounded"

    },
    cornersDotOptions: {
      type: "extra-rounded"

    }
  });

  const [url, setUrl] = useState("http://192.168.1.13:3000/customer/8e468036-undefined");
  const [fileExt, setFileExt] = useState("png");
  const ref = useRef(null);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);

  // const onUrlChange = (event) => {
  //   event.preventDefault();
  //   setUrl(event.target.value);
  // };

  // const onExtensionChange = (event) => {
  //   setFileExt(event.target.value);
  // };

  const onDownloadClick = () => {
    qrCode.download({
      name: "qr",
      extension: 'png'
    });
  };

  // qrCode.append(document.getElementById("canvas"));
  return (
    <div className="MB_FullPage_Container">
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

      <div className="MB_AB_FullAgain zindexUnder1">
        <div className="MB_2LangLayout_Grid gridRow_1fr">
          <div className="">

            <div className="MB_InScroll_fullNew paddingBottom_8">

              <div className="MB_qrContainer">
                <div className="MB_qrCodeBox">
                  <div className="MB_qrCodeitem" ref={ref} />
                </div>


                <div className='MB_themeRow'>
                  <label htmlFor="navBarFontColor" className='MB_TC_small'>Font Color</label>
                  <button
                    className='MB_Sq_Btn SaveBtnSize MB_Btn_Count  MB_G3'>
                    <span>7/7</span>
                  </button>
                </div>
                <div className='MB_themeRow'>

                  <div className='navbarfontColor MB_themeGrid'>
                    <label htmlFor="navBarFontColor" className='MB_TC_small'>Font Color</label>

                    <button onClick={(e) => {
                      // setOnoffColorPicker(true)
                      // setNoSetTheme(1)
                      // setNameTheme('navBarFontColor')
                      // clickColor(navBarFontColor)
                    }} className="colorPickerItem borderPickC color_PBig color_PBig-Active" style={{ 'backgroundColor': `${''}` }} id='navBarFontColor'></button>

                  </div>


                </div>











                {/* <button onClick={onDownloadClick}>Download</button> */}
















              </div>










              {/* <a href={`http://192.168.1.13:3000/customer/${user.link}`}>{`Click to: ${user.restaurentName} menu`}</a> */}

              {/* <div className="barcodeSection">
                <div className="" style={{ height: "auto", margin: "0 auto", maxWidth: 150, width: "100%" }}>
                  <a onClick={downloadQRCode} type="button" >
                    <QRCodeCanvas
                      id="qrGenerate"
                      // size={100}
                      size={250}
                      // size={1000}
                      level={"L"}
                      style={{ height: "auto", maxWidth: "100%", width: "100%", border: '1px solid #000' }}
                      value={`http://192.168.1.13:3000/customer/${user.link}`}
                      viewBox={`0 0 256 256`}
                      bgColor='#fff'
                      fgColor='#000'
                      includeMargin='true'
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default _02QRCode




