import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Replace with your actual logo in public/logo.svg */}
          <img
            src="/logo.jpg"
            alt="Devils Ad Astra Logo"
            className="h-10 w-10"
          />
          <Link
            href="/"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            <span className="text-2xl font-bold text-white">
              Devils Ad Astra
            </span>
          </Link>
        </div>
        <div className="flex space-x-8">
          <Link
            href="/about"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-white transition-colors hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
