import Marquee from "react-fast-marquee";
const Banner3 = () => {

  const logos = [
    "https://th.bing.com/th/id/OIP.vFLh3RReaT3918i4rvR6iAHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.Vj0kQFAyLmQp8cnXXZg6NQHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.2O7PT3cFUMagmZhlizCa8QHaBP?r=0&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.QcaaSNvh7TQ5IwiC0OZpdAHaDH?r=0&w=1024&h=430&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.Mt-Sa8rHaxtA2nlk-9F7eQAAAA?r=0&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.NATBCKcGaSqBiEsEREwNlAHaCf?r=0&rs=1&pid=ImgDetMain",
    "https://logowik.com/content/uploads/images/active-campaign2589.jpg",
    "https://logowik.com/content/uploads/images/calendly4848.jpg",
    "/logo.png"
    ];
    const renderLogos = () =>
      logos.map((src, idx) => (
        <img
          key={idx}
          className="p-5 m-4 h-30 w-60 gap-2 object-contain bg-[#FAF9FB] rounded-2xl"
          src={src}
          alt={`logo-${idx}`}
        />
      ));
    return (
      <div className="bg-[#FAF9FB]">
        <br /><br /><br />
        <div className="bg-[#FFFFFF] py-16 px-4 rounded-[3rem] max-w-7xl mx-auto shadow-inner">
          <div className="text-center">
            <p className="text-2xl text-[#9454AB]">Integrations</p>
            <h2 className="text-5xl text-[#3E3040] mt-4">
              Typeform integrates with<br />all the powerful apps
            </h2>
          </div>
  
          <div className="mt-12 flex overflow-hidden whitespace-nowrap">
            <Marquee>{renderLogos()}</Marquee>
          </div>
  
          <div className="mt-6 flex overflow-hidden whitespace-nowrap">
            <Marquee direction="right">{renderLogos()}</Marquee>
          </div>
        </div>
        <br /><br /><br />
      </div>
    );
  };
export default Banner3