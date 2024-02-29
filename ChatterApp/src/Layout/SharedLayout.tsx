import Navbar from '@/Chatter/Navbar'
import { useState,useEffect } from 'react';

import { SelectedPage } from '@/Hooks/Chatter';
import { Outlet } from 'react-router-dom';
import Footer from '@/Chatter/Footer';
const SharedLayout = () => {
      const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
       <div className='mb-4'>
        <Navbar isTopOfPage={isTopOfPage}
 selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
        </div> 

        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SharedLayout