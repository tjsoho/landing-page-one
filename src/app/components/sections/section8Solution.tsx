/**************************************************
IMPORTS
***************************************************/
import { Heading3, Heading2 } from '../ui/Typography';
import Button2 from '../ui/Button2';


/**************************************************
TYPES & INTERFACES
***************************************************/
// Add any types here

/**************************************************
COMPONENT CODE
***************************************************/



/**************************************************
RENDER COMPONENT
***************************************************/
export default function Section8Solution() {
    return (
        <section className="w-full py-16 bg-brand-green">
            <div className="flex flex-col">
                
                {/**************************         LEFT SECTION *************************************/}
                <div className="max-w-[1440px] mx-auto flex flex-col ">
                    <div className="flex flex-col w-full justify-start">
                        <Heading3 className="text-left text-brand-cream">Say Hello to the</Heading3>
                        <Heading2 className="text-left text-brand-logo">Sloane Solution</Heading2>
                    </div>
                </div>
                

                {/* *******************************          RIGHT SECTIO        ************************************ */}
                <div className="w-full h-full bg-brand-logo">
                    <div>
                        <h1>Places holder</h1>    
                    </div>                
                        <Button2 
                            title="Book a 15 Min Call"
                            textColor="text-brand-green"
                            textHoverColor="hover:text-brand-logo"
                            backgroundColor="bg-brand-logo"
                            hoverBG="hover:bg-brand-green"
                        />
                </div>
            </div>
        </section>
);
} 