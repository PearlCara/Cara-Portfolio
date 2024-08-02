import Navbar from "./Navbar";

const Contact = ()=>{
    return(
        <div className="min-h-screen container mx-auto">
            <Navbar/>
            <div className="container flex items-center justify-center mx-auto p-6 min-h-screen">
                <div className="p-6  bg-gray-100 w-full md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
                    <p className="text-lg mb-3 text-center">Feel free to contact me</p>
                    <div className="space-y-4">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <span className=" text-gray-600" class="material-symbols-outlined">
                                id_card
                            </span>
                            <span>Name:Pearl Cara</span> 
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <span className=" text-gray-600" class="material-symbols-outlined">
                                call
                            </span>
                            <span>Phone number:2657896054</span> 
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <span className=" text-gray-600" class="material-symbols-outlined">
                                mail
                            </span>
                            <span>Email:chemistry.fan@879.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Contact;