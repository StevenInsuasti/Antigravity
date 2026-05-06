export default function About() {
  // Replace with your real storefront image
  const imageUrl = "https://picsum.photos/seed/motorworks/600/400";

  return (
    <section className="py-24 bg-black text-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 text-sm leading-loose">
            <p className="mb-4">
              Jims' Motorworks is a small shop to aid motor owner and help them maintain their bikes. It started on 2018 up until now. The shop sells different kind of motor parts, from interior to exterior. They just don't sell parts, we can also help them put it in their bikes by providing different kind of motor services.
            </p>
            <p>
              The shop's main goal is to help motor owners by providing them what they need with a high quality products and services. It is owned by James Zen Pregonero and Rose Mary Deocareza.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
            <img 
              alt="Storefront" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" 
              src={imageUrl} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
