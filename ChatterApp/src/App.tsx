
import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import Home from './Chatter/Home'
import { SelectedPage } from './Hooks/Chatter';
import SharedLayout from './Layout/SharedLayout';
import LandingPage from './Chatter/LandingPage';
// import { ReactNode } from 'react';
export type AppProps = {
  setSelectedPage: (value: SelectedPage) => void;
  // SharedLayout:ReactNode
};
function App(
  {setSelectedPage}:AppProps
  ) {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<SharedLayout/>}>
    <Route index element={<LandingPage setSelectedPage={setSelectedPage}/>}/>
    </Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
