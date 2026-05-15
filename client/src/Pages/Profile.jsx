export default function Profile() {
    return (
      <div className="rounded-[40px] bg-white/5 border border-white/10 p-10">
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-yellow-300" />
  
          <div>
            <h1 className="text-3xl font-bold">Cheptiony</h1>
  
            <p className="text-gray-400">
              Community member
            </p>
          </div>
        </div>
      </div>
    );
  }