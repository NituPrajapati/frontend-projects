import { IoMdCheckmark } from "react-icons/io";
import Cards from "./Cards";
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
        
        <div class="flex m-14">
          {/* //1st container  */}
            <Cards
            cardType="Basic"
            description="Create interactive forms that connect to your workflow"
            price="25USD"
            savings="Save 58USD/yr"
            getbutton="Get Basic"
            features={[
              "100 responses/mo included",
              "1 User ",
              "Unlimited typeforms",
              "Unlimited Questions",
            ]}
          />
             {/* //2nd container  */}     
           <Cards
            cardType="Plus"
            description="Make your forms more beautiful and on-brand"
            price="50 USD"
            savings="Save 118USD/yr"
            getbutton="Get plus"
            features={[
              "1,000 responses/mo included",
              "3 User ",
              "Everything in Basic",
              "Remove Typeform branding",
              "Custom subdomain",
            ]}
          />
           {/* //3rd container  */}
          <Cards
            cardType="Business"
            description="Analyze performance and do more with your data"
            price="83 USD"
            savings="Save 198USD/yr"
            getbutton="Get Business"
            features={[
              "10,000 responses/mo included",
              "5 User ",
              "Everything in Plus",
              "Drop-off rates",
              "Conversion tracking",
              "Priority support and live chat",
            ]}
          />

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