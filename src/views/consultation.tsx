import consultationBG from "../assets/image/consultation image/consultation-BG.jpg";

import ExpertConsultants from "../assets/image/consultation image/ConsultantsImage/Expert Consultants.jpeg"
import ExclusiveCollection from "../assets/image/consultation image/ConsultantsImage/Exclusive Collection.jpeg"
import PrecisionAndCraftsmanship from "../assets/image/consultation image/ConsultantsImage/Precision and Craftsmanship.jpeg"
import { MarqueeComponent } from "../components/marquee";

export function Consultation() {

  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${consultationBG})`,
  };
  const featuresStyle = {
    width: "100%",
    height: "50%",
   
    backgroundImage: `url(${consultationBG})`,
  };

    const features = [
    {
      title: "Expert Consultants",
      description:
        "Our team of experts is dedicated to helping you find the perfect watch that matches your lifestyle and preferences.",
      image:
        ExpertConsultants,
    },
    {
      title: "Exclusive Collection",
      description:
        "Explore our exclusive range of luxury watches, curated to offer the best in style and functionality.",
      image:
      ExclusiveCollection,
    },
    {
      title: "Precision and Craftsmanship",
      description:
        "Each watch is a masterpiece of precision and craftsmanship, ensuring you wear nothing but the best on your wrist.",
      image:
     PrecisionAndCraftsmanship,
    },
  ];
    return(


        <>
        <div className="w-full h-full bg-black ">


            <div className="bg-red-100 w-full h-[800px] max-h-[1200px] flex  flex-col items-center justify-between " 
              style={backgroundStyle}>

                <div className="flex items-center justify-center flex-col  rounded-xl 	  overflow-hidden mt-52
            max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px] h-[500px]   p-5    ">
                <div className=" text-white w-3/5 text-center">

                <h1 className="text-5xl mb-10 font-normal">Discover Your Perfect Timepiece</h1>
                <p className="text-lg font-thin">Experience luxury and precision with our collection of exquisite watches. Let our experts guide you in choosing a watch that complements your style and meets your budget.</p>
                
                <button className="bg-yellow-500 mt-10 p-4 rounded-full">
                    Get Your Consultation
                </button>
                </div>
                    
                </div>
                <div className="w-full h-56  ">
                  

                    <MarqueeComponent/>

                </div>
              


            </div>
            <div className="bg-black w-full h-[900px] " >
                <div className="w-full h-40 flex justify-center ">
        <div className=" flex items-center  bg-blue-300 max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px] h-full">
            <h1 className="text-3xl font-medium text-white">Why Choosing Us ?</h1>
        </div>
                </div>

                
<div className="bg-red-50    flex  justify-center            w-full ">


                
  <div className=" bg-blue-300 max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px]       p-5" >

         <div className="max-w-6xl mx-auto px-6">
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                style={featuresStyle}
                className="w-full h-48  "
              />
              <div className="p-6">
                <h3 className="font-semibold italic text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
</div>

<div>

</div>
                </div>

            </div>


        </div>
        
        </>
    )
}