export default function Hero() {
  // Replace these with your real product images
  const imageUrl = "https://picsum.photos/seed/nitrox/400/400";
  const thumbnailUrls = [
    "https://picsum.photos/seed/shock1/64/64",
    "https://picsum.photos/seed/shock2/64/64",
    "https://picsum.photos/seed/shock3/64/64",
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-24 hero-gradient text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Product Thumbnails */}
        <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
          {thumbnailUrls.map((url, i) => (
            <div key={i} className="w-16 h-16 border border-gray-700 bg-black flex items-center justify-center p-2 rounded">
              <img alt={`Shock ${i + 1}`} className="object-contain h-full" src={url} />
            </div>
          ))}
        </div>
        
        {/* Main Product Image */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <img alt="Nitrox Suspension Main" className="max-w-md w-full drop-shadow-2xl" src={imageUrl} />
        </div>
        
        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left order-3">
          <h1 className="text-5xl font-black mb-4 tracking-tighter leading-none">
            NITROX<br />SUSPENSION
          </h1>
          <p className="text-gray-400 text-sm mb-8 max-w-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-2 border border-white rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all">Chat</button>
            <button className="px-8 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-all">Review</button>
          </div>
        </div>
      </div>
      
      {/* Customer Quote */}
      <div className="mt-16 text-center">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Reviews</p>
        <p className="text-gray-300 italic">"Customer: This product and the shop is all in!!!"</p>
      </div>
    </section>
  );
}
