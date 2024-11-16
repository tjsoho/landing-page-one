/**************************************************
    IMPORTS
***************************************************/
import { Heading2, Heading4 } from '../ui/Typography';
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
                    <Button2 
                        title="START TODAY"
                        icon={<BsArrowRightCircle size={24} />}
                        textColor="text-brand-cream"
                        textHoverColor="hover:text-gray-100"
                        backgroundColor="bg-brand-green"
                        hoverBG="hover:bg-brand-green-dark"
                    />
                </div>
            </div>
        </section>
    );
} 