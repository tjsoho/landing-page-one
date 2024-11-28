'use client';
/**************************************************
    IMPORTS
***************************************************/
import { useState, useEffect } from 'react';
import { BodyText, Heading2, SmallText } from "../ui/Typography";
import Image from 'next/image';
import Button2 from '../ui/Button2';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import * as fbq from '../../utils/fpixel';

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
        content_category: 'chani section',
        location: 'section_11_chani',
    });
        window.open('https://app.sloane.biz/userform', '_blank');
    };

    return (
        <Button2 
            title="GET STARTED"
            icon={<BsFillArrowRightCircleFill size={24} />}
            textColor="text-brand-green"
            textHoverColor="hover:text-brand-logo"
            backgroundColor="bg-brand-logo"
            hoverBG="hover:bg-brand-green"
            onClick={handleRedirect}
        />
    );
};

const ResponsiveHeading = () => {
    const [isXlScreen, setIsXlScreen] = useState(false);

    useEffect(() => {
        // Function to check window width
        const checkScreenSize = () => {
            setIsXlScreen(window.innerWidth >= 1280); // xl breakpoint in Tailwind
        };

        // Check on initial load
        checkScreenSize();

        // Add event listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="w-full flex">
            <Heading2 className="text-brand-green">
                I was about to hire a VA {isXlScreen ? <br /> : ' '} and then i hung out with Sloane...
            </Heading2>
        </div>
    );
};

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section11Chani() {
    return (
        <section className="w-full py-20 bg-brand-cream">

            {/* **************************************************    1st ROW    ************************************************** */}
            <div className="container mx-auto px-4 flex flex-col gap-8">
                <ResponsiveHeading />
            </div>

            {/* **************************************************    Mobile 2nd ROW    ************************************************** */}
            <div className="flex flex-col mt-8 xl:hidden w-full justify-center items-center">
                <div className="flex justify-start items-center pr-6">
                    <div className="w-full bg-brand-orange-light rounded-r-xl p-4 ">
                        <BodyText className="text-black text-lg w-full">
                        Before I met Sloane, I was on the verge of hiring a VA, which would have cost a fortune in time and money. Now, with Sloane&apos;s capabilities stretching across all my business needs, I&apos;m saving more than just dollars— I&apos;m reclaiming my time. It&apos;s like having a VA 24/7, but at a fraction of the cost. Bye-bye, payroll worries; hello, efficiency!
                        </BodyText>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/images/shani.png" alt="Chanin" width={370} height={300} className='rounded-2xl w-[280px]'/>
                </div>
                <div className="flex justify-end items-center pl-6">
                    <div className="w-full bg-brand-orange-light rounded-l-xl p-4 ">
                    <BodyText className="text-black text-lg w-full">
                        Before I met Sloane, I was on the verge of hiring a VA, which would have cost a fortune in time and money. Now, with Sloane&apos;s capabilities stretching across all my business needs, I&apos;m saving more than just dollars— I&apos;m reclaiming my time. It&apos;s like having a VA 24/7, but at a fraction of the cost. Bye-bye, payroll worries; hello, efficiency!
                        </BodyText>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8">
                    <SmallText>Chani Peach - Author & Business Energy Coach</SmallText>
                </div>
            </div>

            {/* **************************************************    Desktop 2nd ROW    ************************************************** */}
            <div className="container mx-auto px-4 flex-col mt-32 relative xl:block hidden">
                <div className="flex justify-start items-center">
                    <div className="w-full lg:w-[60%] bg-brand-orange-light rounded-xl p-4 ">
                        <BodyText className="text-black text-lg w-3/5">
                        Before I met Sloane, I was on the verge of hiring a VA, which would have cost a fortune in time and money. Now, with Sloane&apos;s capabilities stretching across all my business needs, I&apos;m saving more than just dollars— I&apos;m reclaiming my time. It&apos;s like having a VA 24/7, but at a fraction of the cost. Bye-bye, payroll worries; hello, efficiency!
                        </BodyText>
                    </div>
                </div>
                <div className="flex justify-end items-center relative">
                    <div className="w-full lg:w-[60%] bg-brand-orange-light rounded-xl p-4 flex justify-end items-center">
                        <BodyText className="text-black text-lg w-3/5">
                       With ChatGPT, precision is key, but Sloane is a game changer. The personalised hour-long Zoom setup captures my voice perfectly, making it feel like Sloane already knows me. I suggested a podcast expert hub, and amazingly, they implemented it! It’s incredible how responsive Sloane is to user feedback, constantly evolving to meet our needs.
                        </BodyText>
                    <div className="absolute 2xl:-bottom-16 2xl:right-[38%] xl:right-[38%] xl:bottom-12">
                        <Image src="/images/shani.png" alt="Chanin" width={370} height={300} className='rounded-2xl xl:w-[300px] 2xl:w-[370px]'/>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-32">
                    <SmallText className='font-italic'>Chani Peach - Author & Business Energy Coach</SmallText>
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
                <UserFormButton />
            </div>
        </section>
    );
} 

