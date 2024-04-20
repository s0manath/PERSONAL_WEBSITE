import bannerBackground from "../assets/newbanner.jpg"; 
const Expertise= ()=>{

    return(
        <>
        <div className="mt-2">
            <h1 className="mb-16 text-5xl font-bold underline text-center">
                My Expertise
            </h1>
            {/* box section */}
        </div>
        
        <div
            
         className=" box-container items-center flex my-16">
            <div
                style={{
                    backgroundImage:`url(${bannerBackground})`,
                    backgroundSize:"cover",
                    padding:"50px",
                    borderRadius:"20px",
                    marginLeft:"30px"
                     }}
            className=" flex justify-center">
                {/* text container */}
                    <div className="w-2/3 text-center space-y-4">
                    <h1 className="text-4xl font-bold ">I love these technologies</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus culpa iusto doloribus distinctio modi rem aut ad repellendus inventore sint, mollitia voluptates natus vel ab alias obcaecati esse quas?</p>
                     <button className=" text-1xl px-4 py-2 bg-orange-500  rounded-full  shadow-lg">Hire Me</button>
                    </div>
                </div>
            <div className="flex justify-center">
                {/* skills container */}
                <div className="flex justify-center h-fit space-x-3 w-2/3 flex-wrap">
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Core Java</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">J2EE</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Hibernate(ORM Tool)</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Spring Framework</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Spring Boot Framework</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Spring Security</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Angular</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">ReactJs</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Javascript</p>
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">AWS Cloud</p> 
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">EC2</p> 
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">RestAPI</p> 
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Swagger</p> 
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Jquery</p> 
                <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">Ajax</p> 

                </div>
                
            </div>
        </div>

        </>
    );
};
export default Expertise;