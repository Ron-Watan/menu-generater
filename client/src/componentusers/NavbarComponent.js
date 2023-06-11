
import "../style/navigationBar.css"

const NavbarComponent = (prop) => {




  return (
    <div className="sectionNavigation">


      <button onClick={()=> prop.timeSwitcher(1)} className="bg-white">1111</button>
      <button onClick={()=> prop.timeSwitcher(2)} className="bg-white">2222</button>
      <button onClick={()=> prop.timeSwitcher(3)} className="bg-white">333</button>
{/* 
      <div className='monitor1'>
          <button onClick={() => timeSwitcher(1)} className='bg-white'>
            1111
          </button>
          <button onClick={() => timeSwitcher(1)} className='bg-white'>
            1111
          </button>
          <button onClick={() => timeSwitcher(2)} className='bg-white'>
            2222
          </button>
          <button onClick={() => timeSwitcher(2)} className='bg-white'>
            2222
          </button>
          <button onClick={() => timeSwitcher(3)} className='bg-white'>
            333
          </button>

          <button onClick={() => timeSwitcher(3)} className='bg-white'>
            333
          </button>
        </div> */}





    </div>
  )

}

export default NavbarComponent
