import { useEffect, useState } from "react";


export const SlideSection = ()=>{
    const [d, setD]= useState(true);
    const [sec, Setsec] = useState(0);
    let data = [
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2715.png?1651736076",
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2715.png?1651736076",
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/1863.png?1651774882",
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/1864.png?1651774934",
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/2086.png?1651783992",
        "https://s3.ap-south-1.amazonaws.com/fraazo-prod/web_ban/1863.png?1651774882",
    ];

    var timer;
    useEffect(()=>{
        if(d){
                  timer = setInterval(() => {
                    Setsec(sec + 1);
                    if (sec == data.length-1) {
                         Setsec(0);
                    }
                  }, 2000);
                }
                  return () => clearInterval(timer);
    },);


 
 
    return (
        <div >
            <div className="timer">
                <div className="timer-1">
                <img src={data[sec]} alt="" />
                </div>
                <div className="timer-2">
                    <div className="timer-3"><img src="https://fraazo.com/static/Web1-cafcda6bf22c11e6bbaed467d13a0eb7.png" alt="" /></div>
                    <div className="timer-3"><img src="https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png" alt="" /></div>
                    <div className="timer-3"><img src="https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}






// import { useEffect, useState } from "react";

// export const SlideSection = () => {
//   const [second, setSecond] = useState(59);
//   const [Minutes, setMinuts] = useState(4);
//   const [show, setshow] = useState(false)

  
//     var timer;
//     useEffect(() => {
//       if(show){
//       timer = setInterval(() => {
//         setSecond(Math.abs(second - 1));
//         if (second == 0) {
//           setMinuts(Minutes - 1);
//           setSecond(59);
//         }
//       }, 1000);
//     }
//       return () => clearInterval(timer);
//     });
  


//   return (
//     <div className="timer">
//       <div className="container">
//         <div className="timer-container">
//           <h1>SetTimer</h1>
//           <h1>
//             {Minutes < 10 ? "0" + Minutes : Minutes}:
//             {second < 10 ? "0" + second : second}
//           </h1>
//           <button onClick={()=>{
//             setshow(true)
//           }}>start</button>
//           <button className="restart" onClick={()=>{
//               setMinuts(4);
//               setSecond(59);
             
//           }}>
//             Restart
//           </button>
//           <button className="stop" onClick={()=>{
//               clearInterval(timer);
//               setshow(false)
//           }}>
//             stop
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };