import React from "react";

function Home() {
  return (
    <>
       <div className="min-h-screen w-full flex items-center justify-center">
            <div className=" w-[90%] md:w-[80%] text-center">
              <div className="font-semibold mb-15 text-6xl text-[#4B006E]">Welcome To My Website </div>
              <p className="lg:text-xl sm:text-sm  mb-15 w-[70%] mx-auto text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio totam nisi reiciendis alias culpa? Debitis deleniti accusantium dolor omnis corporis, iure et cupiditate eius exercitationem odio magnam. Aperiam, nihil.</p>
                    <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4B006E] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Gey Started
                    </button>
                </div>
     </div>
    </>
  )
}
export default Home;

