import ActionButton from '@/Button/ActionBtn'
// import React from 'react'
import { SelectedPage } from '@/Hooks/Chatter'
import homeimage from "@/assets/hero.png"
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  
};
const Home = ({setSelectedPage}:Props) => {
  return (
    <section className=' flex flex-col justify-center items-center relative bg-cover bg-center h-screen' style={{backgroundImage: `url(${homeimage})`}}>
        <article className=' z-10'>
  <p className='text-4xl  text-white z-30 py-4 font-bold max-w-5xl'>
        Welcome to Chatter: A Haven for Text-Based Content
        </p> 
        <p className='text-white text-xl pb-6'>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
        <ActionButton setSelectedPage={setSelectedPage} page={SelectedPage.ContactUs}>
            Get Started
        </ActionButton>
        </article>
     
          <div className="absolute inset-0 bg-black bg-opacity-50 "style={{zIndex:'1'}}></div>
    </section>
  )
}

export default Home