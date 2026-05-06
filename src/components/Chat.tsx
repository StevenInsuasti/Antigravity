export default function Chat() {
  return (
    <section className="py-24 bg-black text-white" id="chat">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Chat w/ Owner</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-t-lg overflow-hidden shadow-2xl">
          {/* Chat Header */}
          <div className="bg-zinc-800 px-6 py-3 border-b border-zinc-700">
            <p className="text-xs font-medium text-gray-300">Jims' Motorworks Chat Application</p>
          </div>
          
          {/* Chat History */}
          <div className="h-80 p-6 flex flex-col gap-6 overflow-y-auto bg-zinc-900">
            {/* Outgoing Message */}
            <div className="self-end max-w-xs">
              <p className="text-[10px] text-right text-gray-500 mb-1">You</p>
              <div className="bg-white text-black px-4 py-2 rounded-2xl rounded-tr-none text-sm">
                Hello, can I ask a question?
              </div>
            </div>
            
            {/* Incoming Message */}
            <div className="self-start max-w-xs">
              <p className="text-[10px] text-left text-gray-500 mb-1">Jims' Motorworks</p>
              <div className="bg-zinc-800 text-white px-4 py-2 rounded-2xl rounded-tl-none text-sm border border-zinc-700">
                Yes, what is? Feel free to ask about our shop
              </div>
            </div>
          </div>
          
          {/* Chat Input Area */}
          <div className="p-6 bg-zinc-900 border-t border-zinc-800">
            <div className="space-y-3">
              <input 
                className="w-32 bg-white text-black border-none rounded text-xs py-1 px-2 focus:ring-0 outline-none" 
                placeholder="Name:" 
                type="text"
              />
              <div className="flex gap-2">
                <input 
                  className="flex-1 bg-white text-black border-none rounded text-xs py-2 px-3 focus:ring-0 outline-none" 
                  placeholder="Type a message..." 
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
