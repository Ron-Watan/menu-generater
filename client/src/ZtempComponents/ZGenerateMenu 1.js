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
  const dispath = useDispatch()
  const [state, setState] = useState({
    restaurantName: '',

  })
  console.log()
  const { restaurantName } = state

  const inputValue = (name) => (even) => {
    setState({ ...state, [name]: even.target.value })
  }
  const navigate = useNavigate()

  const submitGenerate = (e) => {
    e.preventDefault()
    dispath(showLoading())

    axios.post(`${process.env.REACT_APP_API}/user/generateMenu`, { restaurantName, userId: user.userId, link: user.link }, ticketPass)
      .then(result => {
        if (result.data.success) {
          dispath(hideLoading())
          Swal.fire(result.data.message)
          navigate('/mainform')
        } else {
          Swal.fire(result.data.message)
          dispath(hideLoading())
        }
      }).catch(err => {
        dispath(hideLoading())

        console.log("Can't not connect the server")
        Swal.fire("Can't not connect the server")
      })
  }
  const [qrValue, setQrValue] = useState("ThaiDishes")
  // useEffect(() => {
  //   getToken() && navigate('/')
  //   // eslint-disable-next-line
  // }, [])
  const [qrCodeText, setQRCodeText] = useState('');
  function downloadQR() {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      // .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  // const [test,setTest]=useState('')
  // const qrCodeURL = document.getElementById('qrCodeEl')
  // setTest(qrCodeURL)
  // console.log(qrCodeURL)
  const downloadQRCode = () => {
    const canvas = document.getElementById("qrGenerate");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}-QRcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="barcodeFix ">

      <div className="flex flex-col justify-center items-center mt-20 ">
        <div className="w-full max-w-md -translate-y-18">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <input value={restaurantName} onChange={inputValue('restaurantName')} className=" appearance-none border-1 
              border-slate-300 hover:border-blue-500 rounded w-full py-3 px-4 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline" id="restaurantName" type="text" placeholder="Restaurant" />
            </div>

            <label className="text-gray-500 mb-10">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-md">
                Remember me
              </span>
            </label>

            <button onClick={submitGenerate} className="bg-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4" type="submit">
              submitGenerate
            </button>



            <div className="flex items-center justify-between">
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/">
                Forgot Password?
              </a>
              <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/register">
                Don't have an account? Sign Up
              </a>
            </div>

          </form>
          <p className="text-center text-gray-500 text-xs">

          </p>
        </div>
      </div> 
      <a href={`http://localhost:3000/customer/${user.link}`}>ssss</a>


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
              value={`http://localhost:3000/customer/${user.link}`}
              viewBox={`0 0 256 256`}
              bgColor='#fff'
              fgColor='#000'
              includeMargin='true'
            />

          </a>
        </div>
      </div>


      {/* <QRCodeCanvas
        renderAs="canvas"
        id="qr-gen"
        value={'dsdsd'}
        size={290}
        level={"Q"}
      // includeMargin={true}
      />
      <button type="button" onClick={downloadQRCode}>
        Download QR Code
      </button> */}
    </div>

  )
}
export default GenerateMenu




