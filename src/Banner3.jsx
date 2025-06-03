//import { useRef } from "react"
//import gsap from "gsap";
//import { useGSAP } from '@gsap/react';
//gsap.registerPlugin(useGSAP);
import Marquee from "react-fast-marquee";
const Banner3 = () => {

  // const cardRef = useRef(null);
  // useGSAP(()=>{
  //  gsap.to(cardRef.current,{
  //     transform :'translateX(-100%)',
  //     duration: 5,
  //     repeat: 1,
  //     ease: "none"
  //   })
  // })
  
    
  return (
    <>
    <div className="flex w-5/6 h-full m-10 items-center">
      <Marquee>
        <div class="bg-white p-4 rounded">
          <svg class="w-10 h-10 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="...">
            <path d="C:\Users\NITU PRAJAPATI\OneDrive\Desktop\Nitu folder\React folder\project1\public\card1.svg" />
          </svg>
        </div>
        {/* {imgs.map((logo, index)=>(
        <div key={index}>
          <img className="fill-black" src={logo.src} />
        </div>
        ))} 
        */}
   
      </Marquee>
    </div>

    </>

  )
}

export default Banner3