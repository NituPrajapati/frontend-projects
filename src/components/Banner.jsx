import React from 'react'

function Banner() {
  return (
   <>
   <div className='flex mt-10'> 
    {/* left div */}
   <div className='w-1/2 h-full'>
   <div className='m-15 mt-30'>
     <p className='!text-[#9454AB] text-lg font-semibold'>LANDING PAGE BUILDER
    </p>
    <div>
      <h1 className='text-7xl mt-7 space-x-4'>
        Easily create a <br></br>no-code landing <br></br>page using a form
      </h1>
      <p className='text-xl mt-5'>
        Turn your form into an engaging landing page. Stay on-brand, collect data, and automate workflows—all with no need to code.
      </p>
     
        <a className="btn mt-8 rounded-lg text-white p-5 cursor-pointer !bg-[#3E3040] !text-[#FAF9FB]">Create your page</a>
    </div>
   </div>
   </div>
  {/* right div */}
   <div className='w-1/2 h-26'>
    <img src="/banner.webp"/>
   </div>

   {/* div of second page */}
   {/* <div>
    <p>
      The conversion rate of the typeform is at 10.6%. For the pace at which I executed this, it beats any smart landing page you could make.
    </p>
   </div> */}
    </div>
    </>
  )
}

export default Banner