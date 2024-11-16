export default function Footer() {
  return (
    <footer className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-quicksand text-sm text-gray-600">
            © {new Date().getFullYear()} Sloane. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 