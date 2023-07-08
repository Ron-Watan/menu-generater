//-
// import { useEffect, useState } from "react"
// import NavbarComponent from './NavbarComponent'
import axios from "axios"
import { authenticate, getToken, ticketPass } from "../protectors/authorize"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from "../redux/alertSlice"
import { useSelector } from "react-redux"
import { useState } from "react"
import { QRCodeCanvas } from 'qrcode.react';
import '../style/generate.css'


const GenerateMenu = () => {
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


  return (
    <div className="barcodeFix ">
   
      <a href={`http://192.168.1.13:3000/customer/${user.link}`}>{`Click to: ${user.restaurentName} menu`}</a>

      <div className="barcodeSection">
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
      </div>

    </div>

  )
}
export default GenerateMenu




