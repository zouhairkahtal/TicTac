import contactBg from "../assets/image/contactBG.jpg";
export function ContactUs() {
  const backgroundStyle = {
 
    backgroundSize: "cover",
   
    backgroundImage: `url(${contactBg})`,
  };

  return (
    <>
      <div className="w-full  bg-gray-950 flex flex-col items-center justify-between text-white">
        {/* Contact Section */}
        <div className="w-full h-[900px] flex justify-center  mt-20 mb-20">
          <div className=" w-full h-[700px] flex justify-center">
            <div className="flex justify-center bg-gray-950 rounded-xl overflow-hidden
            max-[1750px]:w-[950px] max-[2000px]:w-[1200px] max-[1250px]:w-full w-[1250px] h-[700px] mt-32  p-5  max-[800px]:h-[700px]      gap-5
            ">
              <div
                className="w-[450px] h-full rounded-xl max-[810px]:w-[480px] max-[730px]:hidden "
                style={backgroundStyle}
              >

                
              </div>

              <div className="w-[650px] h-full bg-gray-900 p-10 max-[850px]:p-4 rounded-xl shadow-lg 
              
              ">
                <h2 className="text-3xl font-bold mb-2 text-yellow-400">
                  Get in Touch
                </h2>
                <p className="text-gray-300 mb-8">
                  Have any questions or want to work together? Fill the form
                  below and I’ll get back to you soon.
                </p>

                <form className="flex flex-col gap-5">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 max-[930px]:mb-0">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 max-[930px]:mb-1">Message</label>
                    <textarea
                      placeholder="Write your message..."
                      rows={3}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
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
    </>
  );
}
