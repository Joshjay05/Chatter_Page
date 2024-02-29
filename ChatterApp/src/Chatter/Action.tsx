import act from "@/assets/act.png"
import ActionButton from '@/Button/ActionBtn'
import { SelectedPage } from '@/Hooks/Chatter';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  
};
const Action = ({setSelectedPage}:Props) => {
  return (
     <section className="bg-[#fff7e5] flex flex-row gap-20 justify-center py-16 px-6 items-center my-10" >
        <img src={act} alt='' className="rounded-full w-52 h-52 ml-24"/>
        <div className="mr-4">
            <p className="text-sm leading-9 py-6">
"Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”
            </p>
            <p className="pb-4">
<span className="font-bold">
    Adebobola Muhydeen,
    </span> Software developer at Apple 
            </p>
            <p className="my-2">
<ActionButton setSelectedPage={setSelectedPage} page={SelectedPage.SignUp} >
                Join Chatter
            </ActionButton>
            </p>
            
        </div>
      </section>
  )
}

export default Action
