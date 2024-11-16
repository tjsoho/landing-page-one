'use client'
import Image from "next/image";

import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="w-full shadow-lg border-b border-brand-logo sticky top-0 z-50 bg-brand-green">
      <div className="container mx-auto px-4 py-2 md:py-2">
        <nav className="flex items-center justify-between">
          <div className="">
            <Image src="/images/logo.png" alt="Sloane Logo" width={140} height={100} />
          </div>
          <div className="flex space-x-6 font-quicksand">
            
            <Button 
              title="GET STARTED"
              textColor="text-brand-green"
              textHoverColor="hover:text-brand-logo"
              backgroundColor="bg-brand-cream"
              hoverBG="hover:bg-brand-green-dark"
            />
          </div>
        </nav>
      </div>
    </header>
  );
} 