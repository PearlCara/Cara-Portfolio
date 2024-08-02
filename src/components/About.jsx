import Navbar from './Navbar'

const About = ()=>{
    return(
        <div className='main-page'>
            <Navbar/>
            <div className='container mx-auto p-6 min-h-screen items-center justify-center text-center'>
                <h2 className="text-4xl font-bold mb-6 text-center">About me</h2>
                <div className="flex flex-col items-center md:flex-row md:items-start">
                    <div className="md:w-1/2 h-full rounded-md object-contain">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKfsUgF_NCHY4foakfygi76_kJfsXkXRvfg&s" alt="Me"/>
                    </div>
                    <div className='md:w-1/2 justify-between mr-3 items-center' >
                        <p className="text-lg">
                        I am sixteen years of age and a highschool student at the moment, having had recently completed my exams. 
                        I enjoy subjects such as Maths and Science. I enjoy teaching and encouraging students to achieve the best they possibly can. 
                        My lesiure pursuits are painting, reading novels and watching scientific documentaries. Among the sceinces, I paticularly like Chemistry 
                        and I have future aspirations to pursue a career in it. I was specifically motivated by my chemistry teacher who taught passionately and diligently 
                        as well as the end goal of improving living conditions through research and development of chemicals. 
                        </p> 
                    </div>
                </div>
            </div>
            <div className='container mx-auto p-6 min-h-screen'>
                <h3 className="text-4xl font-bold mb-6 text-center">Hobbies</h3>
                <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-around">
                    <div className="border rounded-lg p-5 m-3">
                        <h1 className="font-semibold text-xl text-gray-600 mb-2 text-center">Painting</h1>  
                        <img className="rounded-sm w-full h-50 object-contain" src='https://www.companionstairlifts.co.uk/media/responsive/responsive-1024/upload/c0/d7/c0d79375047c1b7f0d30dbc3d25a007d7dad4058.jpeg'/>
                    </div>
                    <div className="border rounded-lg p-5 m-3">
                        <h1 className="font-semibold text-xl text-gray-600 mb-2 text-center">Reading</h1>  
                        <img className="rounded-sm w-full h-50 object-contain" src='https://www.uopeople.edu/wp-content/uploads/2022/06/blaz-photo-zMRLZh40kms-unsplash-scaled.jpg'/>
                    </div>
                    <div className="border rounded-lg p-5 m-3">
                        <h1 className="font-semibold text-xl text-gray-600 mb-2 text-center">Watching Documentaries</h1>  
                        <img className="rounded-sm w-full h-50object-contain" src='https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/01/02182229/netflix-2.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;