import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-2 px-4 md:px-8">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <div>
            <Image
              src="/Logo-text.png"
              alt="Logo"
              width={196}
              height={108}
              className="w-44 h-24"
            />
          </div>
          <p className="text-gray-400 mt-2 md:mt-0 md:ml-4">
            © 2025 Special Dance Tv. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/specialdancetv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@specialdancetv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/socialdancetvuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
