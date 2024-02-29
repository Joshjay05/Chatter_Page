// import React from 'react'
import Home from './Home'
import About from './About'
import { SelectedPage } from '@/Hooks/Chatter';
import Action from './Action';
import Started from './GetStarted';
// import ActionButton from '@/Components/Button';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  
};
const LandingPage = ({setSelectedPage}:Props) => {
  return (
    <div>
      <Home setSelectedPage={setSelectedPage}/>
      <About/>
     <Action setSelectedPage={setSelectedPage}/>
     <Started setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default LandingPage
