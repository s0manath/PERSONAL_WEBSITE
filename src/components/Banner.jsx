import { useRef } from "react";
import bannerBackground from "../assets/bannerbg.jpg";
import bannerImage from '../assets/DSC_0330.jpg';
import Typed from "typed.js";
import { useEffect } from "react";

const Banner =()=>{

    const el=useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: [" Android Developer", " Fullstack Developer", " Java Developer", " Software Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop:true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };

    },[]);

    const handleEmailButtonClick = () => {
        window.location.href = "mailto:soma756126@gmail.com";
    };


    return(

    <div
    style={{
        backgroundImage:`url(${bannerBackground})`,
        backgroundSize:"cover",
        padding:"50px",
    }} 
    className="main-container flex bg-clip-padding">{/* Text Container */}
        <div className=" w-full flex justify-center items-center">
             <div className="w-2/3 ms-10 space-y-2 text-black">
                <h3 className='text-3xl font-semibold'>Hi, I am</h3>
                <h1 className='text-5xl font-bold'>Somanath Mohapatra</h1>
                <h2 className=' text-3xl'>
                    And I am  <span className="font-bold underline " ref={el}></span>
                </h2>
               <p className=''>I am passionate about using technology to solve real-world problems.
                                I am also a strong advocate for diversity and Inclusion in the techindustry.
                                In my spare time ,I enjoy hiking,reading and spending time with my family</p>
                  <div className="icons-container space-x-5">
                      <a href="https://www.facebook.com/somnath.mahapatra.395/"><i class="fa-brands text-4xl fa-facebook"></i></a>  
                      <a href="https://www.instagram.com/soma_na_th/?hl=en"><i class="fa-brands text-4xl fa-instagram"></i></a>
                      <button onClick={handleEmailButtonClick}><i class="fa-solid fa-envelope" style={{ fontSize: "36px" }}></i></button>
                      <a href="https://www.linkedin.com/in/somanath-mohapatra-66a784227/"><i class="fa-brands text-4xl fa-linkedin"></i></a>
                      <a href="https://x.com/SomanathMohap20?t=qwZO9P9cpA7U5seTjA160w&s=08"><i class="fa-brands text-4xl fa-x-twitter"></i></a>        
                  </div>
               <br/>
                <a className= 'px-3 py-2 bg-orange-500 rounded-full shadow-lg' href="/contact">Contact Me</a>
             </div>
        </div>
        <div className="w-full flex justify-center  ">{/* image container */}
            <img className="rounded-full shadow-lg w-96 h-96 " src={bannerImage}/>
        </div>
    </div>
    );

};
export default Banner;