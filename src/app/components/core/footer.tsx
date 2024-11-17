import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-green border-t border-brand-logo shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 py-4 ">
        <div className="flex flex-col items-center ">
          <div className="flex justify-center">
            <Image 
              src="/images/logo.png" 
              alt="Sloane Logo" 
              width={170} 
              height={80}
              className="mx-auto mb-2"
            />
          </div>
          <div className="font-quicksand text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Sloane. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 