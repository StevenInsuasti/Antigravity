import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-bold tracking-tight text-white">Jims' Motorworks</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <Link className="hover:text-white transition-colors" href="/">Home</Link>
          <Link className="hover:text-white transition-colors" href="#about">About</Link>
          <Link className="hover:text-white transition-colors" href="#chat">Chat</Link>
          <Link className="hover:text-white transition-colors" href="#reviews">Review</Link>
        </nav>
        <div>
          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
