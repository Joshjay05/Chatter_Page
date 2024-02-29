import React, { ReactNode } from 'react'

type Props = {
    icon:ReactNode;
    title:string;
    description:string
}

const ChatterCard = ({icon,title,description}: Props) => {
  return (
    <section className='flex flex-col justify-center flex-wrap gap-4 shadow border border-gray-50 h-full py-4 px-2  ' >
        <div className=' flex flex-col justify-center items-center h-5 w-5 rounded-full border border-gray radius bg-slate-100'>
            {icon}
            </div>
            <div className='font-bold'>

        {title}
            </div>
            <div className='text-xs text-wrap leading-6'>

        {description}
            </div>
    </section>
  )
}

export default ChatterCard