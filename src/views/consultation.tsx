import consultationBG from "../assets/image/consultation image/consultation-BG.jpg";
import { MarqueeComponent } from "../components/marquee";

export function Consultation() {

  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${consultationBG})`,
  };
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
                    Get Your Free Consultation
                </button>
                </div>
                    
                </div>
                <div className="w-full h-56  ">
                  

                    <MarqueeComponent/>

                </div>


            </div>
            <div className="bg-black w-full h-[900px]" ></div>


        </div>
        
        </>
    )
}