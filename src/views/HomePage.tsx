import background from "../assets/image/backgroun-home-page.jpg";
import homeImage from "../assets/image/homePageImage.png";
import sell from "../assets/image/offers image/sell.jpeg";
import repair from "../assets/image/offers image/repair.jpeg";
import consultation from "../assets/image/offers image/consultation.jpeg";

export function HomePage() {
  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
  };
  //     const homeImageStyle={
  //         width:"300px",
  //         height:"300px",
  //         // backgroundSize:"cover",
  //    backgroundImage: `url(${background})`,
  //     }

  return (
    <>
      <div className="w-full h-full">
        <div
          className="w-full h-full bg-gray-100 flex items-center justify-center  max-h-[1000px] "
          style={backgroundStyle}
        >
          <div className=" max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px] h-[600px] mt-32 flex p-5  max-[515px]:h-[890px]  max-[515px]:flex-col-reverse ">
            <div className="w-2/4 h-full max-[515px]:w-full max-[515px]:h-2/4">
              <div className=" text-white max-w-md mt-10 ">
                <h1 className="text-6xl font-bold mb-4">
                  Discover Elegance in Every Second
                </h1>
                <p className="text-2xl mb-6 max-[450px]:text-base">
                  Experience premium craftsmanship with our exclusive collection
                  of modern watches.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-2/4 h-full max-[515px]:w-full max-[515px]:h-2/4 flex items-center justify-end select-none  max-[515px]:justify-center">
              <img src={homeImage} alt={homeImage} className=" w-[400px]  max-[515px]:w-[200px] " />
            </div>
          </div>
        </div>


        <div className="w-full h-2/4  flex flex-col items-center justify-around">
          <h1 className=" text-5xl w-full text-center text-green-800 font-bold">
            The offers we offer
          </h1>

          <div className="flex gap-20 w-full  mb-20 items-center justify-center px-5   max-[720px]:py-10  max-[720px]:gap-10 max-[720px]:flex-col ">
            <div className="bg-green-800 w-72 h-56 flex flex-col items-center p-5 rounded-lg shadow-xl transition ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-full h-full">
                <img src={sell} alt={sell} className=" w-[60px] rounded-full" />
              </div>
              <div className="h-52 ">
                <h1 className=" text-xl font-semibold text-white">sell</h1>
                <p className="text-sm text-white">
                  High-quality watches in different styles — classic or modern,
                  at great prices
                </p>
              </div>
            </div>
            <div className="bg-green-800 w-72 h-56 flex flex-col items-center p-5 rounded-lg shadow-xl transition ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-full h-full">
                <img
                  src={repair}
                  alt={repair}
                  className=" w-[60px] rounded-full"
                />
              </div>
              <div className="h-52 ">
                <h1 className=" text-xl font-semibold text-white">repair</h1>
                <p className="text-sm text-white">
                  Fast and professional watch repair to restore your timepiece.
                </p>
              </div>
            </div>
            <div className="bg-green-800 w-72 h-56 flex flex-col items-center p-5 rounded-lg shadow-xl transition ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="w-full h-full">
                <img
                  src={consultation}
                  alt={consultation}
                  className=" w-[60px] rounded-full"
                />
              </div>
              <div className="h-52 ">
                <h1 className=" text-xl font-semibold text-white">
                  consultation
                </h1>
                <p className="text-sm text-white">
                  Get expert advice to choose the perfect watch for your style
                  and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-4/5 bg-red-200"></div>
      </div>
    </>
  );
}
