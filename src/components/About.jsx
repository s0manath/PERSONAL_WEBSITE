import { useState } from "react";
import bannerImage from "../assets/sphoto.jpg";

const About = () => {
    const [data, setData] = useState({
        image: bannerImage,
        title: "Java Developer and Android Developer",
        desc1: `As a skilled Java developer and frontend enthusiast,
        I am passionate about creating dynamic web applications and
        user interfaces that deliver exceptional experiences. With
        a solid background in Java programming and proficiency in
        frontend technologies such as HTML, CSS, and JavaScript,
        I excel in developing responsive and visually appealing solutions.`,
        desc2: `From building interactive web pages to optimizing performance, I leverage my expertise to deliver 
        intuitive and engaging user interfaces. Explore my portfolio to see examples of my projects and discover 
        how I combine Java backend development with frontend design to create impactful digital experiences.`,
        actionButton: {
            title: "Read More..",
            link: "/readmore",
        },
    });

    return (
        <>
            <div className="main-container bg-gray-100 border py-9">
                <h1 className="text-center py-16 text-3xl md:text-5xl underline font-bold">About Me</h1>

                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 md:px-32 lg:px-32 px-4">
                    <div className="w-full flex justify-center md:w-1/3">
                        <img className="rounded-full shadow-lg w-48 h-48 md:w-96 md:h-96" src={data.image} alt="Somanath Mohapatra" />
                    </div>
                    <div className="w-full flex justify-center md:w-3/5">
                        <div className="space-y-5 text-center md:text-left">
                            <h1 className="text-2xl md:text-5xl font-semibold">{data.title}</h1>
                            <p className="text-sm md:text-base">{data.desc1}</p>
                            <p className="text-sm md:text-base">{data.desc2}</p>
                            <button className="bg-orange-500 px-3 py-2 text-sm md:text-lg rounded-full shadow-lg">
                                {data.actionButton.title}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
