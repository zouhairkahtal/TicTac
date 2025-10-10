import background from "../assets/image/backgroun-home-page.jpg";
import homeImage from "../assets/image/homePageImage.png";

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
          className="w-full h-full bg-gray-100 flex items-center justify-center"
          style={backgroundStyle}
        >
          <div className="w-[1250px] h-[600px] mt-32 flex ">
            <div className="w-2/4 h-full ">
              <div className=" text-white max-w-md mt-10 ">
                <h1 className="text-6xl font-bold mb-4">
                  Discover Elegance in Every Second
                </h1>
                <p className="text-2xl mb-6">
                  Experience premium craftsmanship with our exclusive collection
                  of modern watches.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-2/4 h-full  flex items-center justify-end ">
              <img
                src={homeImage}
                alt={homeImage}
                className=" w-[400px] select-none"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-red-200"></div>
      </div>
    </>
  );
}
