import { Link } from "react-router-dom";

const Navbar= () =>{

    return(
        <div>
            <div className="flex justify-between bg-gray-100 shadow-lg top-0 p-4 rounded-xl mb-2">
                <div class="left-navbar">  
                        <h1 className="text-3xl font-semibold"><Link to='/'>Cara</Link></h1>
                </div>
                <div class="right-navbar" className="space-x-4">  
                        <span className="text-xl font-semibold text-gray-600"><Link to='/about'>About</Link></span>
                        <span className="text-xl font-semibold text-gray-600"><Link to='/skilled'>Skills and Education</Link></span>
                        <span className="text-xl font-semibold text-gray-600"><Link to='/experience'>Work Experience </Link></span> 
                        <span className="text-xl font-semibold text-gray-600"><Link to='/contact'>Contact</Link></span> 

                </div>
          </div>
        </div>

    )
}
export default Navbar;