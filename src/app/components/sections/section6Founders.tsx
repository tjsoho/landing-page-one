'use client'

/**************************************************
IMPORTS
***************************************************/
import Image from 'next/image';
import { Heading3, Heading5 } from '../ui/Typography';
import Button2 from '../ui/Button2';
import Script from 'next/script';
import * as fbq from '../../utils/fpixel';


/**************************************************
TYPES & INTERFACES
***************************************************/

/**************************************************
COMPONENT CODE
***************************************************/
const CalendlyButton = () => {
    const openCalendlyModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fbq.event('initiate_checkout', {
        content_name: 'Get Started Click',
        content_category: 'cost section',
        location: 'section_9_hero',
    });
        
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
            title="Book a 15 Min Call"
            textColor="text-brand-green"
            textHoverColor="hover:text-brand-green"
            backgroundColor="bg-brand-logo"
            hoverBG="hover:bg-brand-cream"
            onClick={openCalendlyModal}
        />
    );
};

/**************************************************
RENDER COMPONENT
***************************************************/
export default function Section6Founders() {
    return (
        <section className="w-full pt-16 bg-brand-green">
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
                            Let&apos;s figure it out together
                        </Heading5>
                        <CalendlyButton />
                    </div>
                </div>
            </div>
        </section>
    );
} 