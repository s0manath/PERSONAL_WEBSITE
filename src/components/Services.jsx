const Services =()=>{

    return(
        <>
        <div className=" main-container py-14">
            <h1 className="text-5xl font-bold text-center underline">
                My Services
            </h1>
            <div className="services-container flex mt-12 space-x-5 px-10">
                <div className=" cursor-pointer hover:bg-gray-300 bg-slate-100 p-5 text-center shadow-lg rounded-xl service-1 space-y-4">
                    <i class=" text-5xl fa-brands fa-aws"></i>
                    <h1 className="text-4xl">Web Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio explicabo quia necessitatibus sint magnam minus culpa similique accusantium iure repellat?</p>
                    <button className=" px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">Check</button>
                </div>
                <div className=" cursor-pointer hover:bg-gray-300  bg-slate-100 p-5 text-center shadow-lg rounded-xl service-1 space-y-4">
                    <i class=" text-5xl fa-brands fa-android"></i>
                    <h1 className="text-4xl">Android Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio explicabo quia necessitatibus sint magnam minus culpa similique accusantium iure repellat?</p>
                    <button className=" px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">Check</button>
                </div>
                <div className=" cursor-pointer hover:bg-gray-300 bg-slate-100 p-5 text-center shadow-lg rounded-xl service-1 space-y-4">
                    <i class=" text-5xl fa-solid fa-server"></i>
                    <h1 className="text-4xl">Backend Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio explicabo quia necessitatibus sint magnam minus culpa similique accusantium iure repellat?</p>
                    <button className=" px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">Check</button>
                </div>
            </div>

        </div>

        </>
    );
};
export default Services;