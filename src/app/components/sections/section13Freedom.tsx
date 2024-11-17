'use client'

/**************************************************
    IMPORTS
***************************************************/
import { Heading2, Heading4, SmallText } from '../ui/Typography';
import Button2 from '../ui/Button2';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

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
export default function Section13Freedom() {
    return (
        <section 
            className="w-full bg-cover bg-center h-screen flex flex-col justify-center"
            style={{ backgroundImage: "url('/images/mum.jpg')" }}
        >   
            <div className="max-w-[1440px] mx-auto px-4 ">
                <div className="flex flex-col justify-center items-center mb-20 h-full">
                    <Heading2 className="text-brand-logo text-center mb-2 lg:text-8xl">
                        Feel The Freedom
                    </Heading2>
                    <p className="text-brand-logo font-Black text-2xl self-end">
                        It&apos;s a no brainer
                    </p>
                    <div className="flex w-full justify-start items-end mt-16">
                        <div className="flex flex-col lg:gap-4">
                            <Heading4 className="text-brand-cream">For Only</Heading4>
                            <Heading2 className="text-brand-logo">$79/mth</Heading2>
                            <SmallText className="text-brand-cream">no lock ins</SmallText>
                            <UserFormButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 

