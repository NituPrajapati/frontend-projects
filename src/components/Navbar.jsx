import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const logoRef = useRef(null);

  useEffect(()=>{
    gsap.from(logoRef.current,{
      x: 30,
      duration: 3
    })
  },[])
  return (
    <>
    <div className='sticky top-0 z-40'>
      <div className="navbar bg-base-100">
        <div className="flex">
          <img className="h-10 w-10 m-5 ml-10" src="/download.jpg" />
        </div>
    <div className="flex-1 font-bold m-5">
      <a ref={logoRef} className="logo text-2xl font">Typeform</a>
    </div>
  <div className='ml-35 flex gap-7'>
    <a className="flex">Products <IoIosArrowDown size={18} className="m-1"/></a>
    <a className="flex">Solutions <IoIosArrowDown size={18} className="m-1"/></a>
    <a className="flex">Resoures <IoIosArrowDown size={18} className="m-1"/></a>
    <a className="flex">Enterprise</a>
    <a className="flex">Pricing </a>
  </div>
  <div className="navbar-end m-8">
    <a className="btn btn-ghost rounded-lg  !bg-[#3E3040] !text-[#FAF9FB] p-3 cursor-pointer">Create your page</a>
  </div>
  </div>
</div>
  </>
  )
}

export default Navbar