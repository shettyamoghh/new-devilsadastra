import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Devils Ad Astra. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="mailto:devils.adastra@gmail.com"
            className="text-white hover:text-gray-400 text-sm"
          >
            Email
          </Link>
          <Link
            href="https://instagram.com/adastradevils"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            Instagram
          </Link>
          <Link
            href="https://www.youtube.com/@devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            YouTube
          </Link>
          <Link
            href="https://x.com/devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/in/devils-ad-astra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/devilsadastra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 text-sm"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
