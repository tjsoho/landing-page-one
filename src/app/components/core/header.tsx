'use client'

/**************************************************
    IMPORTS
***************************************************/
import Image from "next/image";
import Button from "../ui/Button";
import * as fbq from '../../utils/fpixel';


/**************************************************
    COMPONENT CODE
***************************************************/
const UserFormButton = () => {
    const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fbq.event('Purchase', {
        content_name: 'Get Started Click',
        content_category: 'purchase',
        location: 'desktop_header',
        value:79,
        currency:'AUD',
    });
        window.open('https://app.sloane.biz/userform', '_blank');
    };

    return (
        <Button 
        title="GET STARTED"
        textColor="text-brand-green"
        textHoverColor="hover:text-brand-green"
        backgroundColor="bg-brand-cream"
        hoverBG="hover:bg-brand-logo"
        onClick={handleRedirect}
    />
    );
};

/**************************************************
    RENDER COMPONENT
***************************************************/
export default function Header() {
    return (
        <header className="w-full shadow-lg border-b border-brand-logo sticky top-0 z-50 bg-brand-green">
            <div className="container mx-auto px-4 py-2 md:py-2">
                <nav className="flex items-center justify-between">
                    <div className="">
                        <Image src="/images/logo.png" alt="Sloane Logo" width={140} height={100} />
                    </div>
                    <div className="flex space-x-6 font-quicksand">
                        <UserFormButton />
                    </div>
                </nav>
            </div>
        </header>
    );
} 