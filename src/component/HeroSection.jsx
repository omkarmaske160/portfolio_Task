import React from 'react'

const HeroSection = ({ darkMode }) => {
 
  return <section  >
      <div className=' flex mt-10 ml-30 items-top justify-between'>
           
          <div className=' mt-14'>
                <h3
                className="flex items-center justify-center text-lg  p-2 rounded-bl-none text-center text-white  w-28 h-9 rounded-full font-bold "
                style={{
                    background: 'linear-gradient(90deg, rgba(50, 246, 246, 1) 0%, rgba(166, 167, 159, 0.98) 100%)'
                }}
                >
                Hello!
                </h3>


                <h2 className='font-segoe flex font-medium text-4xl mt-4 '>I'm <p className=' text-[#737373] ml-3 flex-col '>Anish <p className={`h-[3px] w-22 ${darkMode?'bg-white':'bg-black'} mr-3`}></p></p> <img src="./Wave.svg" width={30}  /></h2>
                <p className={`mt-2 ${darkMode?"text-slate-300": "text-slate-700"}`}>UI/UX Designer Front-End Developer & Thinker. </p>
                <p className={`mt-1 ${darkMode?"text-slate-300": "text-slate-700"}`}> Based in India.</p>

              <div className='mt-16'>
                    <button
                      className={`text-white font-semibold px-5 py-2 rounded  shadow-slate-300 border-white border-2 mr-5 shadow-lg ${darkMode ?" shadow-slate-700" :" shadow-slate-300"}`}
                      style={{
                        background: 'linear-gradient(90deg, rgba(223, 88, 12, 1) 0%, rgba(253, 153, 61, 0.98) 100%)'
                      }}
                    >
                      Download CV
                    </button>
                    <button
                      className={`text-white font-semibold px-5 py-2 rounded shadow-md hover:opacity-90 transition border-white border-2  ${darkMode ?" shadow-slate-700" :" shadow-slate-300"}`}
                    
                      style={{
                        background: darkMode?'linear-gradient(90deg,rgba(67, 67, 67, 1) 0%, rgba(129, 126, 126, 0.98) 100%)':'linear-gradient(90deg, rgba(67, 67, 67, 1) 0%, rgba(0, 0, 0, 0.98) 100%)'
                      }}
                    >
                      Get in Touch!
                    </button>

                </div>
          </div>
          <img src="./Image.png" alt=""  width={500}/>  
          
      </div>    
      
  </section>
}

export default HeroSection