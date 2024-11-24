'use client'

/**************************************************
    IMPORTS
***************************************************/
import Image from 'next/image';
import { Heading2, Heading4 } from '../ui/Typography';
import { TiTick } from "react-icons/ti";
import Button2 from '../ui/Button2';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

/**************************************************
    TYPES & INTERFACES
***************************************************/
// Add any types here

/**************************************************
    COMPONENT CODE
***************************************************/
// Tick Item Component
const TickItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-4 mb-4">
        <TiTick className="text-brand-logo text-4xl shrink-0" />
        <Heading4 className="text-brand-cream text-2xl">{text}</Heading4>
    </div>
);

const UserFormButton = () => {
    const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.open('https://app.sloane.biz/userform', '_blank');
    };

    return (
        <Button2 
            title="GET STARTED"
            icon={<BsFillArrowRightCircleFill size={24} />}
            textColor="text-brand-green"
            textHoverColor="hover:text-brand-green"
            backgroundColor="bg-brand-logo"
            hoverBG="hover:bg-brand-cream"
            onClick={handleRedirect}
        />
    );
};

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section3() {
    return (
        <section className="w-full pt-20 md:py-0 bg-brand-green">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="w-full h-full md:w-1/2 px-4">
                    <Heading2 className="text-left text-brand-logo mb-4 md:mb-8">Are you ready to...<br></br></Heading2>
                    <TickItem text="Free Up 10 Hours Per Week" />
                    <TickItem text="Grow Your Business Effortlessly" />
                    <TickItem text="Gain a Sparring Partner" />
                    <TickItem text="Offload the Tasks You Avoid" />
                    <TickItem text="Access Expert Guidance in all Parts of Your Business" />
                    <div className="my-12">
                        <UserFormButton />
                    </div>
                </div>

                {/* Right side remains the same */}
                <div className="w-full h-full md:w-1/2">
                    <div className="w-full h-full flex justify-center items-center rounded-lg overflow-hidden">
                        <Image src="/images/soloBeach.jpg" alt="Ready" width={600} height={600} className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
} 