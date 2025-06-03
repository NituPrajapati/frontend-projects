import { IoMdCheckmark } from "react-icons/io";

function Banner5() {
  return (
    <>
    <div className="bg-[#F5F3F6]">
        <h1 className='text-center text-6xl top-0 p-10'>Choose the plan that works for you</h1>
        <div className='flex justify-center m-15'>
            <div className='rounded-xl h-15 w-65 p-4 bg-white'>Monthly
                <a className='rounded-xl h-12 w-50 p-2 ml-7 bg-[#3E3040] text-[#FAF9FB]'>yearly <span className='text-[#97DA90] bg-[#3E3040]'>save 16%</span></a>
            </div>
        </div>
        
       
        <div class="flex m-15 gap-6">
           {/* //1st container  */}
          <div class="w-1/3 h-9/10 bg-white text-center rounded-2xl border-0 p-2">
             <h3 className='text-2xl font-semibold mt-5'>Basic</h3>
             <p className="mt-2 text-[#655D65]">Create interactive forms that connect to your workflow</p>
              <div className='m-15'> <span className='text-3xl'>25USD</span>/mo <br></br> <div className="text-[#457D4E]">Save58US/yr</div></div>
                <div><a className="btn btn-ghost w-40 h-13 rounded-xl bg-[#3E3040] text-[#FAF9FB] p-3 cursor-pointer">Get Basic</a></div>
                <div className="mt-8">
                <hr className="border-t-1 border-gray-300"></hr>
                  <div className="flex-col space-y-1">
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>100 responses/mo included </p><br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>1 User </p> <br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>Unlimited typeforms </p><br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>Unlimited Questions </p><br></br>
                  </div>
                </div>
          </div>
             {/* //2nd container  */}     
          <div class="w-1/3 h-9/10 bg-white text-center rounded-2xl border-0 p-2">
            <h3 className='text-2xl font-semibold mt-5'>Basic</h3>
             <p className="mt-2 text-[#655D65]">Create interactive forms that connect to your workflow</p>
              <div className='m-15'> <span className='text-3xl'>25USD</span>/mo <br></br> <div className="text-[#457D4E]">Save58US/yr</div></div>
                <div><a className="btn btn-ghost w-40 h-13 rounded-xl bg-[#3E3040] text-[#FAF9FB] p-3 cursor-pointer">Get Basic</a></div>
                <div className="mt-8">
                <hr className="border-t-1 border-gray-300"></hr>
                  <div className="flex-col space-y-1">
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>100 responses/mo included </p><br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>1 User </p> <br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>Unlimited typeforms </p><br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>Unlimited Questions </p><br></br>
                  </div>
                </div>
          </div>
           {/* //3rd container  */}
          <div class="w-1/3 h-9/10 bg-white text-center rounded-2xl border-0 p-2">
          <h3 className='text-2xl font-semibold mt-5'>Basic</h3>
             <p className="mt-2 text-[#655D65]">Create interactive forms that connect to your workflow</p>
              <div className='m-15'> <span className='text-3xl'>25USD</span>/mo <br></br> <div className="text-[#457D4E]">Save58US/yr</div></div>
                <div><a className="btn btn-ghost w-40 h-13 rounded-xl bg-[#3E3040] text-[#FAF9FB] p-3 cursor-pointer">Get Basic</a></div>
                <div className="mt-8">
                <hr className="border-t-1 border-gray-300"></hr>
                  <div className="flex-col space-y-1">
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>100 responses/mo included </p><br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>1 User </p> <br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>Unlimited typeforms </p><br></br>
                    <hr className="border-t-1 border-gray-300"></hr>
                    <p className="justify-items-start flex"><IoMdCheckmark size={21}/>Unlimited Questions </p><br></br>
                  </div>
                </div>
          </div>

        </div>
        <div className="mt-25 mb-20"><p className="text-center underline">
          Or try it out with our free plan </p></div>
           <br></br><br></br>
    </div>

    <div className="bg-[#FFFFFF] text-center m-20 mb-40">
        <p className="text-5xl">Ready to launch your landing page?</p>
        <div className='mt-20 text-center'>
          <a className="btn rounded-lg p-6 cursor-pointer bg-[#3E3040] text-[#FAF9FB]">Create your page</a>
        </div>
        </div>
    </>
  )
}

export default Banner5