import consultationBG from "../assets/image/consultation/consultation.jpg";

import ExpertConsultants from "../assets/image/consultation/ConsultantsImage/Expert Consultants.jpeg";
import ExclusiveCollection from "../assets/image/consultation/ConsultantsImage/Exclusive Collection.jpeg";
import PrecisionAndCraftsmanship from "../assets/image/consultation/ConsultantsImage/Precision and Craftsmanship.jpeg";
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
      image: ExpertConsultants,
    },
    {
      title: "Exclusive Collection",
      description:
        "Explore our exclusive range of luxury watches, curated to offer the best in style and functionality.",
      image: ExclusiveCollection,
    },
    {
      title: "Precision and Craftsmanship",
      description:
        "Each watch is a masterpiece of precision and craftsmanship, ensuring you wear nothing but the best on your wrist.",
      image: PrecisionAndCraftsmanship,
    },
  ];
  return (
    <>
      <div className="w-full h-full bg-black ">
        <div
          className="bg-red-100 w-full h-[800px] max-h-[1200px] flex  flex-col items-center justify-between "
          style={backgroundStyle}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="flex items-center justify-center flex-col rounded-xl overflow-hidden
      w-[90%] max-w-[1250px] p-5 mx-auto text-center"
            >
              <div className="text-white  p-5 rounded-md backdrop-blur-lg w-full md:w-3/5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-normal">
                  Discover Your Perfect Timepiece
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-thin leading-relaxed mb-6 sm:mb-8">
                  Experience luxury and precision with our collection of
                  exquisite watches. Let our experts guide you in choosing a
                  watch that complements your style and meets your budget.
                </p>

                <button className="bg-yellow-500 mt-4 sm:mt-6 p-3 sm:p-4 rounded-full text-sm sm:text-base md:text-lg hover:scale-105 transition-transform duration-300">
                  Get Your Consultation
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-56  ">
            <MarqueeComponent />
          </div>
        </div>
        <div className="bg-black w-full  py-2">
          <div className="w-full h-40 flex justify-center ">
            <div className=" flex items-center   max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px] h-full">
              <h1 className="text-3xl font-medium text-white">
                Why Choosing Us ?
              </h1>
            </div>
          </div>

          <div className="   flex  justify-center      mb-10      w-full ">
            <div className="  max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px]       p-5">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`
          bg-white text-black rounded-2xl overflow-hidden 
          w-[90%] max-[450px]:w-[90%] max-[639px]:w-[80%] sm:w-[45%] md:w-[40%] lg:w-[30%]
          animate-float transition-transform duration-500 hover:scale-105 hover:shadow-2xl
          group 
        `}
                    >
                      {/* Image container */}
                      <div className=" relative animate-oscillate p-1 ">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-48 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-1"
                          style={featuresStyle}
                        />
                      </div>

                      {/* Text content */}
                      <div className="p-5 md:p-6">
                        <h3 className="font-extrabold italic text-xl sm:text-2xl md:text-xl mb-3 relative animate-glow">
                          {feature.title}
                          <span className="absolute left-0 rounded-sm -bottom-1 w-0 h-1 bg-black transition-all duration-500 group-hover:w-full"></span>
                        </h3>
                        <p className="text-base sm:text-lg md:text-base leading-relaxed text-gray-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
            <footer className="bg-black w-full">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Company
                </h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Help center
                </h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
                <ul className="text-gray-300 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="px-4 py-6 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-300 sm:text-center">
                © 2025 TicTac. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                {/* Social icons */}
                <a href="#" className="text-gray-400 hover:text-yellow-300">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-300">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-300">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-300">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </>
  );
}
