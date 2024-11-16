/**************************************************
    IMPORTS
***************************************************/
import { Heading2, Heading3, BodyText } from '../ui/Typography';

/**************************************************
    TYPES & INTERFACES
***************************************************/
interface StepProps {
    number: string;
    title: string;
    description: string;
}

/**************************************************
    COMPONENT CODE
***************************************************/
const Step = ({ number, title, description }: StepProps) => (
    <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center">
            <span className="text-2xl font-Black text-brand-green">{number}</span>
        </div>
        <div className="flex flex-col">
            <Heading3 className="text-brand-cream ">{title}</Heading3>
            <BodyText className="text-brand-cream">{description}</BodyText>
        </div>
    </div>
);


/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section12Works() {
    return (
        <section className="w-full py-20 bg-brand-green">
            <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center">
                
                {/* **************************************************    1st ROW    ************************************************** */}
                <div className="text-center mb-16">
                    <Heading2 className="text-brand-logo">How It Works</Heading2>
                </div>

                {/* **************************************************    2nd ROW    ************************************************** */}
                <div className="flex flex-col gap-12 mb-16 w-full max-w-5xl">
                    <Step 
                        number="1"
                        title="Personalisation"
                        description="Subscribe and start with a one-on-one chat with our founders Toby or Rachel to tailor Sloane for your business."
                    />
                    <Step 
                        number="2"
                        title="Flexibility"
                        description="No lock-in contracts. Use Sloane for as long as you want and cancel anytime, risk-free."
                    />
                    <Step 
                        number="3"
                        title="Support"
                        description="Watch as Sloane helps you save time and grow your business efficiently."
                    />
                </div>

                {/* **************************************************    3rd ROW    ************************************************** */}
                <div>
                    <BodyText className="text-brand-cream my-4 text-center">Watch our demo video to see it in action</BodyText>
                </div>
                
                <div className="w-full max-w-4xl aspect-video shadow-xl border-[1px] border-black ">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/_K7tuTrp41k"
                        title="How Sloane Works"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
} 