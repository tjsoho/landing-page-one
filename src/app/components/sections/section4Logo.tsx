/**************************************************
 IMPORTS
 ***************************************************/

'use client'
import Image from 'next/image'
import { Heading2 } from '../ui/Typography';

/**************************************************
    TYPES & INTERFACES
***************************************************/
// None needed for this component

/**************************************************
    COMPONENT CODE
***************************************************/

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Section2() {
  return (
    <section className="w-full py-20 bg-brand-cream">
      <div className="container mx-auto px-4">
        
        <Heading2 className="text-center mb-12 text-brand-orange-light">
          Trusted & Loved By
        </Heading2>
        
        {/* Logo grid - 2 rows on mobile, 1 row on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {/* Logo placeholders - repeat as needed */}
          <div className="aspect-[3/2] w-full flex items-center justify-center">
            <Image src="/images/1.png" alt="Logo 1" width={300} height={100} />
          </div>
          <div className="aspect-[3/2] w-full flex items-center justify-center">
            <Image src="/images/2.png" alt="Logo 2" width={300} height={100} />
          </div>
          <div className="aspect-[3/2] w-full flex items-center justify-center">
            <Image src="/images/3.png" alt="Logo 3" width={300} height={100} />
          </div>
          <div className="aspect-[3/2] w-full flex items-center justify-center">
            <Image src="/images/4.png" alt="Logo 4" width={300} height={100} />
          </div>
          <div className="aspect-[3/2] w-full flex items-center justify-center">
            <Image src="/images/5.png" alt="Logo 5" width={300} height={100} />
          </div>
          <div className="aspect-[3/2] w-full flex items-center justify-center">
            <Image src="/images/6.png" alt="Logo 6" width={300} height={100} />
          </div>
         
        </div>
      </div>
    </section>
  );
} 