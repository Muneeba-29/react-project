import React from "react";

function About(){
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className=" w-[90%] md:w-[80%] border border-purple-300 shadow-lg rounded-xl p-8 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 w-full h-auto">
                    <img 
                        src="https://media.gettyimages.com/id/1311977351/photo/focused-on-success-and-growth.jpg?s=612x612&w=0&k=20&c=ZC4825QyArXmHB_quCjr184x1xm_mEDKGq3-52KVh7w=" 
                        alt="Focused business woman" 
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="md:w-1/2 w-full my-auto text-center">
                    <h2 className="text-6xl font-bold text-[#4B006E] mb-6">About Us</h2>
                    <p className="mb-6 px-2 md:px-4 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores fugiat voluptate repellendus assumenda, facilis ad eos minima est animi dicta atque dolor ut quibusdam. Ratione neque nihil harum quam.
                    </p>
                    <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#4B006E] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Learn more
                    </button>
                </div>

            </div>
     </div>
    );
}

export default About;
