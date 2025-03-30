import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Replace with your actual logo at public/logo.svg */}
          <img
            src="/logo.svg"
            alt="Devils Ad Astra Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Devils Ad Astra
          </span>
        </div>
        <div className="flex space-x-8">
          <Link
            href="/about"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/team"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Team
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
