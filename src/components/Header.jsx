import { useState } from "react";

const Header = () => {

    const [brandName,setBrandname]=useState("Somanath Mohapatra");
    const[menuLink,setMenuLink]=useState([
        {
            title:'Home',
            link:'/home',
            id:1,
        },
        {
            title:'About',
            link:'/about',
            id:2,
        },
        {
            title:'Skills',
            link:'/skills',
            id:3,
        },
        {
            title:'Portfolio',
            link:'/portfolio',
            id:4,
        },
        {
            title:'Contact',
            link:'/contact',
            id:5,
        },
    ]);
    const [actionButton,setActionButton]=useState({
            title:'Download CV',
            link:'/hireme',
});
    const handleDownloadPDF = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    window.open('/PERSONAL_WEBSITE/src/assets/somanath.pdf', '_blank');
    };


    return (
     <>
        <div className=" h-20 border main flex justify-between items-center px-16 bg-gray-100">
            <div>
                {/* brand logo */}
                <h1 className="text-3xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-6">
                {/*menu links  */}

                {menuLink.map((link)=>(
                   <a key={link.id} href={link.link}className="hover:text-orange-600">{link.title}</a> 
                ))}

                {/* <a href="/about"className="hover:text-orange-600">About</a>
                <a href="/skills"className="hover:text-orange-600">Skills</a>
                <a href="/portfolio"className="hover:text-orange-600">Portfolio</a>
                <a href="/contact"className="hover:text-orange-600">Contact</a> */}
            </div>
            <div>
                {/* Button */}
                <button onClick={handleDownloadPDF} className="px-4 py-2 bg-orange-400 shadow rounded-full text-1xl">{actionButton.title}
                </button>
            </div>

        </div>
     </>
    );
};
export default Header;