import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-page'>
      <div>
        <Navbar/>
          <div className="text-center justify-center flex ml-2 mr-2 mb-2 min-h-screen items-center"> 
            <div class="left-hero">
                <img className="rounded-md object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKfsUgF_NCHY4foakfygi76_kJfsXkXRvfg&s" alt="Profile Picture"/>
            </div>
            <div class="right-hero">
                <div class="hero-text">
                    <h2 className="font-bold text-gray-600 text-5xl p-2">Hi! My name is Pearl Cara.Welcome to my website</h2>
                    <h3 className="text-gary-600 p-2 text-2xl font-semibold">Feel free to reach out about any enquiries.</h3>
                </div>
                <div class="booking">
                    <button className="shadow-md rounded-md hover:bg-gray-300 p-2 font-semibold text-xl"><Link  to='/contact'>Contact</Link></button>
                </div>
            </div>
          </div>
        <div className="flex justify-around shadow-lg rounded-xl p-5 items-center text-center"> 
            <div className="border rounded-lg mr-4 shadow-lg rounded-xl p-5 w-1/2">
              <h1 className="font-semibold text-lg text-gray-600">IJSO</h1>  
              <p className='m-3'>International Juniour Science Olympiad</p>
              <img className="rounded-md w-50 h-50 object-contain" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf84tF7d-uPPkCUonYHr-M1JowF4JpeSBxEg&s'/>
            </div>

            <div className="border rounded-lg ml-4 shadow-lg rounded-xl p-5 w-1/2">
              <h1 className="font-semibold text-lg text-gray-600">STEM fair</h1>  
              <p className='m-3'>Intra-school Science Project Competition</p>
              <img className="rounded-md w-50 h-50 object-contain" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNR1R5iJvj8HmBY3ZvviL8wadsnZkER3GVQ&s'/>
            </div>
        </div>
         
                  <footer>
                      <div className="bg-gray-200 p-4 bottom-0 inset-x-0 fixed text-center"> 
                          <p>&copy; 2024 Pearl Cara. All rights reserved</p>
                      </div>
                  </footer>
          </div>        
      </div>
  )
}

export default App
