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
                    <h1 className="text-4xl">AWS Cloud</h1>
                    <p>Expertise in architecting scalable AWS solutions tailored to clients' needs, optimizing performance, and ensuring cost-effectiveness for seamless cloud operations.</p>
                    <button className=" px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">Check</button>
                </div>
                <div className=" cursor-pointer hover:bg-gray-300  bg-slate-100 p-5 text-center shadow-lg rounded-xl service-1 space-y-4">
                    <i class=" text-5xl fa-brands fa-android"></i>
                    <h1 className="text-4xl">Android Development</h1>
                    <p>Proficient in crafting intuitive Android applications with a focus on user experience and performance optimization, leveraging the latest tools and technologies to deliver innovative solutions.</p>
                    <button className=" px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">Check</button>
                </div>
                <div className=" cursor-pointer hover:bg-gray-300 bg-slate-100 p-5 text-center shadow-lg rounded-xl service-1 space-y-4">
                    <i class=" text-5xl fa-solid fa-server"></i>
                    <h1 className="text-4xl">Backend Development</h1>
                    <p>Specializing in robust backend development, adept at designing and implementing scalable APIs and services using cutting-edge frameworks and best practices, security, and efficiency in web applications.</p>
                    <button className=" px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg">Check</button>
                </div>
            </div>

        </div>

        </>
    );
};
export default Services;