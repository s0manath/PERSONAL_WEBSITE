import { useState } from "react";
import bannerImage from "../assets/sphoto.jpg";
import { data } from "autoprefixer";
const About =()=>{
   const [data,setData]= useState({
        image:bannerImage,
        title:"java developer and Android developer",
        desc1:`As a skilled Java developer and frontend enthusiast,
        I am passionate about creating dynamic web applications and
        user interfaces that deliver exceptional experiences. With
        a solid background in Java programming and proficiency in
        frontend technologies such as HTML, CSS, and JavaScript,
        I excel in developing responsive and visually appealing solutions. `,
        desc2:`From building interactive web pages to optimizing performance, I leverage my expertise to deliver 
        intuitive and engaging user interfaces. Explore my portfolio to see examples of my projects and discover 
        how I combine Java backend development with frontend design to create impactful digital experiences.`,
         actionButton:{
            title:"Read More..",
            link:"/readmore",

         },
    });
return (<>

        <div className="main-container bg-gray-100 border py-9 ">
        <h1 className="text-center py-16 text-5xl underline font-bold">About Me</h1>

                <div className=" flex justify-center">
                    {/* image container */}
                    <div className="w-full flex justify-center">
                        <img className="rounded-full shadow-lg w-96 h-96 " src={data.image} alt="somanath mohapatra" />

                    </div>

                    {/* text container */}
                    <div className="w-full flex justify-center">
                        <div className="space-y-5 w-2/3">
                        <h1 className="text-5xl  font-semibold">{data.title}</h1>
                        <p>{data.desc1}</p>
                        <p>{data.desc2}</p>
                        <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow-lg">{data.actionButton.title}</button>
                        </div>

                    </div>
                </div>
               

        </div>
</>
 );
};
export default About;