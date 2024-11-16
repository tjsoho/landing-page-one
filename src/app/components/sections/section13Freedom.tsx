/**************************************************
    IMPORTS
***************************************************/
import { Heading2, Heading4, SmallText } from '../ui/Typography';
import Button2 from '../ui/Button2';
import { BsArrowRightCircle } from 'react-icons/bs';

/**************************************************
    TYPES & INTERFACES
***************************************************/

/**************************************************
    COMPONENT CODE
***************************************************/

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
                {/* **************************************************    TOP CONTENT    ************************************************** */}
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
                        <Button2 
                            title="GET STARTED"
                            icon={<BsArrowRightCircle size={24} />}
                            textColor="text-brand-green"
                            textHoverColor="hover:text-gray-900"
                            backgroundColor="bg-brand-cream"
                            hoverBG="hover:bg-gray-100"
                        />
                    </div>
                </div>
                </div>

                {/* **************************************************    BOTTOM CONTENT    ************************************************** */}
            </div>
        </section>
    );
} 

