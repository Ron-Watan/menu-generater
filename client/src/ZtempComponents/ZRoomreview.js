import React, { useState } from "react";
import list from "./ZdataRoom";

// const list = [
//   {
//     id: 1,
//     room: "2000",
//     sold: "2"
//   },
//   {
//     id: 2,
//     room: "1000",
//     sold: "0"
//   },
//   {
//     id: 3,
//     room: "500",
//     sold: "0"
//   },
//   {
//     id: 4,
//     room: "0",
//     sold: "0"
//   },
//   {
//     id: 5,
//     room: "0",
//     sold: "0"
//   },
//   {
//     id: 6,
//     room: "0",
//     sold: "0"
//   },
//   {
//     id: 7,
//     room: "0",
//     sold: "0"
//   }
// ];

export default function RoomListView() {
  // const classes = useStyles();
  const [roomRent, setRoomRent] = useState(list);



  const handleroom = (e, id) => {
    var result = [...roomRent];
    result = result.map((x) => {
      if (x.id === id) {
        x.room = e.target.value;
        return x;
      } else return x;
    });
    setRoomRent(result);
  };
  // console.log(roomRent.slice(0, 7))
  const [no, setNo] = useState(1)
  const click = () => {
    setNo(no + 1)
    console.log(no, roomRent)
  }

  return (
    <>
      <div className='mx-12'>
        <div className={`classes.paper`} variant="outlined" elevation={0}>
          <div className={`classes.layout`}>
            <div className={`classes.main1`}>
              <div >
                <div item sm={3}>
                  <div className={`classes.roomType`}>
                    <h4 className={`classes.roomTypeContent`}>Room Rate</h4>
                  </div>
                </div>
                <div item sm={9}>



                  <div className={`classes.Roomcalendar`}>




                    {roomRent.map((roomData) => {
                      return (
                        <>
                          <div className={`classes.Roomview`}>
                            <div
                              key={roomData.id}
                              className={`classes.roomavailable`}
                            >
                              <input
                                name="roomRent"
                                type="text"
                                value={roomData.room}
                                className={`classes.input`}
                                onChange={(e) => handleroom(e, roomData.id)}
                              />
                            </div>
                            <div className={`classes.roomSold`}>
                              <p>{`roomData.sold`} Sold</p>
                            </div>
                          </div>
                        </>
                      );
                    })}


                    <button onClick={click}>dsdsd</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}









/////////////////////////////////////////
// import React, { useState } from "react";


// const rooms = [
//   {
//     id: 1,
//     room: "2000",
//     sold: "2"
//   },
//   {
//     id: 2,
//     room: "1000",
//     sold: "0"
//   },
//   {
//     id: 3,
//     room: "500",
//     sold: "0"
//   },
//   {
//     id: 4,
//     room: "0",
//     sold: "0"
//   },
//   {
//     id: 5,
//     room: "0",
//     sold: "0"
//   },
//   {
//     id: 6,
//     room: "0",
//     sold: "0"
//   },
//   {
//     id: 7,
//     room: "0",
//     sold: "0"
//   }
// ];

// export default function RoomListView() {
//   // const classes = useStyles();
//   const [roomRent, setRoomRent] = useState(rooms);

//   const handleroom = (e, id) => {
//     var result = [...roomRent];
//     result = result.map((x) => {
//       if (x.id === id) {
//         x.room = e.target.value;
//         return x;
//       } else return x;
//     });
//     setRoomRent(result);
//   };

//   return (
//     <>
//       <div className='mx-12'>
//         <div className={`classes.paper`} variant="outlined" elevation={0}>
//           <div className={`classes.layout`}>
//             <div className={`classes.main1`}>
//               <div container>
//                 <div item sm={3}>
//                   <div className={`classes.roomType`}>
//                     <h4 className={`classes.roomTypeContent`}>Room Rate</h4>
//                   </div>
//                 </div>
//                 <div item sm={9}>



//                   <div className={`classes.Roomcalendar`}>




//                     {roomRent.map((roomData) => {
//                       return (
//                         <>
//                           <div className={`classes.Roomview`}>
//                             <div
//                               key={roomData.id}
//                               className={`classes.roomavailable`}
//                             >
//                               <input
//                                 name="roomRent"
//                                 type="text"
//                                 value={roomData.room}
//                                 className={`classes.input`}
//                                 onChange={(e) => handleroom(e, roomData.id)}
//                               />
//                             </div>
//                             <div className={`classes.roomSold`}>
//                               <p>{`roomData.sold`} Sold</p>
//                             </div>
//                           </div>
//                         </>
//                       );
//                     })}



//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }





















// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: "20px 20px 0px 20px",
//       width: theme.spacing(16),
//       height: "auto"
//     }
//   },
//   paper: {
//     width: "100%"
//   },
//   calender: {
//     float: "right",
//     margin: "20px 10px"
//   },
//   heading: {
//     marginLeft: "20px",
//     fontSize: "20px"
//   },
//   layout: {
//     margin: "40px 20px"
//   },
//   icon: {
//     border: "1px solid #ADD8E6",
//     padding: "5px",
//     color: "#0000FF"
//   },

//   calendar: {
//     display: "table",
//     width: "100%",
//     height: "100%",
//     textAlign: "center"
//   },
//   Roomcalendar: {
//     display: "table",
//     width: "100%",
//     height: "100%",
//     textAlign: "center"
//   },
//   view: {
//     display: "table-cell",
//     border: "1px solid #8080802b"
//   },
//   Roomview: {
//     padding: "5px",
//     display: "table-cell",
//     border: "1px solid #8080802b"
//   },
//   week: {
//     color: "#0000FF",
//     textTransform: "uppercase",
//     fontWeight: "600",
//     fontSize: "18px"
//   },
//   roomavailable: {
//     color: "#000",
//     textTransform: "uppercase",
//     fontWeight: "600",
//     fontSize: "18px",
//     border: "2px solid #8080802b",
//     margin: "0px 10px",
//     padding: "10px"
//   },
//   roomSold: {
//     color: "#000000c9",
//     fontSize: "14px"
//   },
//   main: {
//     background: "#8080802b",
//     height: "100%"
//   },
//   main1: {
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     height: "100%"
//   },
//   roomRent: {
//     border: "1px solid #8080802b",
//     textAlign: "center",
//     fontSize: "18px",
//     fontWeight: "bold",
//     verticalAlign: "middle"
//   },
//   roomType: {
//     display: "flex",
//     alignItems: "center",
//     minHeight: "100%",
//     justifyContent: "center"
//   },
//   roomTypeContent: {
//     textAlign: "center",
//     fontSize: "18px",
//     fontWeight: "bold",
//     verticalAlign: "middle"
//   }
// }));
