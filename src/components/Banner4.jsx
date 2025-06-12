import gsap from "gsap"
import {useGSAP} from '@gsap/react'
function Banner4() {
    useGSAP(()=>{
    gsap.to(".img1, .img2, .img3",{
    y:40,
    ease: "bounce",
    duration:5,
    })
})
  return (
     <>
     <div className='bg-[#FAF9FB]'>
        {/* 1st container */}
     <div className='flex m-10'>
        <div className='w-1/2 h-full m-20'>
            <div className='w-[90%] h-84 content-center'>
                <img className="img1" src="/img.webp"/>
            </div>
        </div>
        <div className='w-1/2 h-full'>
            <div className='mt-55 mr-20'>
                <span className='!text-[#9454AB] font-medium'>NO CODE WEBSITE BUILDER</span> <br></br> <br></br>
                <h1 className='font-semi-bold text-5xl'>Pick a template and <br></br>publish in minutes</h1> <br></br>
                <p className='text-xl'>Choose from a variety of templates for lead generation, feedback, event registration, and more. Then, once someone fills out your form, you can redirect them—be it to your website, socials, or elsewhere.</p>
            </div>
        </div>
     </div>
      {/* 2nd container */}
    <div className='flex mt-45'>
     <div className='w-1/2 h-full'>
            <div className='mt-55 ml-40'>
                <span className='!text-[#9454AB] font-medium'>LEAD FROM PAGES</span> <br></br> <br></br>
                <h1 className='font-semi-bold text-5xl'>Effortlessly collect <br></br>lead insights</h1> <br></br>
                <p className='text-xl'>Using a typeform as a landing page means you can collect the data you need more easily. Generate valuable insights about your potential customers and use them to focus your marketing strategies.</p>
            </div>
      </div>
        <div className='w-1/2 h-full m-25'>
            <div className='w-[90%] h-84 content-center'>
                <img className="img2 " src="/img2.webp"/>
            </div>
        </div>
     </div>
     {/* 3rd container */}
    <div className='flex mt-45'>
        <div className='w-1/2 h-full m-20'>
            <div className='w-[90%] h-84 content-center'>
                <img className="img3" src="/img3.webp"/>
            </div>
        </div>
        <div className='w-1/2 h-full'>
            <div className='mt-55 mr-20'>
                <span className='!text-[#9454AB] font-medium'>LANDING PAGE DESIGN</span> <br></br> <br></br>
                <h1 className='font-semi-bold text-5xl'>Stay on-brand <br></br>and interactive</h1> <br></br>
                <p className='text-xl'>Create a captivating landing page by customizing fonts, colors, and buttons. Easily add interactive elements, tweak the layout, and make sure everything fits your brand perfectly.</p>
            </div>
        </div>
     </div>
     {/* button */}
     <div className='mt-90 text-center'>
      <a className="btn rounded-lg p-6 cursor-pointer !bg-[#3E3040] !text-[#FAF9FB]">Create your page</a>
     </div>
     </div>
     </>
  )
}

export default Banner4