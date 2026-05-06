export default function Reviews() {
  return (
    <section className="py-24 bg-dark-bg text-white" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Reviews</h2>
        <div className="flex justify-center items-center gap-4 md:gap-0 review-perspective relative">
          {/* Left Review (Small/Skewed) */}
          <div className="hidden md:block w-1/4 border border-gray-800 bg-black p-6 rotate-y-left">
            <p className="text-[10px] text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          
          {/* Center Review (Featured) */}
          <div className="w-full md:w-2/5 border border-gray-700 bg-black p-10 z-10 shadow-2xl text-center">
            <p className="text-sm text-gray-300 mb-6 italic leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            </p>
            <div className="flex justify-center gap-1 mb-4 text-yellow-500">
              {[1, 2, 3, 4].map(i => <span key={i}>★</span>)}
              <span className="text-gray-600">☆</span>
            </div>
            <h4 className="text-lg font-bold">John Doe</h4>
          </div>
          
          {/* Right Review (Small/Skewed) */}
          <div className="hidden md:block w-1/4 border border-gray-800 bg-black p-6 rotate-y-right">
            <p className="text-[10px] text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="px-8 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-gray-200 transition-all">
            Add Review
          </button>
        </div>
      </div>
    </section>
  );
}
