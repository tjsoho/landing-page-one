'use client'

/**************************************************
    IMPORTS
***************************************************/
import { Heading2, Heading4 } from '../ui/Typography';
import Button2 from '../ui/Button2';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import * as fbq from '../../utils/fpixel';


/**************************************************
    COMPONENT CODE
***************************************************/
const UserFormButton = () => {
    const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
         fbq.event('initiate_checkout', {
        content_name: 'Get Started Click',
        content_category: 'work week section',
        location: 'section_14_workweek',
    });
        window.open('https://app.sloane.biz/userform', '_blank');
    };

    return (
        <Button2 
            title="GET STARTED"
            icon={<BsFillArrowRightCircleFill size={24} />}
            textColor="text-brand-logo"
            textHoverColor="hover:text-brand-green"
            backgroundColor="bg-brand-green"
            hoverBG="hover:bg-brand-logo"
            onClick={handleRedirect}
        />
    );
};

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section14Workweek() {
    return (
        <section className="w-full py-20 bg-brand-cream">
            <div className="max-w-[1440px] mx-auto px-4">
                {/* **************************************************    1st ROW    ************************************************** */}
                <div className="mb-8">
                    <Heading2 className="text-left text-brand-green">
                        Ready to redefine <br></br> your workweek?
                    </Heading2>
                </div>

                {/* **************************************************    2nd ROW    ************************************************** */}
                <div className="flex justify-start items-center">
                    <div className="max-w-[600px]">
                        <Heading4 className="text-left text-brand-green">
                            Join the thriving community of business owners who choose freedom and efficiency. 
                            Start your journey with Sloane, who commits as much as you do.
                        </Heading4>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end items-center mt-8">
                    <UserFormButton />
                </div>
            </div>
        </section>
    );
} 