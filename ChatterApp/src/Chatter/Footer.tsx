// import React from 'react'
import logo from "@/assets/CHATTER.png"
const Footer = () => {
  return (
    <footer className=' bg-[#fff7e5] flex flex-row gap-52 px-20 py-16'>
      <div>
        <img src={logo} alt=''/>
      </div>

      <div  className='flex flex-row  gap-32'>
        <ul className='flex flex-col  gap-4'>
            <p className="font-bold">
Explore
            </p>
            <li>
community
            </li>
             <li>
              Trending blogs  
            </li>
             <li>
                Chatter for teams
            </li>
          
        </ul>
        <ul className='flex flex-col gap-4'>
          <p className="font-bold">
Support
            </p>
             <li>
               Support docs 
            </li>
             <li>
               Join slack
            </li>
             <li>
              Contact  
            </li>
        </ul>
        <ul className='flex flex-col gap-4'>
          <p className="font-bold">
Official blog
            </p>
             <li>
               Engineering blog 
            </li>
             <li>
               Engineering blog 
            </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
