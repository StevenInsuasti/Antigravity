import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Jims' Motorworks</h3>
            <div className="flex space-x-4 text-xs text-gray-500 uppercase tracking-widest">
              <Link className="hover:text-white" href="/">Home</Link>
              <Link className="hover:text-white" href="#about">About</Link>
              <Link className="hover:text-white" href="#reviews">Reviews</Link>
              <Link className="hover:text-white" href="#chat">Chats</Link>
            </div>
          </div>
          <div className="text-right">
            <div className="flex justify-end mb-4">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <p className="text-xs text-gray-600">Support: www.jimsmotorworks2018@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2018 Motorworks. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
