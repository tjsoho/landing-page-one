'use client'

/**************************************************
    IMPORTS
***************************************************/
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button2 from "../ui/Button2";
import { Heading1, Heading3 } from '../ui/Typography';
import * as fbq from '../../utils/fpixel';
import Script from 'next/script';


/**************************************************
    TYPES & INTERFACES
***************************************************/

/**************************************************
    COMPONENT CODE
***************************************************/
const UserFormButton = () => {
    const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fbq.event('initiate_checkout', {
            content_name: 'Get Started Click',
            content_category: 'hero section',
            location: 'section_1_hero',
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
            title="BOOK A 15 MiN CALL"
            icon={<BsFillArrowRightCircleFill size={24} />}
            textColor="text-brand-green"
            textHoverColor="hover:text-brand-green"
            backgroundColor="bg-brand-cream"
            hoverBG="hover:bg-brand-logo"
            onClick={handleRedirect}
        />
    );
};

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section1Hero() {
    return (
        <>
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
            <section className="w-full py-20 bg-brand-green bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row">
                    {/* Left column */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <Heading1 className="text-8xl font-archivo mb-8 text-brand-logo">Hello,</Heading1>
                        <Heading3 className="font-archivo mb-8 text-brand-logo">I&apos;m Sloane. <br></br>I&apos;m here to make sure<br></br>the only hard thing in your workday<br></br>is choosing where to have lunch.</Heading3>
                        <div>
                            <UserFormButton />
                        </div>
                    </div>
                    
                    {/* Right column */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
                        <Image src="/images/laptop.png" alt="Sloane Hero" width={600} height={600} />
                    </div>
                </div>
            </section>
        </>
    );
} 

