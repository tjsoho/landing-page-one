'use client'

/**************************************************
    IMPORTS
***************************************************/
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Button2 from "../ui/Button2";
import { Heading1, Heading3 } from '../ui/Typography';

/**************************************************
    TYPES & INTERFACES
***************************************************/

/**************************************************
    COMPONENT CODE
***************************************************/
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
    );
} 

