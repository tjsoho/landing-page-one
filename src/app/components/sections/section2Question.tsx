'use client';

/**************************************************
    IMPORTS
***************************************************/

import { FaCircleArrowRight } from "react-icons/fa6";
import { BodyText, Heading2, Heading3 } from "../ui/Typography";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button2 from "../ui/Button2";
import Script from 'next/script';
import * as fbq from '../../utils/fpixel';


/**************************************************
    COMPONENT CODE
***************************************************/
const CalendlyButton = () => {
    const openCalendlyModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        fbq.event('initiate_checkout', {
        content_name: 'Book Call',
        content_category: 'section question',
        location: 'section_2_question',
    });
        e.preventDefault();
        
        // @ts-expect-error Calendly is added via external script
        if (typeof window !== 'undefined' && window.Calendly) {
            try {
                // @ts-expect-error Calendly is added via external script
                window.Calendly.initPopupWidget({
                    url: 'https://calendly.com/sloane-bookings/sloane-phone-call',
                    prefill: {},
                    parentElement: document.body,
                    text: 'Schedule time with me',
                    color: '#00BF63',
                    textColor: '#ffffff',
                    branding: true
                });
            } catch (error) {
                console.error('Calendly error:', error);
                window.open('https://calendly.com/sloane-bookings/sloane-phone-call', '_blank');
            }
        } else {
            window.open('https://calendly.com/sloane-bookings/sloane-phone-call', '_blank');
        }
    };

    return (
        <Button2 
            title="BOOK A 15 MiN CALL"
            icon={<BsFillArrowRightCircleFill size={24} />}
            textColor="text-brand-green"
            textHoverColor="hover:text-brand-logo"
            backgroundColor="bg-brand-logo"
            hoverBG="hover:bg-brand-green"
            onClick={openCalendlyModal}
        />
    );
};

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section2Question() {
    return (
        <section className="w-full py-20 bg-brand-cream">
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log('Calendly script loaded');
                }}
                onError={(e) => {
                    console.error('Calendly script error:', e);
                }}
            />

            {/***************************          GREEN BOX       ******************************************/ }
            <div className="pr-8 md:pr-32">
                    <div className="flex flex-col items-center justify-center w-full">
                        <Heading2 className="text-brand-green pb-8 text-center text-4xl font-archivo">Wondeing if Ai could <br></br>Help You in your Business?<br></br>Book a call and let&apos;s have a chat! </Heading2>
                        <div className="mt-8 mb-12 flex justify-center items-center w-full">
                            <CalendlyButton />
                        </div>
                    </div>
                <div className="bg-brand-green w-full py-8 md:py-16 flex items-center rounded-r-[30px] px-8 md:px-16 ">
                    <div className="w-full ">
                        <div className="max-w-[1440px] mx-auto border-white">
                            <Heading2 className="text-left text-4xl font-archivo text-brand-logo">Which Best <br></br>Describes You<br></br>Right Now?</Heading2>
                        </div>
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
                                /><Heading3 className="text-left text-4xl font-archivo text-brand-green">I have no idea where to even begin.</Heading3>
                            </div>
                            <div className="h-[1px] w-full bg-brand-green mt-2 md:mt-4"></div>
                        </div>
                        
                        <div className="max-w-[1440px] mx-auto mt-16">
                            <div className="flex justify-start items-center ">   
                                <Heading2 className="text-left text-4xl font-archivo text-brand-green">Then Sloane is for you.</Heading2>
                            </div>
                            <div className="mt-8 text-brand-green flex flex-col gap-4 mb-8">
                                <BodyText>Welcome to Your First Step to Effortless AI. </BodyText>
                                <BodyText>Unlike generic AI tools, Sloane offers a deeply personalised experience—adapting, evolving, and growing right alongside your business.
                                </BodyText>
                                <BodyText>Starting with Sloane means you&apos;re not just signing up for technology; you&apos;re gaining partners who prioritize real human connections.</BodyText>
                            </div>
                            <CalendlyButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 

