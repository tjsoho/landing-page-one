/**************************************************
IMPORTS
***************************************************/

import { Heading4, SmallText } from "../ui/Typography";


/**************************************************
COMPONENT CODE
***************************************************/




/**************************************************
RENDER COMPONENT
***************************************************/
export default function Section7Quote() {
    return (
        <section className="w-full bg-brand-cream py-8 md:py-16 px-8">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="w-full">
                    <Heading4 className="text-left text-brand-green">
                        “At Sloane,<br></br> we blend AI with genuine human connection. <br></br>Personal interaction is irreplaceable, <br></br>and we aim to humanise AI, <br></br>making it a true partner, not just a tool.”
                    </Heading4>
                    <SmallText className="text-left text-brand-green mt-4">
                        Toby & Rachel, Founders of Sloane
                    </SmallText>
                </div>
            </div>
        </section>
    )
}