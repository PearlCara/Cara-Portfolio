import Navbar from './Navbar'

const Experience= () =>{
    return(
        <div className='main-page'>
            <Navbar/>
            <div className='container mx-auto p-6 min-h-screen'>
                <h2 className="text-4xl font-bold mb-6 text-center">Work Experience</h2>    
                <div className=" flex flex-col items-center md:flex-row md:items-start ">
                    <div className="md:w-1/2 justify-between mr-3 items-center ">
                        <h2 className='text-3xl font-bold mb-3'>Trainee Lab Technician</h2>
                        <p className='text-lg mb-3'>Kenyatta National Hospital</p>
                        <p className="text-lg ">For work experience,my school had organised us programs to engage in the workplace and gain skills relevant to the profession, 
                        I did my work experience in a <a href="vhttps://knh.or.ke/">hospital</a> specifically the laboratory 
                        where I learned a few processes and interesting equipment used there. I got to learn more about the profession of a laboratory technician. 
                        In school, during our chemistry lessons I got to acquire and develop my experimental skills and during one of the holidays I attended a Chemistry Bootcamp, 
                        where I further got to do that.
                        </p>
                    </div>
                    <div className="md:w-1/2 h-full rounded-md object-contain">
                            <img className='w-full h-auto rounded-xl mb-5' src="https://news.csudh.edu/wp-content/uploads/2021/08/bootcamp-feature.jpg" alt="My work"/>
                            <img className='w-full h-auto rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDaWKSTlZgceBs_UtZTs8ZjjyQIp7v7NNPw&s" alt="My work"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;