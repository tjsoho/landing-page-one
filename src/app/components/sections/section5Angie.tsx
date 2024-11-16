/**************************************************
    IMPORTS
***************************************************/
import Image from 'next/image';
import { BodyText, SmallText } from '../ui/Typography';


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
export default function Section5Angie() {
    return (
        <section className="w-full pt-20 bg-brand-cream">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center">

            {/***************************          LAPTOP Image Mobile       ******************************************/ }
                <div className="w-full h-full md:w-1/2 px-4 order-2 md:order-1">
                    <Image src="/images/laptop.png" alt="Ready" width={600} height={600} className="rounded-xl" />
                </div>
            
            {/***************************          Angie Image Mobile       ******************************************/ }
            <div className="w-full h-full md:w-1/2 order-1 md:order-2 xl:hidden">
                <div className="w-full h-full bg-brand-orange-light relative rounded-2xl py-4">
                    <div className="absolute -top-20 left-8">
                        <Image src="/images/angie.png" alt="Angie" width={200} height={100} className="rounded-2xl" />
                    </div>
                    <div className='flex justify-end items-end'>
                        <div className="px-4 w-full pt-[220px]">
                            <BodyText className="font-bold">
                                &quot;I&apos;ve tried numerous AI tools, but Sloane stands out with its intuitively designed dashboard. The categories for each section make it a game changer, perfectly aligning with how I think. Highly user-friendly and effective, Sloane has truly transformed my creative process.&quot;    
                            </BodyText>
                            <SmallText className='my-2'>Angie Starr, The Mini Course Method</SmallText>
                        </div>
                    </div>
                </div>
            </div>
            {/***************************          Angie Image Desktop       ******************************************/ }
            <div className="w-full h-full md:w-1/2 order-1 md:order-2 xl:block hidden">
                <div className="w-full h-full bg-brand-orange-light relative rounded-2xl py-4">
                    <div className="absolute bottom-8 left-8">
                        <Image src="/images/angie.png" alt="Angie" width={300} height={100} className="rounded-2xl" />
                    </div>
                    <div className='flex justify-end items-end'>
                        <div className="px-4 w-1/2 ">
                            <BodyText className="font-bold">
                                &quot;I&apos;ve tried numerous AI tools, but Sloane stands out with its intuitively designed dashboard. The categories for each section make it a game changer, perfectly aligning with how I think. Highly user-friendly and effective, Sloane has truly transformed my creative process.&quot;
                            </BodyText>
                            <SmallText className='my-2'>Angie Starr, The Mini Course Method</SmallText>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
);
} 