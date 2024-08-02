import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar= () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <div className="flex justify-between bg-gray-100 shadow-lg top-0 p-4 rounded-xl mb-2 ">
                <div className="container mx-auto flex justify-between items-center">  
                    <h1 className="text-3xl font-semibold"><Link to='/'>Cara</Link></h1>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>  
                    <Link className="text-black block md:inline-block" to='/about'>•About me</Link>
                    <Link className="text-black block md:inline-block" to='/skilled'>•Skills and Education</Link>
                    <Link className="text-black block md:inline-block" to='/experience'>•Work Experience </Link> 
                    <Link className="text-black block md:inline-block" to='/contact'>•Contact</Link> 
                </div>
          </div>
        </div>

    )
}
export default Navbar;