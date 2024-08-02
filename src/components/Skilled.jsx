import Navbar from './Navbar'


const Skilled= () =>{
    return(
        <div className='main-page'>
            <Navbar/>
            <div>
                <h2 className="text-4xl font-bold mb-6 text-center">Skills</h2>
                <p className="text-lg"> The following are soft and hard skills I have acquired in my progression.</p>
            </div>

            <div class="tooltip">
                <h2 className='text-3xl font-semibold text-center'>Soft skills</h2>
                <span class="tooltiptext">"personal attributes that enable someone to 
                interact effectively and harmoniously with other people."</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 items-center">
               
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'>
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Adaptability</h2>
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover " src="https://whatfix.com/blog/wp-content/uploads/2021/10/Adaptablity-in-workplace.png" alt="Adaptability"/>
                        </div>
                    </div>
                </div>   
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'>
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Attention to detail</h2>
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover" src="https://www.cmaeurope.org/wp-content/uploads/2021/08/images-webpage-clubhouse-attention-to-detail.jpg" alt="Attention to detail"/>
                        </div>
                    </div>
                </div>   
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'> 
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Reliability</h2>
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover" src="https://cdn-icons-png.flaticon.com/512/4371/4371446.png" alt="Reliability"/>
                        </div>
                    </div> 
                </div>
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'> 
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Respectfulness</h2> 
                        <div className='w-full h-50'>  
                            <img className="w-full h-full rounded-md object-cover" src="https://media.licdn.com/dms/image/C4E12AQF4t6eOySnQnQ/article-cover_image-shrink_600_2000/0/1557665031885?e=2147483647&v=beta&t=HXoUeIUIapFs5E_XjdXI3W1Ae82whbVZen5A4qSSCz8" alt="Respectfulness"/>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="tooltip">
                <h2 className='text-3xl font-semibold text-center'>Hard skills</h2>
                <span class="tooltiptext">"learnable skills that enable individuals to 
                perform job-specific tasks."</span>
            </div>
             
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 items-center">
                
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'> 
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Mathematics</h2>
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/022/085/877/small_2x/mathematics-doodle-set-education-and-study-concept-school-equipment-maths-formulas-in-sketch-style-hand-drawn-ector-illustration-isolated-on-white-background-vector.jpg" alt="Maths"/>
                        </div>
                    </div>
                </div>
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'> 
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Comparative analysis</h2>
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2K3Dt473-k4WXHPWVmXnNEUm8Ad3mncCuBQ&s" alt="Comparative analysis"/> 
                        </div>
                    </div>
                </div>
                <div class="right-skills"> 
                    <div className='border rounded-lg p-5 m-3'> 
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Statistical analysis</h2>
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover" src="https://blog.wyzant.com/wp-content/uploads/2023/09/How-to-Meaningfully-Interpret-Statistical-Analyses.png" alt="Statistical analysis"/>
                        </div>
                    </div>
                </div>
                <div class="right-skills">
                    <div className='border rounded-lg p-5 m-3'> 
                        <h2 className="text-xl text-gray-600 mb-2 font-semibold">Data analysis</h2>  
                        <div className='w-full h-50'>
                            <img className="w-full h-full rounded-md object-cover" src="https://images.spiceworks.com/wp-content/uploads/2022/09/14132828/A-pair-of-data-analysts-working-on-a-data-analysis-flowchart.jpg" alt="Data analysis"/> 
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-center">Education</h2>  
            <div className="flex justify-between text-center">
                <div className=' m-3 border shadow-lg rounded-xl p-5 w-1/2'>
                    <div class="left-education">
                        <h3 className="text-xl text-gray-600 mb-2 font-semibold"> <a href="https://thumbs.dreamstime.com/z/certificate-vintage-classic-certificate-template-151409324.jpg">KCPE Certificate</a> </h3>
                        <p> This is a primary school completion certificate.</p>
                    </div>
                </div>
                <div className=' m-3 border shadow-lg rounded-xl p-5 w-1/2'>
                    <div class="right-education">
                        <h3 className="text-xl text-gray-600 mb-2 font-semibold"> <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyblNYIxmdo0IwLlk6ruBUcyrNuhDO9QECVA&s">IB Diploma</a> </h3>
                        <p> The International Baccalaureate® (IB) Diploma Programme (DP) 
                            is an assessed programme for students aged 16 to 19.  </p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default Skilled;