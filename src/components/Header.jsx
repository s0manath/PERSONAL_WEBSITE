import { useState } from "react";
import myPdf from '../assets/somanath.pdf';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Importing menu and close icons

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [brandName, setBrandname] = useState("Somanath Mohapatra");
    const [menuLink, setMenuLink] = useState([
        { title: 'Home', link: '/home', id: 1 },
        { title: 'About', link: '/about', id: 2 },
        { title: 'Skills', link: '/skills', id: 3 },
        { title: 'Portfolio', link: '/portfolio', id: 4 },
        { title: 'Contact', link: '/contact', id: 5 },
    ]);
    const [actionButton, setActionButton] = useState({
        title: 'Download CV',
        link: '/hireme',
    });

    const handleDownloadPDF = () => {
        window.open(myPdf, '_blank');
    };

    return (
        <div className="h-20 border main flex flex-row md:flex-row justify-between items-center px-4 md:px-16 bg-gray-100">
            <div>
                {/* brand logo */}
                <h1 className="text-2xl md:text-3xl font-bold">{brandName}</h1>
            </div>
            <div className="hidden md:flex space-x-6">
                {/* Menu links */}
                {menuLink.map((link) => (
                    <a key={link.id} href={link.link} className="hover:text-orange-600">
                        {link.title}
                    </a>
                ))}
            </div>
            <button
                onClick={handleDownloadPDF}
                className="px-4 py-2 bg-orange-400 shadow rounded-full text-xl whitespace-nowrap text-ellipsis"
            >
                {actionButton.title}
            </button>

            <div className="md:hidden flex items-center">
                {/* Menu icon */}
                <h1
                    className="text-2xl cursor-pointer mx-4"
                    onClick={() => setIsMenuOpen(true)}
                >:::</h1>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center z-50">
                    <div className="absolute top-4 right-4">
                        <h1
                            className="text-2xl text-white cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        >X</h1>
                    </div>
                    <div className="space-y-4">
                        {menuLink.map((link) => (
                            <a key={link.id} href={link.link} className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;