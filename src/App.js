import React, { useState } from "react";

function App() {
  const [listVisible, SetListVisible] = useState(false);

  const menuList = () => {
    console.log("Everything is fine");
    console.log(listVisible);
    (!listVisible ? SetListVisible(true) : SetListVisible(false))


  }

  return (

    <div className="bg-gradient-to-br from-pink-600 via-yellow-300 to-green-700 p-6 h-screen sm:w-[120%] sm:h-full ">
      <div className="px-6 pt-6 shadow-inner rounded-lg md:bg-opacity-75">
        <div className="flex justify-between ">

          {/* Navbar */}
          <div>
            {/* logso */}
            <a href="/">
              <img className="h-14" src="https://www.neolen.com/static/media/neolen-logo.ff6502dd2d9b7d3d9cb4.png" alt="logo" />
            </a>
          </div>

          <span className="lg:hidden sm:ml-24 md:ml-60  ">
            <img className="h-8" src={!listVisible ?
               "https://cdn-icons.flaticon.com/png/512/2976/premium/2976215.png?token=exp=1655150452~hmac=5971c4211621d794e6f5051cc075cc23" :
                "https://cdn-icons-png.flaticon.com/512/1828/1828778.png"}
                 alt="" onClick={menuList} />
          </span>

          <div>
            {/* Content */}
            <ul className={!listVisible ?
               "lg:flex items-center text-white text-lg font-semibold md:opacity-100 md:hidden  sm:mt-24 sm:bg-sky-500/100 sm:rounded-lg sm:absolute sm:ml-[-180px] sm:p-4  sm:opacity-0 " :
                "lg:flex items-center text-white text-lg font-semibold  sm:mt-24 md:mt-24 sm:bg-sky-500/100 md:bg-sky-500/100 sm:rounded-lg md:rounded-lg sm:absolute md:absolute sm:ml-[-180px] md:ml-[-180px] sm:p-4 md:p-4  sm:opacity-100 ms:opacity-100"}>
              <li className="mr-8 sm:mt-4 md:mt-4"><a href="/">Home</a></li>
              <li className="mr-8 sm:mt-4 md:mt-4"><a href="/">Crew++</a></li>
              <li className="mr-8 sm:mt-4 md:mt-4"><a href="/">MarketPlace</a></li>
              <li className="mr-8 sm:mt-4 md:mt-4"><a href="/">Event & Blog</a></li>
              <li className="mr-8 sm:mt-4 md:mt-4"><button className="border-white border-solid border-2 p-2 px-6 rounded-lg hover:shadow-md">Contact Us</button></li>
            </ul>
          </div>

        </div>

        <div className="lg:flex md:flex mt-16">

          <div className="w-[50%] sm:w-[100%]">
            <div className="w-[65%] sm:w-[100%]">
              {/* <h1 className="text-7xl font-bold text-white border-t-8 border-b-8 border-white py-8 ">Develop</h1><h1> Faster,Better</h1> */}
              <h1 className="text-7xl md:text-6xl sm:text-6xl font-bold text-white overline pt-8 ">Develop</h1><h1 className="text-7xl md:text-6xl sm:text-6xl font-bold text-white underline underline-offset-[30px]"> Faster,Better</h1>
              <p className="text-gray-200  mt-14 sm:text-white">Technological advancements are changing the future of business and so can you. We can help you enhance your business with our faster and better services. To know more book a free appointment now.</p>
              <button className="border-white border-solid border-2 p-2 px-6 rounded-lg text-white hover:shadow-md mt-14 ">Book an appointment</button>
            </div>
          </div>


          <div className="w-[50%] sm:w-[100%]  ">
            <img className="h-[104%] sm:h-96 sm:mt-1 sm:w-96 sm:w-96  -mt-20 " src="https://www.neolen.com/static/media/Saly-19.fe38241d95cb2d175e6d.png" alt="" />
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
