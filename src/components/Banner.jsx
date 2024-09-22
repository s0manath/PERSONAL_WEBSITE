import { useRef, useEffect } from "react";
import bannerBackground from "../assets/bannerbg.jpg";
import bannerImage from '../assets/DSC_0330.jpg';
import Typed from "typed.js";

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [" Android Developer", " Fullstack Developer", " Java Developer", " Software Developer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleEmailButtonClick = () => {
        window.location.href = "mailto:soma756126@gmail.com";
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bannerBackground})`,
                backgroundSize: "cover",
                padding: "50px",
            }}
            className="main-container flex flex-col md:flex-row bg-clip-padding px-4 py-10"
        >
            <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left" style={{width: "100%"}}>
                <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
                <h1 className="text-4xl md:text-5xl font-bold">Somanath Mohapatra</h1>
                <h2 className="text-1.5xl md:text-3xl">
                    And I am <span className="font-bold underline" ref={el}></span>
                </h2>
                <p className="text-sm md:text-base">
                    I am passionate about using technology to solve real-world problems.
                    I am also a strong advocate for diversity and inclusion in the tech industry.
                    In my spare time, I enjoy hiking, reading, and spending time with my family.
                </p>
                {/* Social Icons */}
                <div className="icons-container space-x-5">
                    <a href="https://www.facebook.com/somnath.mahapatra.395/">
                        <i className="fa-brands text-3xl md:text-4xl fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/soma_na_th/?hl=en">
                        <i className="fa-brands text-3xl md:text-4xl fa-instagram"></i>
                    </a>
                    <button onClick={handleEmailButtonClick}>
                        <i className="fa-solid fa-envelope" style={{ fontSize: "30px" }}></i>
                    </button>
                    <a href="https://www.linkedin.com/in/somanath-mohapatra-66a784227/">
                        <i className="fa-brands text-3xl md:text-4xl fa-linkedin"></i>
                    </a>
                    <a href="https://x.com/SomanathMohap20?t=qwZO9P9cpA7U5seTjA160w&s=08">
                        <i className="fa-brands text-3xl md:text-4xl fa-x-twitter"></i>
                    </a>
                </div>
                <a className="px-3 py-2 bg-orange-500 rounded-full shadow-lg" href="tel:+919777815708">Contact Me</a>
            </div>

            {/* Image Container */}
            <div className="w-full flex justify-center mt-6 md:mt-0">
                <img className="rounded-full shadow-lg w-48 h-48 md:w-96 md:h-96" src={bannerImage} alt="Profile" />
            </div>
        </div>
    );
};

export default Banner;
