import { IoMdCheckmark } from "react-icons/io";

function Cards({cardType, description, price, savings, getbutton, features}) {
  return (
    <>
    <div class="mt-9 mb-9 ml-8 mr-8">
        <div class="w-[400px] h-[650px] bg-white text-center rounded-2xl border-0 p-4">
         <h3 className='text-2xl font-semibold mt-5'>{cardType}</h3>
         <p className="mt-2 text-[#655D65]">{description}</p>
         <div className='m-15'> <span className='text-3xl'>{price}</span>/mo <br></br> <div className="text-[#457D4E]">{savings}</div></div>
         <div><a className="btn w-40 h-13 rounded-xl bg-[#3E3040] text-[#FAF9FB] p-3 cursor-pointer">{getbutton}</a></div>
         <div className="mt-8">
            <hr className="border-t-1 border-gray-300"></hr>
            <div className="flex-col space-y-1">
               {features.map((item, index) => (
              <div key={index}>
                <p className="flex items-center gap-2 text-left">
                  <IoMdCheckmark size={21} /> {item}
                </p>
                <hr className="border-t border-gray-300 mt-2" />
              </div>
            ))}
            </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Cards