const Footer = () => {
    return (
      <>
        <div className="py-5 bg-gray-100 flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-32 border">
          {/* Copyright Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>
              @2024 Somanath Mohapatra <span>All Rights Reserved</span>
            </p>
          </div>
          {/* Links Section */}
          <div className="space-x-0 md:space-x-5 flex flex-col md:flex-row items-center text-center md:text-right">
            <a href="#" className="hover:underline mb-2 md:mb-0">About</a>
            <a href="#" className="hover:underline mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:underline mb-2 md:mb-0">Licensing</a>
            <a href="#" className="hover:underline mb-2 md:mb-0">Contact</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  