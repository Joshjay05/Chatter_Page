import act from "@/assets/Frame.png"
import ActionButton from '@/Button/ActionBtn'
import { SelectedPage } from '@/Hooks/Chatter';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  
};
const Started = ({setSelectedPage}:Props) => {
  return (
     <section className=" flex flex-row gap-20 justify-center py-8 px-12 items-center my-10" >
        <img src={act} alt='' className=" ml-20"/>
        <div className="">
            <p className="text-4xl text-wrap leading-12 w-[80%] py-6">
Write, read and connect with great minds on chatter
            </p>
            <p className="pb-4">
Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals   
            </p>
            <p className="my-2">
<ActionButton setSelectedPage={setSelectedPage} page={SelectedPage.SignUp} >
              Get Started
            </ActionButton>
            </p>
            
        </div>
      </section>
  )
}

export default Started
