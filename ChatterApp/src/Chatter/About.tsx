// import React from 'react'
import ChatterCard from './Card'
import { GoGraph } from "react-icons/go";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineContacts } from "react-icons/md";
import abt from "@/assets/abt.png"

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center mx-4'>
        <article className='flex flex-row justify-between items-center my-5 mx-6'>
            <div className='flex flex-col gap-5 w-6/12 '>
                <h4>
About Chatter
                </h4>
                <p className='text-sm leading-9'>
Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive 
                </p>
            </div>
            <div className='w-6/1210'>
                <img src={abt} alt=''/>
            </div>
        </article>
      
      <article className='w-[70%] my-16'>
        <div>
            <h4 className='text-center font-bold text-xl'>
                Why you should join chatter
                </h4>
                <p className=' text-sm text-center leading-9 '>
                 Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people   
                </p>
        </div>
        <div className='grid grid-cols-3 place-items-center gap-10 my-5 mx-20  '>
            <ChatterCard icon={<GoGraph />} title={'Analytics'} description={'Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time'}/>
            <ChatterCard icon={<HiMiniUserGroup />} title={'Social interactions'} description={'Users on the platform can interact with posts they like, comment and engage in discussions'}/>
            <ChatterCard icon={<MdOutlineContacts />} title={'Content creation'} description={'Write nice and appealing with our in-built markdown, a rich text editor'}/>
        </div>
      </article>
    </section>
  )
}

export default About
