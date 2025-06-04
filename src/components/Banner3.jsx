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
    <div className="bg-[#FAF9FB]">
      <br></br><br></br><br></br>
    <div className="bg-[#FFFFFF] py-16 px-4 rounded-[3rem] max-w-7xl mx-auto shadow-inner">
      <div className="text-center">
        <p className="text-2xl text-[#9454AB]">Integrations</p>
        <h2 className="text-5xl text-[#3E3040] mt-4">
          Typeform integrates with<br />all the powerful apps
        </h2>
      </div>

      <div className="mt-12 flex overflow-hidden whitespace-nowrap hover:">
        <Marquee>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.vFLh3RReaT3918i4rvR6iAHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.Vj0kQFAyLmQp8cnXXZg6NQHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.2O7PT3cFUMagmZhlizCa8QHaBP?r=0&rs=1&pid=ImgDetMain" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.QcaaSNvh7TQ5IwiC0OZpdAHaDH?r=0&w=1024&h=430&rs=1&pid=ImgDetMain" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.Mt-Sa8rHaxtA2nlk-9F7eQAAAA?r=0&rs=1&pid=ImgDetMain"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.NATBCKcGaSqBiEsEREwNlAHaCf?r=0&rs=1&pid=ImgDetMain"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://logowik.com/content/uploads/images/active-campaign2589.jpg"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://logowik.com/content/uploads/images/calendly4848.jpg" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="/logo.png" />
        </Marquee>
      </div>

       <div className="mt-6 flex overflow-hidden whitespace-nowrap">
        <Marquee direction="right">
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.vFLh3RReaT3918i4rvR6iAHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.Vj0kQFAyLmQp8cnXXZg6NQHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.2O7PT3cFUMagmZhlizCa8QHaBP?r=0&rs=1&pid=ImgDetMain" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.QcaaSNvh7TQ5IwiC0OZpdAHaDH?r=0&w=1024&h=430&rs=1&pid=ImgDetMain" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.Mt-Sa8rHaxtA2nlk-9F7eQAAAA?r=0&rs=1&pid=ImgDetMain"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://th.bing.com/th/id/OIP.NATBCKcGaSqBiEsEREwNlAHaCf?r=0&rs=1&pid=ImgDetMain"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://logowik.com/content/uploads/images/active-campaign2589.jpg"/>
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="https://logowik.com/content/uploads/images/calendly4848.jpg" />
        <img className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl" src="/logo.png" />
        </Marquee>
      </div>
    </div>
    <br></br><br></br><br></br>
    </div>
  );
}

export default Banner3