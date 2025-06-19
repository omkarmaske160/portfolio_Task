import React from 'react'

const AboutSection = ({darkMode}) => {
  return <section className='ml-[23%] mr-[17%] mt-10 text-sm'>
    <div className='flex items-end mb-5'>
        <h1 className='flex mr-15 items-end text-lg'><p className='font-medium text-5xl'>T </p>his is it.  ;)</h1>
        <di className={`${darkMode ?"bg-slate-300":"bg-slate-700"} w-[77%] h-[1px] `}></di>
    </div>
    <div className={`${darkMode ? "text-slate-300":"text-slate-700 "}`}>
        <p>Anish Kr. Sinha is an Indian <span className={`${darkMode ? "text-white font-medium":"text-slate-900 font-medium "}`}>UI/UX Designer & Front End Developer</span> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. 
    </p>
    <p>
    He holds a <span className={`${darkMode ? "text-white font-medium":"text-slate-900 font-medium "}`}> bachelor degree in Computer Applications.</span> During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.
    </p>
    <p className='mt-4'>  
     His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <span className={`${darkMode ? "text-white font-medium":"text-slate-900 font-medium "}`}>3D floor plan.</span>
    </p>
     <p className='mt-4'>
      When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
     </p>
    </div>
    <div className={` ${darkMode?"bg-slate-300":"bg-slate-700"} h-[1px] w-64 mx-[35%] mt-16`}></div>
    <img src="/src/asset/Vector 1.png" alt=""  className='fixed left-0 top-[17%] h-[500px] w-80'/>
    <img src="/src/asset/Rectangle.png" alt=""  className='fixed left-0 top-[17%] h-[500px] w-[23.5rem]'/>
    <img src="/src/asset/Vector 3.png" alt="" className='fixed top-[19%] h-[600px] w-80 right-0' />
    <img src="/src/asset/Vector 4.png" alt="" className='fixed bottom-5 left-[17%]  w-52 ' />
    <img src="/src/asset/Vector 5.png" alt="" className='fixed bottom-5 right-[15%]  w-64 ' />
  </section>
}

export default AboutSection