/**************************************************
    IMPORTS
***************************************************/
import Image from "next/image";
import { Heading1 } from "../ui/Typography";


/**************************************************
    TYPES & INTERFACES
***************************************************/

/**************************************************
    COMPONENT CODE
***************************************************/


/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section10Comments() {
    return (
        <section className="w-full py-20 bg-brand-green bg-[url('/images/beachTowel.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-4 flex flex-col gap-8">
                
                {/* **************************************************    1st ROW    ************************************************** */}
                <div className="w-full flex gap-2 md:justify-around">
                    <Image src="/images/text1.jpg" alt="Comments" width={300} height={100} className="w-1/2 lg:w-[350px] rounded-lg"/>  
                    <Image src="/images/text2.jpg" alt="Comments" width={300} height={100} className="w-1/2 lg:w-[350px] rounded-lg"/>  
                </div>

                {/* **************************************************    2nd ROW    ************************************************** */} 
                <div className="w-full flex items-center justify-center">
                    <div className="w-1/2 flex-flex-col justify-center items-center">
                        <Image src="/images/text3.jpg" alt="Comments" width={300} height={100} className="w-full lg:w-[350px] rounded-lg mb-8"/>  
                        <Image src="/images/text4.jpg" alt="Comments" width={300} height={100} className="w-full lg:w-[350px] rounded-lg"/>  
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <Heading1 className="text-brand-logo">
                            The <br></br>Sloane <br></br>Touch
                        </Heading1>
                    </div>
                </div>    
                
                {/* **************************************************    2nd ROW    ************************************************** */} 
                <div className="w-full flex flex-col lg:flex-row justify-around items-center">
                    <Image src="/images/text5.jpg" alt="Comments" width={300} height={100} className="w-2/3 lg:w-[350px] rounded-lg mb-8"/>  
                    <Image src="/images/text6.jpg" alt="Comments" width={300} height={100} className="w-2/3 lg:w-[350px] rounded-lg mb-8"/>  
                    <Image src="/images/text7.jpg" alt="Comments" width={300} height={100} className="w-2/3 lg:w-[350px] rounded-lg"/>  
                </div>
            </div>
        </section>
    );
} 

