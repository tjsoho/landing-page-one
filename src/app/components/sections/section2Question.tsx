/**************************************************
    IMPORTS
***************************************************/

import { FaCircleArrowRight } from "react-icons/fa6";
import { Heading2, Heading3, SmallText } from "../ui/Typography";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button2 from "../ui/Button2";

/**************************************************
    TYPES & INTERFACES
***************************************************/

/**************************************************
    COMPONENT CODE
***************************************************/

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section2Question() {
  return (
    <section className="w-full py-20 bg-brand-cream">

        {/***************************          GREEN BOX       ******************************************/ }
      <div className="pr-8 md:pr-32">
        <div className="bg-brand-green w-full py-8 md:py-16 flex items-center rounded-r-[30px] px-8 md:px-16 ">
            <div className="w-full ">
                <div className="max-w-[1440px] mx-auto border-white">
                <Heading2 className="text-left text-4xl font-archivo text-brand-logo">Which Best <br></br>Describes You<br></br>Right Now?</Heading2></div>
            </div>
        </div>

        {/***************************          QUESTION BOX       ******************************************/ }
        <div className=" w-full pt-8 md:pt-16 flex items-center rounded-r-[30px] px-8 md:px-16 ">
            <div className="w-full h-full gap-8">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex justify-start items-center gap-4">   
                        <FaCircleArrowRight className="text-brand-green text-5xl md:text-3xl" 
                        /><Heading3 className="text-left text-4xl font-archivo text-brand-green">Ai is good but it doesn&apos;t sound like me.</Heading3>
                    </div>
                    <div className="h-[1px] w-full bg-brand-green mt-2 md:mt-4"></div>
                </div>
                <div className="max-w-[1440px] mx-auto mt-8">
                    <div className="flex justify-start items-center gap-4">   
                        <FaCircleArrowRight className="text-brand-green text-5xl md:text-3xl" 
                        /><Heading3 className="text-left text-4xl font-archivo text-brand-green">I know there&apos;s more it could help me with.</Heading3>
                    </div>
                    <div className="h-[1px] w-full bg-brand-green mt-2 md:mt-4"></div>
                </div>
                <div className="max-w-[1440px] mx-auto mt-8">
                    <div className="flex justify-start items-center gap-4">   
                        <FaCircleArrowRight className="text-brand-green text-5xl md:text-3xl" 
                        /><Heading3 className="text-left text-4xl font-archivo text-brand-green">I have no idea where to even begin.</Heading3>
                    </div>
                    <div className="h-[1px] w-full bg-brand-green mt-2 md:mt-4"></div>
                </div>
                <div className="max-w-[1440px] mx-auto mt-8">
                    <div className="flex justify-start items-center gap-4">   
                        <FaCircleArrowRight className="text-brand-green text-5xl md:text-3xl" 
                        /><Heading3 className="text-left text-4xl font-archivo text-brand-green">It&apos;s all a bit confusing & overwhelming.</Heading3>
                    </div>
                    <div className="h-[1px] w-full bg-brand-green mt-2 md:mt-4"></div>
                </div>
                <div className="max-w-[1440px] mx-auto mt-16">
                    <div className="flex justify-start items-center ">   
                        <Heading2 className="text-left text-4xl font-archivo text-brand-green">Then <span className="text-brand-logo bg-brand-green px-6 pb-2 pt-3 rounded-full">Sloane</span> is for you.</Heading2>
                    </div>
                    <div className="mt-8 text-brand-green flex flex-col gap-4 mb-8">
                        <SmallText>Welcome to Your First Step to Effortless AI. </SmallText>
                        <SmallText>Unlike generic AI tools, Sloane offers a deeply personalised experience—adapting, evolving, and growing right alongside your business.
                        </SmallText>
                        <SmallText>Starting with Sloane means you’re not just signing up for technology; you’re gaining partners who prioritize real human connections.</SmallText>
                    </div>
                <Button2 
                    title="BOOK A CALL"
                    icon={<BsFillArrowRightCircleFill size={24} />}
                    textColor="text-brand-green"
                    textHoverColor="hover:text-brand-logo"
                    backgroundColor="bg-brand-logo"
                    hoverBG="hover:bg-brand-green"
            />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
} 

