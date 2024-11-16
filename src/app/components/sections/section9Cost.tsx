/**************************************************
IMPORTS
***************************************************/

import Button2 from "../ui/Button2";
import { Heading1, Heading2 } from "../ui/Typography";


/**************************************************
COMPONENT CODE
***************************************************/




/**************************************************
RENDER COMPONENT
***************************************************/
export default function Section7Quote() {
    return (
        <section className="w-full bg-brand-cream pt-12 md:pt-16">
            <div className="flex flex-col justify-center items-center">
                <div className="w-full">
                    <Heading1 className="text-center text-brand-orange">
                        So, How Much Is it?
                    </Heading1>
                </div>
                <div className="w-full pl-8 xl:pl-96 my-8 lg:my-12">
                    <div className="w-full bg-brand-green rounded-l-2xl py-4">
                        <div className="max-w-[1440px] mx-auto px-8">
                            <Heading2 className="text-center text-brand-logo">
                                Only $79/pm, no lock in
                            </Heading2>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-2  lg:mt-16">
                    <Heading1 className="text-center text-brand-orange">
                        Wait ... What?
                    </Heading1>
                </div>
                <div className="w-full pl-8 xl:pl-96 mt-12">
                    <div className="w-full bg-brand-green rounded-l-2xl py-4">
                        <div className="max-w-[1440px] mx-auto px-8 flex flex-col justify-center items-center gap-8 py-8">
                            <Heading2 className="text-center text-brand-logo">
                                Yes, We&apos;re THAT Affordable
                            </Heading2>
                            <Button2 
                                title="Get Started"
                                textColor="text-brand-green"
                                textHoverColor="hover:text-brand-logo"
                                backgroundColor="bg-brand-logo"
                                hoverBG="hover:bg-brand-green"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}