/**************************************************
IMPORTS
***************************************************/
import Image from 'next/image';
import { Heading3, Heading5 } from '../ui/Typography';

import Button2 from '../ui/Button2';

/**************************************************
TYPES & INTERFACES
***************************************************/
// Add any types here

/**************************************************
COMPONENT CODE
***************************************************/



/**************************************************
RENDER COMPONENT
***************************************************/
export default function Section6Founders() {
    return (
        <section className="w-full pt-16 bg-brand-green">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center">
                
                {/**************************         LEFT SECTION *************************************/}
                <div className="w-full h-full md:w-1/2 order-2 md:order-1">
                    <div className="w-full h-full flex justify-center items-center rounded-lg overflow-hidden">
                        <Image src="/images/founders.png" alt="Ready" width={600} height={600} className="rounded-xl" />
                    </div>
                </div>
                

                {/* *******************************          RIGHT SECTIO        ************************************ */}
                <div className="w-full h-full md:w-1/2 px-4 order-1 md:order-2">
                    <Heading3 className="text-left text-brand-cream xl:text-5xl">
                        Meet Toby and Rachel, <br></br>the Founders of Sloane,
                    </Heading3>
                    <Heading5 className="text-left text-brand-cream mb-4 md:mb-8 ">
                        who are dedicated to supporting you every step of the way. <br></br><br></br>
                        With their hands-on approach, you gain a personalised AI team that truly understands and evolves in response to your specific business needs and YOUR voice.
                    </Heading5>
                    <div className="w-full h-[0.5px] bg-brand-cream my-4"></div>
                    
                    <div className="my-12 w-full flex flex-col items-center">
                        <Heading5 className="text-center text-brand-cream mb-4 ">
                            Curious if Sloane is right for you?<br></br>
                            Let's figure it out together
                        </Heading5>
                        <Button2 
                            title="Book a 15 Min Call"
                            textColor="text-brand-green"
                            textHoverColor="hover:text-brand-logo"
                            backgroundColor="bg-brand-logo"
                            hoverBG="hover:bg-brand-green"
                        />
                    </div>
                </div>
            </div>
        </section>
);
} 