/**************************************************
IMPORTS
***************************************************/
import { Heading3, Heading2, Heading4, BodyText } from '../ui/Typography';
import Button2 from '../ui/Button2';
import { FaTimes, FaCheck } from 'react-icons/fa';

/**************************************************
COMPONENT CODE
***************************************************/
const ComparisonTable = () => {
    const features = [
        {
            name: 'Generic Responses',
            chatgpt: true,    // true for tick, false for cross
            sloane: false
        },
        {
            name: 'Quick Responses',
            chatgpt: true,
            sloane: true
        },
        {
            name: 'Accessibility',
            chatgpt: true,
            sloane: true
        },
        {
            name: 'Built-In Prompts',
            chatgpt: false,
            sloane: true
        },
        {
            name: 'Personalisation completed for you',
            chatgpt: false,
            sloane: true
        },
        {
            name: 'Human Support from Business Owners',
            chatgpt: false,
            sloane: true
        },
        {
            name: 'Tailored Experience',
            chatgpt: false,
            sloane: true
        },
        {
            name: 'Expert-driven Business Hubs',
            chatgpt: false,
            sloane: true
        },
        {
            name: 'Continuous Updates as per user request',
            chatgpt: false,
            sloane: true
        },
    ];

    return (
    <div className="w-full max-w-[1370px] mx-auto py-8">
    
      {/* Desktop view */}
        <div className="grid md:grid-cols-3 gap-4 max-w-[1440px] relative">
            {/* Headers */}
            <Heading4 className="text-xl font-bold text-brand-green-dark">Feature</Heading4>
            <Heading4 className="text-xl font-bold text-brand-green-dark text-center">ChatGPT</Heading4>
            <Heading4 className="text-xl font-bold text-brand-green-dark text-center">Sloane</Heading4>

            {/* Feature rows */}
            {features.map((feature, index) => (
            <div key={`feature-row-${index}`} className="contents">
                <BodyText className="text-brand-green-dark">
                    {feature.name}
                </BodyText>
                <div className="flex justify-center items-center">
                    {feature.chatgpt ? (
                        <FaCheck className="text-2xl text-brand-green" />
                    ) : (
                        <FaTimes className="text-2xl text-red-500" />
                    )}
                </div>
                <div className="flex justify-center items-center">
                    {feature.sloane ? (
                        <FaCheck className="text-2xl text-brand-green" />
                    ) : (
                        <FaTimes className="text-2xl text-red-500" />
                    )}
                </div>
                {/* Line that spans all columns */}
                <div className="col-span-3 h-[1px] bg-brand-green-dark/20 " />
            </div>
            ))}
        </div>

        
    </div>
    );
};

/**************************************************
RENDER COMPONENT
***************************************************/
export default function Section8Solution() {
    return (
        <section className="w-full py-16 bg-brand-green">
            <div className="flex flex-col">
                {/* Title Section */}
                <div className='w-full'>
                    <div className="max-w-[1440px] mx-auto flex flex-col px-4 md:px-0">
                        <div className="flex flex-col w-full justify-start items-start mb-12 px-4 2xl:px-0">
                            <Heading3 className="text-left text-brand-cream">Say Hello to the</Heading3>
                            <Heading2 className="text-left text-brand-logo">Sloane Solution</Heading2>
                        </div>
                    </div>
                </div>
                
                {/* Comparison Table with full-width background */}
                <div className='w-full pr-6 md:pr-16'>
                    <div className='w-full bg-brand-logo rounded-r-2xl'>
                        <div className='max-w-[1440px] mx-auto px-8'>
                            <ComparisonTable />
                        </div>
                    </div>
                </div>
                {/* CTA Button */}
                <div className="max-w-[1440px] mx-auto flex justify-center mt-12 px-4">
                    <Button2 
                        title="Get Started"
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